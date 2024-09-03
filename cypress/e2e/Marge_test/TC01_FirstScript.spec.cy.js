/// <reference types="cypress" /> 

const { describe, it } = require("mocha");
Cypress.config('baseUrl','https://react-redux.realworld.io/')
//Cypress.config('video',true)

describe('Login Functionality', function(){

it('Login Test using Conduit', function(){

    cy.visit('/')
    cy.get('a[href="#login"]').click()
    cy.get('input[placeholder="Email"]').type('technicalquiz24@gmail.com')
    cy.get('input[placeholder="Password"]').type('JaiGurudev') //update password to get pass this script
    cy.get('button[type="submit"]').click()
    cy.get('a[href="#settings"]').click()
    cy.get('.btn.btn-outline-danger').click()
    
})

})