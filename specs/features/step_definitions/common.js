const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, Capabilities, By} = require('selenium-webdriver');
require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

const website = 'https://csegsa-portal.herokuapp.com/'


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('I am on the  {string} Page', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(website + string);
    // return 'pending';
});

When('I click on the {string} link', function (string) {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.linkText(string)).click();
    // return 'pending';
});

Then('I should be on the {string} Page', function (string) {

    driver.getCurrentUrl().then(function(url){
        assert.equal(url, website + string);
    });
});

Then('Sleep for {int} seconds', async function (int) {
    await sleep( int * 1000);
});
