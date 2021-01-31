// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
function renderLicenseBadge(license) {
  if (license !== 'None'){
      return`\n * [License](#license)\n`;
    }
    return '';
}
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return`\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
      return `## License
      
  This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing) 
* [Tests](#tests)
* [Questions](#questions) 
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## License
${data.licen}
## Questions
If you have any questions contact me directly at ${data.email}. 
You can find more of my work at [${data.github}](http://github.com/${
    data.github
}/).
`;
}

module.exports = generateMarkdown;