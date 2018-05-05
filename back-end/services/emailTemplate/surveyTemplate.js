const keys = require('./../../config/key')
module.exports = (survey, creator) => {
    return `
<!doctype html>
<html>
<head>
<title></title>
<style type="text/css">
/* CLIENT-SPECIFIC STYLES */
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { -ms-interpolation-mode: bicubic; }

/* RESET STYLES */
img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
table { border-collapse: collapse !important; }
body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

/* iOS BLUE LINKS */
a[x-apple-data-detectors] {
   color: inherit !important;
   text-decoration: none !important;
   font-size: inherit !important;
   font-family: inherit !important;
   font-weight: inherit !important;
   line-height: inherit !important;
}

/* MOBILE STYLES */
@media screen and (max-width: 600px) {
 .img-max {
   width: 100% !important;
   max-width: 100% !important;
   height: auto !important;
 }

 .max-width {
   max-width: 100% !important;
 }

 .mobile-wrapper {
   width: 85% !important;
   max-width: 85% !important;
 }

 .mobile-padding {
   padding-left: 5% !important;
   padding-right: 5% !important;
 }
}

/* ANDROID CENTER FIX */
div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>
</head>
<body style="margin: 0 !important; padding: 0; !important background-color: #f6f6f6;" bgcolor="#f6f6f6">

<table border="0" cellpadding="0" cellspacing="0" width="100%">
   <tr>
       <td align="center" valign="top" width="100%" bgcolor="#3b4a69" style="background: #3b4a69; background-size: cover; background-attachment: fixed; padding: 50px 15px 0 15px;" class="mobile-padding">
           <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
               <tr>
                   <td align="center" valign="top" style="padding: 0 0 50px 0;">
                   </td>
               </tr>
               <tr>
                   <td align="left" valign="top" style="padding: 50px; font-family: Open Sans, Helvetica, Arial, sans-serif; border-radius: 3px; box-shadow: 0 0 5px rgba(0,0,0,.5);" bgcolor="#f6f6f6">
                       <p style="color: #999999; font-size: 30px; line-height: 26px; margin: 0; text-align: center">${survey.title}</p>
                       <p style="color: #999999; font-size: 19px; line-height: 26px; margin: 0;">
                       <br><br>
                        Hello, 
                           <br>
                           ${survey.description}<br><br><br>
                           </p>
                           <a href=${keys.feedbackDomain} style="font-size: 15px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 26px; background-color: #75b6c9; padding: 13px; border: 1px solid #75b6c9;">👍</a>
                           <a href=${keys.feedbackDomain} style="font-size: 15px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 26px; background-color: #75b6c9; padding: 13px; border: 1px solid #75b6c9;">👎</a>
                           <a href=${keys.feedbackDomain} style="font-size: 15px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 26px; background-color: #75b6c9; padding: 13px; border: 1px solid #75b6c9;">🤔</a>
<p style="color: #999999; font-size: 19px; line-height: 26px; margin: 0;">
<br><br>
                           Cheers,<br>
                           ${creator}
                       </p>
                   </td>
               </tr>
               <tr>
                   <td align="center" valign="top" style="padding: 25px 0; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff;">
                       <p style="font-size: 14px; line-height: 20px;">
                         Created By:<br>
                         Devashish Patel

                         <br><br>

                         <a href="https://emaily-deva.herokuapp.com" style="color: #ffffff;" target="_blank">View Online</a>
                       </p>
                   </td>
               </tr>
           </table>
       </td>
   </tr>
</table>
</body>
</html>
`;
};