const router = require('express').Router();
const { Skill_User, Users, Skills } = require('../../models');
const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true, // Set it to true if using a secure connection (SSL/TLS)
    auth: {
      user: 'rsstydf@gmail.com',
      pass: 3213213,
    },
});



router.post('/enrolments', async (req, res) =>{
    try {
        console.log('hello');
        const newEnrolment = await Skill_User.create({
          user_id: req.session.user.id,
          skill_id: req.body.skill_id,
        });
        // const userData = await Users.findByPk(req.session.user.id);
        // const userName = userData.userName;
        // const userEmail = userData.email;

        // const skillData = await Skills.findByPk(req.body.skill_id);
        // const skillTitle = skillData.title;
        // const skillDescription = skillData.description;
        // const skillStartDate = skillData.start_date;
        // const skillEndDate = skillData.end_date;
        // console.log(newEnrolment, userData, userName, userEmail, skillData, skillTitle, skillDescription, skillStartDate, skillEndDate);
        // const mailOptions = {
        //     from: 'rsstydf@gmail.com',
        //     to: userEmail,
        //     subject: `You Have Enroled ${skillTitle} Skill`,
        //     text: `Hi ${userName}, below is your enroled skill details: ${skillTitle} ${skillDescription}, the start date is ${skillStartDate} and end date is ${skillEndDate}.`,
        //     html: '<h1>Welcome</h1>',
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //       console.log('Error:', error);
        //     } else {
        //       console.log('Email sent:', info.response);
        //     }
        // });
          
          

        res.status(200).json(newEnrolment);
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
  })

module.exports = router;
