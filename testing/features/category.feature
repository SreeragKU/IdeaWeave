Feature: Create Category Feature
  As an admin
  I want to create new category
  So that users can add diverse content

  Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials
    And click on the login button
    Then I should be redirected to the home page
    When I am on the home page
    And I click on the explore button
    Then I should be redirected to the admin dashboard
    When I am on the category page
    And I enter a new category
    And I click on the save changes button
    Then I should remain in category page
