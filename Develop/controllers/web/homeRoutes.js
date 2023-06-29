const router = require('express').Router();
const authenticate = require('../../middleware/authenticate');
const { Skills, Users, Skill_User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const skillData = await Skills.findAll();

    const skills = skillData.map((skill) => skill.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      ...skills, 
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/skills/:id', async (req, res) => {
  try {
    const skillData = await Skills.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['name'],
        },
      ],
    });

    const skill = skillData.get({ plain: true });

    res.render('skill', {
      ...skill,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', authenticate, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      include: [{ model: Skills, through: Skill_User, as: 'skills' }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/update', (req, res)=>{
  res.render('update',
  {logged_in: req.session.logged_in,
  user_id: req.session.user_id});
});

router.get('/create', (req, res)=>{
  res.render('create',
  {logged_in: req.session.logged_in,
  user_id: req.session.user_id});
});

router.get('/')

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
