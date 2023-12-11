const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/Login-Page')

const page = new LoginPage()

Given('I visit to a login page', async function () {
  await page.navigateToLoginScreen()
})

When('I fill login form with valid credentioals', async function () {
  await page.submitLoginForm('standard_user', 'secret_sauce')
})

Then('I should see the Inventory page', async function () {
  await page.assertUserIsLoggedIn()
})
