import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import landingPage from "../../pages/landingPage.js";
import loginPage from "../../pages/loginPage.js";
import homePage from "../../pages/homePage.js";
import settingsPage from "../../pages/settingsPage.js";

beforeEach(function(){
    cy.fixture('ConduitData').as('data')
})

Given('User is on the login page', function () {
    landingPage.navigateTo('https://react-redux.realworld.io/');
    landingPage.clickSigninButton();
})

/*When('User login with valid credentials', function () {
    loginPage.enterEmail(this.data.email);
    loginPage.enterPassword(this.data.password);
    loginPage.clickSigninButton();
})*/

When('User login with valid credentials', function (dataTable) {
    loginPage.enterEmail(dataTable.rawTable[1][0]);
    loginPage.enterPassword(dataTable.rawTable[1][1]);
    loginPage.clickSigninButton();
})

When('User click on the settings button', function () {
   homePage.clickSettingsButton();
})

When('User click on the logout button', function () {
   settingsPage.clickLogoutButton();
})

Then('User should be routed back to login page', function () {
    cy.title().should('eq', 'Conduit')
})