Feature: Home Page

    Home Page for CSEGSA Website

    Scenario: Home Page Navigation
        Given I am on the  "home" Page
        When I click on the "EVENTS" link
        Then Sleep for 1 seconds
        Then I should be on the "events" Page
        When I click on the "HOME" link
        Then Sleep for 1 seconds
        Then I should be on the "home" Page
        When I click on the "JOBS" link
        Then Sleep for 1 seconds
        Then I should be on the "jobs" Page
        When I click on the "LOG IN" link
        Then Sleep for 1 seconds
        Then I should be on the "login" Page
