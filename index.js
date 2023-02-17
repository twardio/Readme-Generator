const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'comms',
    },
  ])

  .then((answers) => {
    const data = `Name: ${answers.name}\nLanguages: ${answers.languages}\nPreferred method of communication: ${answers.comms}\n`;

    fs.appendFile('data.js', data, (err) => {
      if (err) throw err;
      console.log('Data saved to file!');
    });
  });