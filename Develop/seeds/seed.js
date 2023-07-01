const seedUsers = require('../seeds/userData');
const seedSkills = require('../seeds/skillData');
const seedSkill_Users = require('../seeds/skill_userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedSkills();
  console.log('\n----- Skills SEEDED -----\n');

  await seedSkill_Users();
  console.log('\n----- Skill_User SEEDED -----\n');



  process.exit(0);
};

seedAll();

