const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZlMDFiODJiLTQwNTktNDkwOS1iZjU5LTZhMmQzMTkzMzBlMS0xNjc3MDk1NTg5MDk4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMGU2M2Q4NjctNDYwMi00ZGQ3LThkYTEtMDg2ODM3NzA1YjI4IiwidHlwZSI6InQifQ.wppsPTvOQk1A4Q1Snegjm6L1bhrC5anRxl792qHSXUI'

cypress.run({
  // specs to run here
  
})
.then((results) => {
  const args = {
    target: token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
