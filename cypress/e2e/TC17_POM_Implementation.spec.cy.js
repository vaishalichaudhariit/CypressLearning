/// <reference types="cypress" /> 

import landingPage from '../e2e/pages/landingPage'


describe('Page Object Model Test', function(){
   
  
    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })
 
    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        landingPage.clickSigninButton()
        .enterEmail(this.data.email)
        .enterPassword(this.data.password)
        .clickSigninButton()
        .checkYourFeedIsVisible()
        .clickSettingsButton()
        .clickLogoutButton();
    })
 
 })