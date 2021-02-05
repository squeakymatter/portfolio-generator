const generatePage = (name, github) => {
<<<<<<< HEAD
  return `
  <!DOCTYPE html> 
=======
	return `
	<!DOCTYPE html> 
>>>>>>> fc33ede53e4403bcb450dcb290ae979a848d1453
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
<<<<<<< HEAD
  `;
};

	module.exports = generatePage; 
	// now go to app.js file and add const generatePage = ('./src/page-template.js');
=======
	`;
};

//in orderto use functions from one module inside another, we use related statements `module.exports` and `require`. In source file that has functions, use `module.exports` at the bottom. In the destinate ifles that we want to receive these functions, we put `require` at the top.
module.exports = generatePage;
>>>>>>> fc33ede53e4403bcb450dcb290ae979a848d1453
