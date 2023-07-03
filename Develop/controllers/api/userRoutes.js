const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await Users.create({...req.body});

    req.session.save(() => {
      req.session.user = userData;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
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
    if(userData.id===1){
      req.session.save(() => {     
        
        req.session.isAdmin = true;
        req.session.user= userData;
        req.session.logged_in = true;
        
        res.json({ user: userData, isAdmin:req.session.isAdmin, message: 'You are logged in as Admin!' });
      })
    }else{
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
    res.status(404).end();
  }
});

module.exports = router;