const Users = require('./Users');
const Skills = require('./Skills');
const Skill_User = require('./skill_user');

Users.belongsToMany(Skills, {
  through:{
    model:Skill_User, as: 'skills',
    unique: false,
  }
});

Skills.belongsToMany(Users, {
  through:{
    model:Skill_User, as: 'users',
    unique: false,
  }
})
module.exports = { Users, Skills, Skill_User };
