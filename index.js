const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description of the project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Write installation instrucions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Write usage instrucions',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Write contributing instructions',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What tests should be run?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Advise on how you respond to questions',
      name: 'questions',
    }
  ])

  // construction and file writing
  .then((answers) => {
    const data = `Name: ${answers.name}\nLanguages: ${answers.languages}\nPreferred method of communication: ${answers.comms}\n`;

    fs.appendFile('data.js', data, (err) => {
      if (err) throw err;
      console.log('Data saved to file!');
    });
  });