const router = require('express').Router();
const { Skill_User, Users, Skills } = require('../../models');
const nodemailer = require('nodemailer');
require('dotenv').config();
const dayjs = require('dayjs');

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
        const skillSubtitle = skill.subtitle;
        const skillStartDate = dayjs(skill.start_date).format('DD/MM/YYYY');
        const skillEndDate = dayjs(skill.end_date).format('DD/MM/YYYY');
        const skillPrice = skill.price;
        const skillPlace = skill.place;
        const skillContact = skill.contact;
        console.log(user, skill);
        // console.log(newEnrollment, userData, userName, userEmail, skillData, skillTitle, skillDescription, skillStartDate, skillEndDate);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: `You Have Enroled ${skillTitle} Skill`,
            text: 'hello',
            html: `<h1>Welcome</h1> 
            <p> Hi <strong>${userName}</strong>,<p><br> 
            <p>Congratulations, you are now enrolled to the following skill:<strong> ${skillTitle}</strong></p><br>
            <p><strong>${skillTitle}</strong> will take you to <strong>${skillSubtitle}</strong><p><br>
            <p>The start date is on <strong>${skillStartDate}</strong><p><br>
            <p>and the end date is on <strong>${skillEndDate}</strong>.</p><br><br>
            <p>The fee is <strong>$${skillPrice}</strong>, you may pay when you're here.</p><br><br>
            <p>Contact: <strong>${skillContact}</strong></p><br><br>
            <p>Place: <strong>${skillPlace}</strong></p><br><br>
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
        const skill_userData = await Skill_User.findOne({
            where: {
                user_id: user_id,
                skill_id: skill_id,
            },
        });

        const skill = skillData.get({ plain: true });

        res.status(200).json(skill)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/enrollments/:skill_id', async (req, res) => {
    try {
        console.log(req.params.skill_id, req.session.user.id);
        const skill_userData = await Skill_User.findOne({
            where: {
                skill_id: req.params.skill_id,
                user_id: req.session.user.id,
            },
        });

        if (skill_userData) {
            const deleteData = await Skill_User.destroy({
                where: {
                    id: skill_userData.id,
                },
            });
            res.status(200).json(deleteData);
        } else {

            res.status(404).json({ message: 'No enrollment found with this id!' });
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
