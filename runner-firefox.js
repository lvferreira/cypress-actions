const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'firefox'
})
.then((results) => {
  const args = {
    target: process.env.TARGET_FIREFOX_TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
