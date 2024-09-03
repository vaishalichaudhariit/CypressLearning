/// <reference types="cypress" /> 

const { describe, it } = require("mocha");

describe('Login Functionality', function(){

it('Login Test using Conduit', function(){

    cy.visit('https://react-redux.realworld.io/')
    cy.get('a[href="#login"]').click()
    cy.get('input[placeholder="Email"]').type('technicalquiz24@gmail.com')
    cy.get('input[placeholder="Password"]').type('JaiGuru')
    cy.get('button[type="submit"]').click()
    cy.get('a[href="#settings"]').click()
    cy.get('.btn.btn-outline-danger').click()
    
})

})