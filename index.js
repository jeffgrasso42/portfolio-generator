// DEPENDENCIES
// inquirer
import inquirer from 'inquirer';
// file system
import * as fs from 'node:fs';

// FUNCTIONS
const generateHTML = (
  {
    username: userName,
    location,
    bio,
    github: gitHub,
    linkedin: linkedIn
  }
) => {
  const htmlOutput = 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
  </head>
  <body>
    <header>
      <h1>${userName}</h1>
    </header>
    <section>
      <h2>${location}</h2>
      <p>${bio}</p>
    </section>
    <section>
      <ul>
        <li><a href="${gitHub}">GitHub</a></li>
        <li><a href="${linkedIn}"></a>LinkedIn</li>
      </ul>
    </section>
  </body>
</html>`

return htmlOutput;
}

const init = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your full name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Write a short about me bio: ',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'Enter your Github profile URL: ',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your LinkedIn profile URL: ',
      name: 'linkedin',
    },
  ])
  .then((response) => {
    const outputHTML = generateHTML(response);
    console.log(outputHTML);
    fs.writeFile('index.html', outputHTML, (err) => {
      err ? console.error(err) : console.log('Success!');
    })
  });
}

// INITIALIZATION
init();