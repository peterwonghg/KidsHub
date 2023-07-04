const dayjs = require("dayjs");
const { Users } = require("../models");

const users = [
  {
    name: "Admin",
    email: "admin@hotmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Terry",
    email: "terry@gmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Valiantsina",
    email: "valiantsina@gmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Ellinor",
    email: "ellinor@gmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Rosa",
    email: "rosa@gmail.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345",
    registration_date: dayjs().format('DD/MM/YYYY'),
  }
];

const seedUsers = () => Users.bulkCreate(users);

module.exports = seedUsers;