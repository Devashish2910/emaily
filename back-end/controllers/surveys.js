const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Surveys = mongoose.model('surveys');
const checkCredits = require('./../middlewares/checkCredits');
const Mailer = require('./../services/Mailer');
const surveyTemplate = require('./../services/emailTemplate/surveyTemplate');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const requireAuthentication = require('./../middlewares/requireAuthentication');

// get all surveys- /api/surveys/
router.get('/', requireAuthentication, async (req, res) => {
    const user = req.user;
    const surveys = await Surveys.find({_user: user.id})
        .select({recipients: false});

    res.send(surveys);
});

// webhook for new survey- /api/surveys/webhooks
router.post('/webhooks', (req, res) => {

    const p = new Path('/api/surveys/reply/:surveyId/:choice');
    _.chain(req.body)
        .map((event) => {
            const match = p.test(new URL(event.url).pathname);
            if (match) {
                return {
                    email: event.email,
                    surveyId: match.surveyId,
                    choice: match.choice
                }
            }
        })
        .compact()
        .uniqBy('email', 'surveyId')
        .each(({email, surveyId, choice}) => {
            console.log(`${email}, ${surveyId}, ${choice}`);
            Surveys.updateOne(
                {
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                },
                {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }
            ).exec();
        })
        .value();
    res.send({});
});

// thanks feedback- /api/surveys/reply/:surveyId/:choice
router.get('/reply/:surveyId/:choice',(req, res) => {
    res.redirect('/surveys/thanks');
    //res.send({status: "success", data: "Thanks for Feedback!"});
});

// create new survey- /api/surveys/new
router.post('/new', requireAuthentication, checkCredits,async (req, res) => {
    const user = req.user;
    const {title, subject, description, recipients} = req.body;

    const survey = new Surveys({
        title,
        subject,
        description,
        recipients: recipients.split(',').map(email => ({email: email.trim()})),
        _user: user.id,
        dateSent: Date.now()
    });

    // Send an Email
    try {
        const user_name = `${req.user.first_name} ${req.user.last_name}`;
        const mailer = new Mailer(survey, surveyTemplate(survey, user_name));
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
    } catch (e) {
        res.status(422).send(e)
    }


});

module.exports = router;