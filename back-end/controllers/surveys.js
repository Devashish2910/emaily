const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Surveys = mongoose.model('surveys');
const checkCredits = require('./../middlewares/checkCredits');
const Mailer = require('./../services/Mailer');
const surveyTemplate = require('./../services/emailTemplate/surveyTemplate');

// get all surveys
router.get('/all', (req, res) => {
});

// webhook for new survey
router.post('/webhooks', (req, res) => {

});

// thanks feedback- /api/surveys/thanks
router.get('/thanks', (req, res) => {
    res.send({status: "success", data: "Thanks for Feedback!"});
})

// create new survey- /api/surveys/new
router.post('/new', checkCredits, async (req, res) => {
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