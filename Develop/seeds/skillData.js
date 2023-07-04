const { Skills } = require("../models");

const data = [
  {
    title: "Alphabet",
    description: "Learn the Alphabet",
    image_url: "/images/abc.png",
    price: "89.99",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Moderate",
    background_color: '#FF0000',
  },
  {
    title: "Addition",
    description: "Learn Addition",
    image_url: "/images/addition.png",
    price: "79.99",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Basic",
    background_color: '#Fh8600',
  },
  {
    title: "Subtraction",
    description: "Learn Subtraction",
    image_url: "/images/subtraction.png",
    price: "79.99",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Basic",
    background_color: '#Fa1650',
  },
  {
    title: "Skill 4",
    description: "Learn Skill 4",
    image_url: "/images/4.png",
    price: "99.99",
    start_date: "2023-06-15 09:00:00",
    end_date: "2023-06-30 17:00:00",
    difficulty_rating: "Advanced",
    background_color: '#bF1025',
  }
];

const seedSkills = () => Skills.bulkCreate(data);

module.exports = seedSkills;
