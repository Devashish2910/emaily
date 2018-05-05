// Production Environment Keys
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    fbClientID: process.env.FB_CLIENT_ID,
    fbClientSecret: process.env.FB_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripeClientID: process.env.STRIPE_CLIENT_ID,
    stripeClientSecret: process.env.STRIPE_CLIENT_SECRET,
    sendgridID: process.env.SENDGRID_ID,
    feedbackDomain: process.env.FEEDBACK_DOMAIN
};