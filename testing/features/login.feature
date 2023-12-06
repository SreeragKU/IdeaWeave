Feature: Login Feature
  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials
    And click on the login button
    Then I should be redirected to the home page
