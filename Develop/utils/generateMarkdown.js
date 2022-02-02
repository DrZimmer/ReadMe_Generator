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
function renderLicenseSection(license) {
  if(license !== ''){
    return `This project is licensed under ${renderLicenseLink}${renderLicenseBadge}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents REORG THIS
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
