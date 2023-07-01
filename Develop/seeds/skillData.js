const { Skills } = require("../models");

const data = [
  {
    title: "Alphabet",
    description: "Learn the Alphabet",
    image_url: "/image/haha.jpg",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Moderate"
  },
  {
    title: "Addition",
    description: "Learn Addition",
    image_url: "https://www.shutterstock.com/video/clip-1105198901-animation-hospital-medical-icon-isolateddiagnostics-symbol-medicine",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Basic"
  },
  {
    title: "Subtraction",
    description: "Learn Subtraction",
    image_url: "https://www.shutterstock.com/video/clip-1100302483-minus-sign-animation-on-transparent-background-math",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Basic"
  },
  {
    title: "Skill 4",
    description: "Learn Skill 4",
    image_url: "https://www.shutterstock.com/video/clip-1104555211-animation-changing-numbers-multiple-symbols-caucasian-girl",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Advanced"
  }
];

const seedSkills = () => Skills.bulkCreate(data);

module.exports = seedSkills;
