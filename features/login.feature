Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
      Given I visit to a login page
      When I fill login form with valid credentioals
      Then I should see the Inventory page

    Scenario: Try to login with invalid cred
      Given I visit to a login page
      When I fill the login form with "<username>" and "<password>"
      Then I wait for 3 seconds

      Examples:
          |  username  | password |
          |  fail-1  | fail-1 |
          |  fail-2  | fail-2 |
          |  fail-3  | fail-3 |