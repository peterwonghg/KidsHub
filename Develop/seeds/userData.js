const { Users } = require("../models");

const users = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Terry",
    email: "terry@gmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Valiantsina",
    email: "valiantsina@gmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Ellinor",
    email: "ellinor@gmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Rosa",
    email: "rosa@gmail.com",
    password: "password12345",
    registration_date: "11.06.2023"
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345",
    registration_date: "11.06.2023"
  }
];

const seedUsers = () => Users.bulkCreate(users);

module.exports = seedUsers;