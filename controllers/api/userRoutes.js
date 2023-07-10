const router = require('express').Router();
const { Users, Skills } = require('../../models');
const transporter= require('../../config/mailerConnection');
require('dotenv').config();


router.post('/', async (req, res) => {
  try {
    const userData = await Users.create({ ...req.body });

    req.session.save(() => {
      req.session.user = userData;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/highfive', async (req, res) => {
  try {
    const userData = await Users.findByPk(req.body.user_id);
    const userName = userData.name;
    const userEmail = userData.email;
    const senderData = await Users.findByPk(req.session.user.id);
    const senderName = senderData.name;
    const skillData = await Skills.findByPk(req.body.skill_id);
    const skillName = skillData.title;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: `${senderName} Has Sent You a High Five!`,
      text: 'hello',
      html: `
      <p> Hi <strong>${userName}</strong>,<p><br> 
      <p>your classmate <strong>${senderName}</strong> from <strong>${skillName}</strong> has just sent you a high five!!</p><br>
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
    res.status(200).json(userData);
   
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // console.log(userData, 'heyy', userData.id);
    if (userData.id === 1) {
      req.session.save(() => {

        req.session.isAdmin = true;
        req.session.user = userData;
        req.session.logged_in = true;

        res.json({ user: userData, isAdmin: req.session.isAdmin, message: 'You are logged in as Admin!' });
      })
    } else {
      req.session.save(() => {

        req.session.user = userData;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
      });
    }


  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json(404);
  }
});

module.exports = router;