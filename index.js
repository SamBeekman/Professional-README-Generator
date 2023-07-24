// npm packages that are used
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    // questions to be prompted with
    .prompt([
        {
            type: 'input',
            message: 'What is project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project. Hint: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'tests',
        },
        {
            type: 'checkbox',
            message: 'Which license would you like for your project?',
            name: 'license',
            choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause', 'Unlicensed'],
        },
        {
            type: 'input',
            message: 'Enter your Github Username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
        },

    ])
    .then(function (answers) {

        // README structure
        let data =
            `
# ${answers.title}

![License](https://img.shields.io/badge/License-${answers.license}-blue)


## Description

${answers.description}


## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)


## Installation

${answers.installation}


## Usage

${answers.usage}


## Contributing

${answers.contributing}


## Tests

${answers.tests}


## License

${answers.license}


## Questions

To view my github page, click on: [My Github Page](https://www.github.com/${answers.github})

For any questions, please contact me via email at: ${answers.email}`

        // create the README file
        fs.writeFile('README.md', data, (err) =>
            err ? console.error(err) : console.log('Success!'));
    })

    .catch(function (error) {
        console.log(error);
    }
    );
