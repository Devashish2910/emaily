## Emaily

I wanted to build something that covered a lot of what I know into one app.  Emaily has a lot of front-end and back-end features.  Emaily is a product I made that at it's heart is for a start up owner or project manager.  Let's say you are someone that has created and deployed an application or service.  Now maybe your users are making use of your application but you've noticed that recently your users have suddenly stopped using your service or have cut down considerably.

So what would be the logical first step:  You asking your users why they quit.

- Live Project Url: https://emaily-deva.herokuapp.com

Emaily collects feedback from your users by asking questions through a survey.  Questions like why they are using it, why they stopped using it, and what they would do to make it better.  What if you could send out that survey via email to 20/50/1000 customers and get that valuable feedback?  You could then make your app/service better with the feedback you obtained.

  ### Details About Project:

  I will build this using the MERN stack but also adding some nice features I have done in the past.

  In addition to Mongo/Express/React/Node I'm be using...
  - PassportJs for OAuth2.0 based authentication
  - Stripe for Payment Processing
  - SendGrid for Email Processing
  - GoogleOAuth
  - Redux
  - Heroku Deployment

  The working app allows users to when they visit our app to
  - Sign up via Google OAuth
  - Pay for email credits via Stripe ( not using recurring subscription service.  User will buy some # of credits to send out some # of emails)
  - User then creates a new "campaign"
  - User enters list of emails to send survey to
  - We send email to list of recipients
  - Recipients click on link in email to provide feedback
  - We tabulated feedback
  - User can see report of all survey responses


> - Feel free to use this project and upgrade it.(Make it more AWESOME!)
> - Don't forget to give some credits to me! 😜
> - Suggestions and Questions are always welcomed, please e-mail me at devashish2910@gmail.com or create an issue