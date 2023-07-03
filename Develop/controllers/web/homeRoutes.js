const router = require('express').Router();
const authenticate = require('../../middleware/authenticate');
const { Skills, Users, Skill_User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const skillData = await Skills.findAll();

    const skills = skillData.map((skill) => skill.get({ plain: true }));


    console.log(req.session)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      skills, 
      logged_in: req.session.logged_in,
      user: req.session.user, 
      isAdmin: req.session.isAdmin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/skills/create',authenticate, (req, res)=>{
  try {
    
  res.render('create',
  {logged_in: req.session.logged_in,
  user: req.session.user});
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
};
})

router.get('/skills/update',authenticate, (req, res)=>{
  res.render('update',
  {logged_in: req.session.logged_in,
  user: req.session.user});
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
    console.log(skill);

    res.render('skillpage', {
      ...skill,
      logged_in: req.session.logged_in,
      user: req.session.user, 
      isAdmin:req.session.isAdmin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', authenticate, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user.id, {
      include: [{ model: Skills}],
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
      user: req.session.user, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
