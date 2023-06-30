const { Skill_User } = require("../models");

const data = [
  {
    user_id: 1,
    skill_id: 1,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 2,
    skill_id: 3,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 3,
    skill_id: 2,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 4,
    skill_id: 2,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 5,
    skill_id: 4,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 6,
    skill_id: 4,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  },
  {
    user_id: 7,
    skill_id: 1,
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00"
  }
];

const seedSkill_Users = () => Skill_User.bulkCreate(data);

module.exports = seedSkill_Users;
