Feature: Sign In

Scenario: Successful Sign In
  Given the user is on the Sign In page
  When the user provides valid credentials
  Then the user should be redirected to the home page

Scenario: Invalid Sign In
  Given the user is on the Sign In page
  When the user provides invalid credentials
  Then an error message should be displayed
