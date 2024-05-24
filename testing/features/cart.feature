Feature: Add Product to Cart

  Scenario: Add a product to the cart and adjust quantity
    Given I am on the homepage
    When I click on a product
    Then I should be on the product page
    When I click on the add to cart button
    Then The product should be added to the cart
    When I click on the plus button
    And I click on the minus button twice
    Then The quantity should be updated accordingly

