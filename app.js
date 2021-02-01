//when you run this app: 
// node app.js 'Michelle' 'Web Developer', it will return an array of name and occupation. 
// This is because you used the array method .slice() to return a brand-new array based on `process.argv starting at the third index (i.e., index 2 in the zero-based array) and ending with the final index.
//slice() returns everything from teh first zero-based index we provide as the first argument up to but not including the zero-based index we provide in the second argument. So, to return through the last index in the array, we provde the length of the array as the second argument. This way, you don't actually maniuplated process.argv, but rather create a new array based on teh values from the third index on.
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//Notice the lack of parenthesis around the `profileDataArr` parameter. Since we only have one parameter, we can omit the parenthesis wrapping it.
const printProfileData = profileDataArr => {
	//This...
	for (let i = 0; i < profileDataArr.length; i++) {
		console.log(profileDataArr[i]);
	}

	console.log('================');

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
	});

	console.log('================');

	// is the same as this...
	profileDataArr.forEach(profileItem => console.log(profileItem));


};

printProfileData(profileDataArgs);