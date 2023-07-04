const router = require('express').Router();
const { Skills, Users } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const skillData = await Skills.findByPk(req.params.id, {
      include: [
        {
          model: Users,
        },
      ],
    });

    const skill = skillData.get({ plain: true });

    res.status(200).json({skill, user_id: req.session.user.id})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('hohoho')
    const newSkill = await Skills.create({
      ...req.body,
    });

    res.status(200).json(newSkill);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.put('/:skill_id', async (req, res) => {
  try {
    const updatedSkill = await Skills.update({
      ...req.body,
    },
    {
      where: {
        id: req.params.skill_id,
      },
    });

    res.status(200).json(updatedSkill);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:skill_id', async (req, res) => {
  try {
    const skillData = await Skills.destroy({
      where: {
        id: req.params.skill_id,
      },
    });

    if (!skillData) {
      res.status(404).json({ message: 'No skill found with this id!' });
      return;
    }

    res.status(200).json(skillData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
