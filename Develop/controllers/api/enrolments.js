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



router.post('/enrollments', async (req, res) => {
    try {
        console.log('hello');
        const newEnrollment = await Skill_User.create({
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
        // console.log(newEnrollment, userData, userName, userEmail, skillData, skillTitle, skillDescription, skillStartDate, skillEndDate);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: `You Have Enroled ${skillTitle} Skill`,
            text: 'hello',
            html: `<h1>Welcome</h1> 
            <p> Hi ${userName},<p><br> 
            <p>Congratulations, you are now enrolled to the following skill: ${skillTitle}<p><br>
            <p>${skillTitle} will take you on a journey to ${skillDescription}<p><br>
            <p>The start date is on ${skillStartDate}<p><br>
            <p>and the end date is on ${skillEndDate}.</p><br><br>
            <p>Your friends at,<p><br><br>
            <p>KidsHub Team<p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json(newEnrollment);

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/enrollments', async (req, res) => {
    try {
      const skillData = await Skills.findByPk(req.params.id,);
  
      const skill = skillData.get({ plain: true });
  
      res.status(200).json(skill)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
