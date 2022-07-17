import { Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("An access to the car rent app", () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
});

