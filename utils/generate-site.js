const fs = require('fs')
const { resolve } = require('path')

// create two functions that return a Promise, one for writing a file and another for copying a file. That means we'll execute an asynchronous function that enables us to use .then() and .catch() methods to handle its response. Let's create the function write files, which will entail taking the familiar fs.writeFile() function and contextualizing it to be Promise based. We'll start by creating the Promise, and then we'll work in the actual fs functionality we're looking to achieve.

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err)
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      })
    })
  })
}

// In generate-site.js, create a new function called copyFile. It doesn't need to accept any parameters.
// Make copyFile() return a new Promise object, like we do with writeFile() above.
const copyFile = () => {
  return new Promise((resolve, reject) => {
    // Move the fs.copyFile() code from app.js into the returning Promise object's function in our copyFile() function (use writeFile() as a guide).
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        // If there's an error, reject() the error and return out of the function.
        reject(err)
        return
      }
      // If it's successful, resolve() it with a success message.
      resolve({
        ok: true,
        message: 'Style sheet copied successfully!'
      })
    })
  })
}

module.exports = { writeFile, copyFile }
