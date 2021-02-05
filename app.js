// var comandLineArgs = process.argv;
// console.log(comandLineArgs);
//if we run `node app 'Hello Node' From The command line `, it'll return everything as strings in an array

//process is a global object that tells you everything about a particular app. it's comparable to document or window in a browswer.
// console.log(process); 
//argv property of process is an array that holds exactly what was typed in the command line on execution so that we can capture that data and use it in the app.

//first value that's returned is the path to node.js (i.e., where node is installed)
//second value that's returned is the current directory of the app we're in (app.js)

//since we don't typically need first two default items in the array, we can use slice to remove them like this:
const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => { 
	//this
	for (let i = 0; i < profileDataArr.length; i++) {
		console.log(profileDataArr[i]);
	}

	console.log('=========');
	//is the same as this...
	profileDataArr.forEach((profileItem) => {
		console.log(profileItem);
	});

	//is the same as this:
	profileDataArr.forEach(profileItem => console.log(profileItem));
}
printProfileData(profileDataArgs); 
