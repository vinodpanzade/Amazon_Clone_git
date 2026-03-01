Feature: Amazon Clone UAT Tests

  @UAT
  Scenario: Verify product search and product listing on homepage
    Given I open the homepage
    Then verify the product
    And Verify other product list