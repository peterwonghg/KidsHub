const router = require('express').Router();
const { Skill_User, Users, Skills } = require('../../models');
const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Set it to true if using a secure connection (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }, 
});



router.post('/enrolments', async (req, res) =>{
    try {
        console.log('hello');
        const newEnrolment = await Skill_User.create({
          user_id: req.session.user.id,
          skill_id: req.body.skill_id,
        });
        const userData = await Users.findByPk(req.session.user.id);
        const user = userData.get({ plain: true });
        const userName = user.name;
        const userEmail = user.email;

        const skillData = await Skills.findByPk(req.body.skill_id);
        const skill = skillData.get({ plain: true });
        const skillTitle = skill.title;
        const skillDescription = skill.description;
        const skillStartDate = skill.start_date;
        const skillEndDate = skill.end_date;
        console.log(user, skill);
        // console.log(newEnrolment, userData, userName, userEmail, skillData, skillTitle, skillDescription, skillStartDate, skillEndDate);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: `You Have Enroled ${skillTitle} Skill`,
            text: 'hello',
            html: `<h1>Welcome</h1> <p> Hi ${userName}, below is your enroled skill details: ${skillTitle} ${skillDescription}, the start date is ${skillStartDate} and end date is ${skillEndDate}.</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error:', error);
            } else {
              console.log('Email sent:', info.response);
            }
        });
          
          

        res.status(200).json(newEnrolment);
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
  })

module.exports = router;
