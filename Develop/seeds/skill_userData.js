const dayjs = require("dayjs");
const { Skill_User } = require("../models");

const data = [
  {
    user_id: 2,
    skill_id: 1,
    enrolment_date: dayjs(),
  },
  {
    user_id: 2,
    skill_id: 3,
    enrolment_date: dayjs(),
  },
  {
    user_id: 3,
    skill_id: 2,
    enrolment_date: dayjs(),
  },
  {
    user_id: 3,
    skill_id: 4,
    enrolment_date: dayjs(),
  },
  {
    user_id: 4,
    skill_id: 2,
    enrolment_date: dayjs(),
  },
  {
    user_id: 4,
    skill_id: 5,
    enrolment_date: dayjs(),
  },
  {
    user_id: 5,
    skill_id: 4,
    enrolment_date: dayjs(),
  },
  {
    user_id: 5,
    skill_id: 6,
    enrolment_date: dayjs(),
  },
  {
    user_id: 6,
    skill_id: 4,
    enrolment_date: dayjs(),
  },
  {
    user_id: 6,
    skill_id: 6,
    enrolment_date: dayjs(),
  },
  {
    user_id: 7,
    skill_id: 1,
    enrolment_date: dayjs(),
  },
  {
    user_id: 7,
    skill_id: 2,
    enrolment_date: dayjs(),
  },
  {
    user_id: 8,
    skill_id: 3,
    enrolment_date: dayjs(),
  },
  {
    user_id: 8,
    skill_id: 5,
    enrolment_date: dayjs(),
  },
  {
    user_id: 9,
    skill_id: 1,
    enrolment_date: dayjs(),
  },
  {
    user_id: 9,
    skill_id: 6,
    enrolment_date: dayjs(),
  },
  {
    user_id: 10,
    skill_id: 3,
    enrolment_date: dayjs(),
  },
  {
    user_id: 10,
    skill_id: 4,
    enrolment_date: dayjs(),
  },
  {
    user_id: 2,
    skill_id: 5,
    enrolment_date: dayjs(),
  },
  {
    user_id: 3,
    skill_id: 6,
    enrolment_date: dayjs(),
  },
  {
    user_id: 4,
    skill_id: 1,
    enrolment_date: dayjs(),
  },
  {
    user_id: 5,
    skill_id: 2,
    enrolment_date: dayjs(),
  },
  {
    user_id: 6,
    skill_id: 3,
    enrolment_date: dayjs(),
  },
  {
    user_id: 7,
    skill_id: 5,
    enrolment_date: dayjs(),
  },
  {
    user_id: 8,
    skill_id: 6,
    enrolment_date: dayjs(),
  },
  {
    user_id: 9,
    skill_id: 7,
    enrolment_date: dayjs(),
  },
  {
    user_id: 10,
    skill_id: 8,
    enrolment_date: dayjs(),
  },
  {
    user_id: 10,
    skill_id: 9,
    enrolment_date: dayjs(),
  },
  {
    user_id: 2,
    skill_id: 10,
    enrolment_date: dayjs(),
  },
  {
    user_id: 3,
    skill_id: 10,
    enrolment_date: dayjs(),
  },
  {
    user_id: 4,
    skill_id: 10,
    enrolment_date: dayjs(),
  },
  {
    user_id: 5,
    skill_id: 10,
    enrolment_date: dayjs(),
  },
  {
    user_id: 6,
    skill_id: 11,
    enrolment_date: dayjs(),
  },
  {
    user_id: 6,
    skill_id: 12,
    enrolment_date: dayjs(),
  },
  {
    user_id: 7,
    skill_id: 13,
    enrolment_date: dayjs(),
  },
  {
    user_id: 8,
    skill_id: 13,
    enrolment_date: dayjs(),
  },
  {
    user_id: 9,
    skill_id: 12,
    enrolment_date: dayjs(),
  },
];

const seedSkill_Users = () => Skill_User.bulkCreate(data);

module.exports = seedSkill_Users;
