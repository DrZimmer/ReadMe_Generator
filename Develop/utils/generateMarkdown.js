// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== ''){
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)]`
  }
  return '';
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== ''){
    return `https://choosealicense.com/licenses/${license}/`
  }
  return '';
};

// Function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(license !== ''){
//     return `This project is licensed under ${license}`
//   }
//   return '';
// }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## License
  ${renderLicenseLink(data.license)}

  ## Usage
  ${data.dependencies}
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
};

module.exports = generateMarkdown;
