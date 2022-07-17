import { And, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import QalabPage from '../pages/QalabPage'

const qalabPage = new QalabPage();

And("The user selected the country {string} and city {string}", (country, city) => {
    qalabPage.setCountry(country);
    cy.wrap(country).as('selectedCountry');
    qalabPage.setCity(city);
    cy.wrap(city).as('selectedCity');
})

And("The pick-up date is set for today and the drop-off date is set for one week later", () => {
    const pickUp = new Date();
    const oneWeekLater = new Date().setDate(pickUp.getDate()+7);
    const dropOff = new Date(oneWeekLater);
    qalabPage.setPickUp(pickUp.toLocaleString('sv').split(' ')[0]).invoke('val').as('pickUpDate');
    qalabPage.setDropOff(dropOff.toLocaleString('sv').split(' ')[0]).invoke('val').as('dropOffDate');
})

When("Clicking the Search button", () => {
    qalabPage.getSearchButton().click();
})

Then("The user should see the available cars for that city and country", () => {
    qalabPage.getCarsList().should('have.length.at.least',1);
})

And("Writen the model name {string}", (model) => {
    qalabPage.setCarModel(model).invoke('val').as('modelName');
})

Then("The user should see only the car model from the search form", () => {
    qalabPage.getCarsNameList().each(($carName, index)=>{
        if(index>0){
            cy.get('@modelName').should('eq',$carName.text());
        }        
    })
})