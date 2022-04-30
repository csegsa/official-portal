Feature: Events Page

  Scenario: Events Page Navigation
    Given I am on the  "events" Page
    When I click on the "JOBS" link
    Then Sleep for 1 seconds
    Then I should be on the "jobs" Page
