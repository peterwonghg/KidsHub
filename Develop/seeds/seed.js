const sequelize = require('../config/connection');
const { User, Skill } = require('../models');

const userData = require('./userData.json');
const skillData = require('./skillData.json');
const skill_userData = require('./skill_userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const skill of skillData) {
    await Skill.create({
      ...skill,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const skill_user of skill_userData) {
    await Skill_user.create({
      ...skill_user,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();