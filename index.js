const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please enter license type',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contributing information',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter test instructions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter GitHub URL for questions section',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email address for questions section',
    },
  ]);


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = async () => {
    console.log('hi');
    try {
      const answers = await questions();
  
      const markdown = generateMarkdown(answers);
  
      await writeFileAsync('readme.md', markdown);
  
      console.log('Successfully wrote to readme.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
