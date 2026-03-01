Feature: Amazon Clone UAT

  @UAT
  Scenario: Open Amazon Home page
    Given I open the homepage
    Then verify the product 
    And Verify other product list
