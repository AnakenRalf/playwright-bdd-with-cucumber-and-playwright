class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/'
    this.username = '#user-name'
    this.password = '#password'
    this.loginButton = '#login-button'
  }
  async navigateToLoginScreen() {
    await page.goto(this.url)
  }

  async submitLoginForm(username, password) {
    await page.fill(this.username, username)
    await page.fill(this.password, password)
    await page.click(this.loginButton)
  }

  async assertUserIsLoggedIn() {
    const currentUrl = await page.url()
    await expect(currentUrl).to.equal(this.url + 'inventory.html')
  }
}

module.exports = { LoginPage }
