module.exports=function authenticate(req, res, next){

  if(!req.session.logged_in){
    return res.redirect('/login');
  }
  next();

}