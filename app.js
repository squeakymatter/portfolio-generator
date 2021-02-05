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

//now wrap inquirer.prompt() inside a promptUser function

//notice the function returns a running of inquire.prompt(), thus returning what it returns, which is a Promse. Promise will resolve with a .then() method.
//here, we are calling a function that returns the result of `inquire.prompt, which is a Promise. We therefore append the .thend() method to the function call, since it returns a Promise, and we put into .then() whatever we wish to take the place after the Promise is resolved.
//this allows the function expression to have a single responsibility to prompt the user. The Promise from inquirer can now ba handled by the funciton call, which helps maintain best practices--in contracst to how cacllbacks dealth wtih asynchronous behavior.
const promptUser = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name? (Required)',
			//Notice that the validate method receives an argument. This argument is the user's input, nameInput.
			validate: nameInput => {
				if (nameInput) {
					return true; //If the condition evaluates to true, the validation has passed successfully.
				} else { // if the condition evaluates to false, the user receives a message and is prompted with the same question until an answer is received
					console.log('Please enter your name!');
					return false;
				}
			}
		},
		{
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
			validate: githubInput => {
				if (githubInput) {
					return true;
				} else {
					console.log('Please enter your GitHub Username!');
					return false;
				}
			}
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
	]);
};

//prompt for project questions

//add `portfolioData` parameter that will store project data:
const promptProject = portfolioData => {
	//now add array inside the promptProject() function and initialize it with an empty array. this adds the `projects` array to the `portfolioData` object and initilaizes it as an emptya aray. However, this could be problematic if the projects array is set to an empty array in every function call, because this would essentially erase all the project data we collected. We want this expression to occur on the first pass only.

	//We can handle this by using an if statement to initialize projects only if the array does not exist.
	//If there's no 'projects' array property, create one
	if (!portfolioData.projects) {
		portfolioData.projects = [];
	}

	console.log(`
	=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
			validate: projectNameInput => {
				if (projectNameInput) {
					return true;
				}	else {
					console.log("Please enter your project's name!");
					return false;
				}
			}
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
			validate: linkInput => {
				if (linkInput) {
					return true;
				} else {
					console.log('Please enter the GitHub link to your project.');
					return false;
				}
			}
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    },
		{
			type: 'confirm',
			name: 'confirmAbout',
			message: 'Would you like to enter some information about yourself for an "About" section?', 
			default: true
		},
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
			}
		}
	}
		

  ])
	//once data has been collected by inquirer, you need to add the project data to the `projects` array.
	//Add a .then() to the end of the inquirer.prompt() that's returned by promptProject(). Then add the following code to the callback in the .then()
	.then(projectData => {
		portfolioData.projects.push(projectData);
		if (projectData.confirmAddProject) {
			return promptProject(portfolioData);   // In this condition, we're evaluating the user response to whether they wish to add more projects. This response was captured in the answer object, projectData, in the property confirmAddProject. If the user wishes to add more projects, then this condition will evaluate to true and call the promptProject(portfolioData) function. If portfolioData isn't included as the argument in the function call, what will occur? A new projects array will be initialized, and the existing project data will be lost.
		} else {
			return portfolioData;
		}
	})
};
 //above, we used the array method `push()` to place the `projectData` from `inquirer` into the new `projects` array we just created. now we can evaluate if a user wishes to add another project. do so by adding a condition that will call the `promptProject(portfolioData)` function when `confirmAddProject` evaluates to `true`.

//In order to see if the new question types are working properly, we'll need to call the function promptProject().

//Using Promises, we can chain the functions together using the then() method, as shown here:

// promptUser() 
// .then(answers => console.log(answers))
// .then(promptProject)
// .then(projectAnswers => console.log(projectAnswers));

//By chaining the function call to the then() method, we can control the sequence of the application's control flow. We only want to prompt users with the project questions after the profile questions.

// In the project answer object, pay attention to the last key value pair. The `confirmAddProject` key contains the user's reply regarding whether to add more projects. How can we use this info to control the flow of the application? We'll tackle this in the next step.

// Add Multiple Projects
// In this step, we'll modify the promptProject() function so that the user can add multiple projects to their portfolio page.

// First, we need to change the promptProject() function to store multiple projects. Remember, the project data is currently in the form of the answer object.

//Currently the function is only set up for a single answer object. We want to store these answer objects at the completion of the question prompts. In JavaScript we have multiple options for object storage, like another object or an array. Let's choose an array, because adding objects to an array is relatively straightforward.

// To do this, we might choose to create a global variable that can store the project data. A local variable wouldn't work to store multiple projects, because the variable would reset at every function call. Alternatively, we could have the promptProject() function accept an argument. With the argument option, we could add project data to the argument variable and then call the function with the modified data.

// So why do all this extra work when a global variable would also work? ***Local variables work better because they're limited in scope, so they can't be affected by other parts of the application.*** Global variables, however, can be read and altered by other parts of your program, making them susceptible to changes.

// change promptProject() to add a parameter that will store the project data.


// We have to return the portfolioData in the else statement explicitly so that the object is returned. This is a critical step to retrieving the user's answer and building an HTML template.

// Let's revise the chained function calls at the bottom of app.js (i.e., promptUser().then(answers => ... );) to this:

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });


//9.3.6
// Although it appears we've completed this step, whenever we prompt the user for data, we should always validate the answers. For example, what if a user presses Enter without supplying a name? Their name is an important piece of data! If we want to thank the user for their input, we should really know their name.

// Validate user input from all interfaces, whether it is a web form or a CLI application. This ensures that we have the data we need before we start operating on it in the code.

// So how do we validate using inquirer? Use inquirer's `validate` method




