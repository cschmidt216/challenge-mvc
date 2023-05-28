const { Users } = require('../models');

const usersData = [
  {
    username: "milesw",
    twitter: "milesw",
    github: "milesw",
    email: "milesw@gmail.com",
    password: "password1"
  },
  {
    username: "brianb",
    twitter: "brianb",
    github: "brianb",
    email: "brianb@gmail.com",
    password: "password2"
  },
  {
    username: "haydenp",
    twitter: "haydenp",
    github: "haydenp",
    email: "haydenp@gmail.com",
    password: "password3"
  },
  {
    username: "nolany",
    twitter: "nolany",
    github: "nolany",
    email: "nolany@gmail.com",
    password: "password4"
  },
  {
    username: "connorc",
    twitter: "connorc",
    github: "connorc",
    email: "connorc@gmail.com",
    password: "password5"
  },
  {
    username: "mikem",
    twitter: "mikem",
    github: "mikem",
    email: "mikem@gmail.com",
    password: "password6"
  }
];

const seedUsers = async () => {
  try {
    await Users.bulkCreate(usersData);
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

module.exports = seedUsers;