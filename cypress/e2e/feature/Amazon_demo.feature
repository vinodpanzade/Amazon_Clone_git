Feature: Amazon Clone Smoke Tests

  @smoke
  Scenario: Open Amazon clone homepage
    Given I open the Amazon clone homepage
    Then the search input should be visible
    And the Amazon logo image should be displayed