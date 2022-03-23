Feature: Events Feature
    Page to Manage and display Events

    Scenario: View Event
        Given I am on the Events page
        When I click on an event
        Then I should see the event details page