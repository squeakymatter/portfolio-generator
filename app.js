const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//Or, written with oneline:
const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

// //   console.log('================');

// //   // Is the same as this...
// //   profileDataArr.forEach(profileItem => console.log(profileItem));
// // };

// // printProfileData(profileDataArgs);

// // const generatePage = () => 'Name: Jane, Github: janehub';
// //This returns a string.
// //parenthesis are unnecessary in arrow functions when there is one parameter, but if function has no parameters, use parenthesis to hold the place of parameters.
// //note there is no `return` keyword. This is a special case where the function only has a single statement, so the curly braces are unnecessary and the return statement is implied.
// //This should return a string:
// // console.log(generatePage());

// ///////////////
// //Template Literals
// // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// // console.log(generatePage('Jane', 'janehub'));

// //Multi-line Strings use backticks...
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };
// console.log(generatePage('Jane', 'janehub'));


// console.log(name,github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
	if (err) throw err;

	console.log('Portfolio complete! Check out index.html to see the output.');
});