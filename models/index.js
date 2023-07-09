const Users = require('./Users');
const Skills = require('./Skills');


const Skill_User = require('./Skill_User');

Users.hasMany(Skill_User, {
  foreignKey: 'user_id',
});

Skill_User.belongsTo(Users, {
  foreignKey: 'user_id'
});

Users.belongsToMany(Skills, {
  through:{
    model:Skill_User, as: 'skills',
    unique: false,
  }
});

Skills.belongsToMany(Users, {
  through:{
    model:Skill_User, as: 'users',
    foreignKey: 'skill_id'

  }
})
module.exports = { Users, Skills, Skill_User };