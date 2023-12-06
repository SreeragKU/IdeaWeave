Feature: Contact Feature
  As a user
  I want to Contact the Administrator
  So that I can communicate my queries

  Scenario: Successful Login
    Given I am on contact page
    And I enter the contact query
    And click on submit
    Then contact is accomplished