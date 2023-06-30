const { Skills } = require("../models");

const data = [
  {
    title: "Alphabet",
    description: "Learn the Alphabet",
    image_url: "https://www.shutterstock.com/video/clip-1104898829-glowing-neon-line-abc-blocks-icon-isolated",
    difficulty_rating: "Moderate"
  },
  {
    title: "Addition",
    description: "Learn Addition",
    image_url: "https://www.shutterstock.com/video/clip-1105198901-animation-hospital-medical-icon-isolateddiagnostics-symbol-medicine",
    difficulty_rating: "Basic"
  },
  {
    title: "Subtraction",
    description: "Learn Subtraction",
    image_url: "https://www.shutterstock.com/video/clip-1100302483-minus-sign-animation-on-transparent-background-math",
    difficulty_rating: "Basic"
  },
  {
    title: "Skill 4",
    description: "Learn Skill 4",
    image_url: "https://www.shutterstock.com/video/clip-1104555211-animation-changing-numbers-multiple-symbols-caucasian-girl",
    difficulty_rating: "Advanced"
  }
];

const seedSkills = () => Skills.bulkCreate(data);

module.exports = seedSkills;
