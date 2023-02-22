const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
  
})
.then((results) => {
  const args = {
    target: process.env.TARGET_ELECTRON_TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
