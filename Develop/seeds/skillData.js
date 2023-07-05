const { Skills } = require("../models");

const data = [
  {
    title: "ABC Adventure: Discover the Magic of Letters",
    subtitle: "Explore the Alphabet in an Exciting Learning Journey!",
    description: "Welcome to ABC Adventure, a captivating course that will take you on a magical journey through the world of letters! Join our friendly characters as they guide you through interactive games, delightful stories, and engaging activities that will help you learn the ABCs. From meeting adorable animals to uncovering hidden letter treasures, each step of this adventure will deepen your understanding of the alphabet. Get ready to sing, play, and explore as you unlock the secrets of reading and writing. Enroll now and embark on a joyful ABC learning experience!",
    image_url: "/images/abc.png",
    price: "89.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Easy",
    background_color: '#87c0fc',
  },
  {
    title: "Math Magic: Fun with Addition",
    subtitle: "Become an Addition Wizard and Master Math Magic",
    description: "Calling all young adventurers! Join our team of Math Marvels on an exciting Addition Expedition! Step into a world where numbers come alive and learn the secrets of addition through captivating activities. Dive into thrilling challenges, solve puzzles, and conquer interactive games that will sharpen your addition skills. From counting colorful treasures to solving tricky math riddles, this course will ignite your passion for numbers. Gain confidence as you unlock new levels and earn rewards along the way. Are you ready to become an Addition Expert? Enroll today and unleash your mathematical superpowers!",
    image_url: "/images/addition.png",
    price: "79.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Easy",
    background_color: '#fff8ad',
  },
  {
    title: "Subtraction Safari: Explore the World of Taking Away!",
    subtitle: "Embark on an Exciting Math Expedition!",
    description: "Welcome to Subtraction Safari, where math becomes an exhilarating adventure! Join our fearless explorers as they venture into the realm of subtraction. Through thrilling games, engaging puzzles, and interactive activities, you'll develop a strong foundation in taking away numbers. Dive into captivating challenges like counting backward, solving subtraction riddles, and discovering the hidden treasures of subtraction. Gain confidence in subtraction concepts such as regrouping and borrowing while having a blast. Get ready to become a Subtraction Master and unlock the power of numbers! Enroll in Subtraction Safari today and let the expedition begin!",
    image_url: "/images/subtraction.png",
    price: "79.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Easy",
    background_color: '#ffa768',
  },
  {
    title: "Wonder Explorers: Unveiling the Secrets of the World!",
    subtitle: "Embark on an Exciting Journey of Discovery!",
    description: "Calling all young adventurers! Join the Wonder Explorers and set out on an extraordinary journey to uncover the secrets of the world around us. From the mysteries of space to the wonders of nature, each lesson will immerse you in a different topic. Dive deep into the ocean, unravel ancient civilizations, explore the vastness of the universe, and encounter fascinating creatures. Through interactive games, captivating stories, and hands-on experiments, you'll develop a deep understanding of diverse subjects and cultivate a lifelong love for learning. Expand your horizons and become a true Wonder Explorer. Enroll now and let the adventure begin!",
    image_url: "/images/4.png",
    price: "99.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Intermediate",
    background_color: '#46ff96',
  },
  {
    title: "Science Explorers: Unleash the Power of Curiosity",
    subtitle: "Embark on a Thrilling Journey through the World of Science!",
    description: "Attention young scientists! Join the Science Explorers and embark on an exhilarating journey through the wonders of science. From uncovering the secrets of the human body to exploring the mysteries of the natural world, this course will ignite your curiosity and deepen your understanding of scientific concepts. Conduct hands-on experiments, unravel scientific mysteries, and engage in interactive activities that will spark your love for discovery. Whether it's delving into the realms of chemistry, biology, or physics, you'll develop critical thinking skills and a passion for scientific exploration. Enroll now and let the adventure of scientific discovery begin!",
    image_url: "/images/abc.png",
    price: "99.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Advanced",
    background_color: '#5b69ff',
  },
  {
    title: "Creative Writing Wizards: Unleash Your Imagination!",
    subtitle: "Embark on a Magical Journey into the World of Creative Writing!",
    description: "Calling all aspiring writers! Join the Creative Writing Wizards and embark on a magical journey into the realm of storytelling and imagination. Explore the art of crafting captivating characters, creating vivid settings, and weaving spellbinding plots. Through engaging writing prompts, interactive exercises, and constructive feedback, you'll unleash your creativity and develop your unique writing voice. Dive into different genres, from fantasy to mystery, and learn essential writing techniques that will bring your stories to life. Whether you dream of becoming a novelist or simply want to express yourself through writing, this course will empower you to become a true Creative Writing Wizard!",
    image_url: "/images/abc.png",
    price: "99.99",
    start_date: "2023-06-15",
    end_date: "2023-06-30",
    difficulty_rating: "Advanced",
    background_color: '#fc5bff',
  }

];

const seedSkills = () => Skills.bulkCreate(data);

module.exports = seedSkills;
