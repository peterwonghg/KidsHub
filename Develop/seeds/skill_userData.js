const { Skill_User } = require("../models");

const data = [
  {
    user_id: 1,
    skill_id: 1,
  },
  {
    user_id: 2,
    skill_id: 3,
  },
  {
    user_id: 3,
    skill_id: 2,

  },
  {
    user_id: 4,
    skill_id: 2,
  },
  {
    user_id: 5,
    skill_id: 4,
  },
  {
    user_id: 6,
    skill_id: 4,
  },
  {
    user_id: 7,
    skill_id: 1,
  }
];

const seedSkill_Users = () => Skill_User.bulkCreate(data);

module.exports = seedSkill_Users;
