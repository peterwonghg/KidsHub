const { Skill_User } = require('../../models');

const router = require('express').Router();



router.post('/', async (req, res) =>{
    try {
        const newEnrolment = await Skill_User.create({
          user_id: req.session.user.id,
          skill_id: req.body.skill_id
        });
        res.status(200).json(newEnrolment);
      } catch (err) {
        res.status(400).json(err);
      }
  })

module.exports = router;
