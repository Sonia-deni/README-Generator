// function to generate markdown for README
function generateMarkdown(data) {

  return `# **${data.title}**
  ${getBadge(data.license)}

  ## Description
  ${data.description}  
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  Installation instructions:  
  ${data.installation}  

  ## Usage
  Usage information:  
  ${data.usage}  

  ## License
  This application is covered under the ${data.license} license. Please click the link at the top of the page for more information. 

  ## Contributing
  Guidelines for contributions:  
  ${data.contribution}  

  ## Tests
  Test instructions:  
  ${data.tests}  
    
  ## Questions
  Contact via GitHub: [${data.github}](https://github.com/${data.github})  

  Contact via Email: ${data.email}
`;
}

const getBadge = (badge) => {
  
  let badges = ['https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0',
  'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.GNU.org/licenses/gpl-3.0',
   'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT',
   'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause',
  'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause',
   'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt',
   'https://licensebuttons.net/l/zero/1.0/80x15.png)](http://Creativecommons.org/publicdomain/zero/1.0/'];

   let chosenBadge = badge.split(' ')[0]; //get only the first word in the license to match the badge

   for(let i=0; i<badges.length; i++){
      if(badges[i].includes(chosenBadge)){
        let badgeURL = `[![License](${badges[i]})`;
        return badgeURL;
      }
    }
}

module.exports = generateMarkdown;
