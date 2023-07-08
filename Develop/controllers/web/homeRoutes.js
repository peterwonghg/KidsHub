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

router.get('/search/', async (req, res) => {
  try {
    const query = req.query.q;
    const skillData = await Skills.findAll();
    const skills = skillData.map((skill) => skill.get({ plain: true }));
    const filteredSkills = skills.filter((skill) => {
      return (
        skill.title.toLowerCase().includes(query) ||
        skill.subtitle.toLowerCase().includes(query) ||
        skill.place.toLowerCase().includes(query)
      );
    });
      res.render('homepage', {
        filteredSkills,
        logged_in: req.session.logged_in,
        user: req.session.user,
        isAdmin: req.session.isAdmin,
      });
    
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/skills/create', authenticate, (req, res) => {
  try {

    res.render('create',
      {
        logged_in: req.session.logged_in,
        user: req.session.user,
        isAdmin: req.session.isAdmin,

      });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  };
})

router.get('/skills/update', authenticate, (req, res) => {
  res.render('update',
    {
      logged_in: req.session.logged_in,
      user: req.session.user,
      isAdmin: req.session.isAdmin,
    });
});

router.get('/users/:id', async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Skills,
        },
      ],
    });

    const user = userData.get({ plain: true });
    // console.log(user);

    res.render('userpage', {
      ...user,
      logged_in: req.session.logged_in,
      user: req.session.user,
      isAdmin: req.session.isAdmin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/skills/:id', async (req, res) => {
  try {
    const skillData = await Skills.findByPk(req.params.id, {
      include: [
        {
          model: Users,
        },
      ],
    });

    const skill = skillData.get({ plain: true });
    console.log(skill);
    const allUsers_id = skill.users.map(user => user.id);
    const user_id = req.session.user ? req.session.user.id : null;
    if (allUsers_id.includes(user_id)) {
      req.session.save(() => {
        req.session.isEnrolled = true;
        res.render(
          'skillpage', {
          ...skill,
          logged_in: req.session.logged_in,
          user: req.session.user,
          isAdmin: req.session.isAdmin,
          isEnrolled: req.session.isEnrolled,
        })
      })
    } else {
      res.render('skillpage', {
        ...skill,
        logged_in: req.session.logged_in,
        user: req.session.user,
        isAdmin: req.session.isAdmin,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', authenticate, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user.id, {
      include: [{ model: Skills }],
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