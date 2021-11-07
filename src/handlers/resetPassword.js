import Mailgun from 'mailgun-js';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
// Email Template
function emailTemplate(name, password){
  const htmlMsg =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'+
  '<html xmlns="http://www.w3.org/1999/xhtml">'+
    '<body>'+
       '<p>Hey '+ name + ',</p>'+
       '<p>You requested to reset the password</p>'+
       '<p>Your new password is:</p>' +
       '<h4>' + password +'</h4>'+
       '<br/>'+
      '<p>All the best,</p>'+
      '<br />' +
      '<strong>GreenBaby Team</strong>'+
    '</body>'+
  '</html>';
  return htmlMsg;
}

// Generate random password
function generateNewPassword(){
  let newPassword = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i=0; i < 10; i++){
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return newPassword;
}

export const sendNewPassword = function(req, res){
  const email = req.body.yourEmail;

  let newPassword = generateNewPassword();

  bcryptjs.genSalt(10, function(err, salt) {
    bcryptjs.hash(newPassword, salt, function(err, hashedPassword) {

      const query  = {email: email};
      const update = {$set: {password: hashedPassword}};

      User.findOneAndUpdate(query, update, function(err, user){
        if(user && email === user.email) {

          let mailgun = new Mailgun({
            apiKey: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
          });

          let data = {
            from: 'GreenBaby Admin <postmaster@'+process.env.MAILGUN_DOMAIN+'>',
            to: user.email,
            subject: '[GreenBaby Admin] - Password Reset',
            html: emailTemplate(user.name, newPassword)
          };

          mailgun.messages().send(data, function (error, body) {
            if(error){
              req.flash('danger', 'Something went wrong...try again');
              return res.redirect('/forgot-password');
            } else {
              req.flash('success', 'Successfully sent to your email');
              return res.redirect('/login');
            }
          });

        } else {
          req.flash('danger', 'No user found with this email');
          return res.redirect('/forgot-password');
        }
      });
    });
  });

};
