Feature: Job Posting Page
    A page listing availabe jobs posted by the CSEGSA alumni/members

    Scenario: Move to the Job Posting Page
        Given I am on the CSEGSA Home Page
        When I click on the "Job Postings" link
        Then I should be on the Job Posting Page

    Scenario: View the Job Posting Page
        Given I am on the Job Posting Page
        And I am not logged in
        Then I should see the list of posts
        And I should not see add a post button

    Scenario Outline: Authorised user Add a Job Posting
        Given I am on the Job Posting Page
        And I am logged in as an "<authorised_user>"
        Then I should see add a post button
        When I click on the "Add a Post" link
        Then I should be on the Add a Job Posting Page
        When I fill in the "Post Details" form
        And I click on the "Submit" button
        Then I should be on the Job Posting Page
        And I should see the new post

        Examples:
            | authorised_user |
            | alumni          |
            | member          |
            | admin           |

    Scenario Outline: Unauthorised user Add a Job Posting
        Given I am on the Job Posting Page
        And I am not logged in
        Then I should not see add a post button
        When I try to access the "Add a Post" link
        Then I should be shown an error message



