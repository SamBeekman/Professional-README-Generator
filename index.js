// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
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
            //To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
            // ```md
            // ![alt text](assets/images/screenshot.png)
            // ```
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
        // console.log(answers);

        let data =
            `# <${answers.title}>

        ## Description
        
        ${answers.description}
        
        ## Table of Contents
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [License](#license)
        - [Github](#github)
        - [email](#email)
        
        ## Installation
        
        ${answers.installation}
        
        ## Usage
        
        ${answers.usage}
        
        ## License
        
        ${answers.license}
        
        ## Badges
        
        ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
        
        Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
        
        
        ## How to Contribute
        
        ${answers.contributing}
        
        ## Tests
        
        ${answers.tests}
        
        ## Github
        
        ${answers.github}
        
        ## Email
        
        ${answers.email}`

        fs.writeFile('README.md', data, (err) =>
            err ? console.error(err) : console.log('Success!'));
    })

    .catch(function (error) {
        console.log(error);
    }
    );


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
