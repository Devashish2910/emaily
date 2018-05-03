const express = require('express');
const router = express.Router();
const keys = require('./../config/key');
const stripe = require('stripe')(keys.stripeClientSecret);


// Payment for credits '/api/credits/payment'
router.post('/payment', async (req, res) => {

    const charge = await stripe.charges.create({
       amount: 500,
       currency: "usd",
        source: req.body.id,
       description: "$5 for 5"
    });

    req.user.credits += 5;
    const updatedUser = await req.user.save();

    if (updatedUser) {
        res.status(200).send(req.user)
    } else {
        res.status(500).send({status: "error", error: updatedUser})
    }

});

module.exports = router;