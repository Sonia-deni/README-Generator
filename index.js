const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const validator = require('email-validator');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project',
      validate: (title) => {if(title.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
      validate: (description) => {if(description.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any installation instructions',
      validate: (installation) => {if(installation.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
      validate: (usage) => {if(usage.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Please enter license type',
      choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'Boost Software', 'Creative Commons Zero v1.0 Universal']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contributing information',
      validate: (contribution) => {if(contribution.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test instructions',
      validate: (test) => {if(test.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter GitHub username for questions section',
      validate: (github) => {if(github.length>0){return true} else{console.log('Cannot be empty'); return false}}
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email address for questions section',
      validate: (email) => {if(validator.validate(email)){return true} else{console.log('Please enter a valid email address'); return false}}
    },
  ]);

// function to initialize program
const init = async () => {
    //console.log('hi');
    try {
      const answers = await questions();
  
      const markdown = generateMarkdown(answers);
  
      await writeFileAsync('README.md', markdown);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
