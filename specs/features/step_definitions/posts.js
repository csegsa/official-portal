const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, Capabilities} = require('selenium-webdriver');
require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

// Scenario: Move to the Job Posting Page
Given('I am on the CSEGSA Home Page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('http://localhost:5000/');
});

When('I click on the {string} link', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be on the Job Posting Page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


// Scenario: View the Job Posting Page

Given('I am on the Job Posting Page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('http://localhost:5000/jobpostings');
});

Given('I am not logged in', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('I should see the list of posts', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should not see add a post button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


// Scenario Outline: Authorised user Add a Job Posting

Given('I am logged in as an {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('I should be on the Add a Job Posting Page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I fill in the {string} form', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('I click on the {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('I should see the new post', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I try to access the {string} link', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be shown an error message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});