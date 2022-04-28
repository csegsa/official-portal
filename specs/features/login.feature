Feature: Home Page

  Scenario: Login Flow
    Given I am on the  "home" Page
    When I click on the "LOG IN" link
    And Sleep for 1 seconds
    Then I should be on the "login" Page