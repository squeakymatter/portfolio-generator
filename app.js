const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

//inquirer's `prompt` method receives an array of objects in its argument, known as the `question` object. 
//`question` object properties identify the type, name and question of this partiuclar question. 
//`answer` object is returned as a Promise. A Promise is a tool for dealing with async functions that will return the `answer` object in the `then` function.
//the `answer` object returned from the Promse has the `name` property value as the key and the user input as the value. e.g. { name: 'michelle' }
inquirer
	.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name?'
		}
	])
	.then(answers => console.log(answers));