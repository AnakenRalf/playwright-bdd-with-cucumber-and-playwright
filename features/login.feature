Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
    Given I visit to a login page
    When I fill login form with valid credentioals
    Then I should see the Inventory page