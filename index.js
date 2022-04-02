"use strict";

// Mailer API DOC: https://nodemailer.com/about/
// Ethereal Email API: https://ethereal.email/

const fs = require("fs");
const nodemailer = require("nodemailer");

// Use de emailBody.index html content to write mail body
const htmlBody = fs.readFileSync('./emailBody.html')

// Main function
async function main() {

  // Create a transporter principal infos to send mail
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Service mail
    auth: {
      user: 'user@email.com', // User password
      pass: 'password', // User password
    },
  });

  // Set a info of mail
  let info = {
    from: 'Test Mail <testmail@gmail.com>', // E-mail of sender.
    to: "reciever@gmail.com", // E-mail of user will receive.
    subject: "Hello ✔", // Subject from to body.
    text: "Hello world?", // Text Body.
    html: htmlBody, // HTML Body.
  };

  // Function to sendMail 
  transporter.sendMail(info, (error) => {
    if (error) {
        // Log if have error in send process
        console.log('Error occurred');
        return process.exit(1); // Exited te function
    }
  
    console.log('Message sent successfully!'); 
    
    transporter.close();  // Close te function by a method
  });
  
}

main().catch(console.error);
