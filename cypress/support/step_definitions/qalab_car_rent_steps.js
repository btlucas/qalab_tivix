import { Given, And, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import QalabPage from '../pages/QalabPage'

const qalabPage = new QalabPage();


Given("An user that selected the first available car in the search result", () => {
    Step(this, "An access to the car rent app");
    Step(this, "The user selected the country 'France' and city 'Paris'");
    Step(this, "The pick-up date is set for today and the drop-off date is set for one week later");
    Step(this, "Clicking the Search button");
    qalabPage.getCarsNameList().eq(1).then(($el) => {
        cy.wrap($el.text()).as('carModel')
    });
    qalabPage.getCompanyNameList().eq(1).then(($el) => {
        cy.wrap($el.text()).as('companyName')
    });
    qalabPage.getPricePerDayList().eq(1).then(($el) => {
        cy.wrap($el.text()).as('pricePerDay')
    });
    qalabPage.getLicensePlateList().eq(1).then(($el) => {
        cy.wrap($el.text()).as('licensePlate')
    });
    qalabPage.getRentButton().eq(0).click();
});

And("The user confirmed that all the car details are correct", () => {
    qalabPage.getRentDetails().children().eq(0).then(($el) => {
        cy.get('@companyName').then((text) => {
            expect($el).to.contain(text)
        })        
    })
    qalabPage.getRentDetails().children().eq(1).then(($el) => {
        cy.get('@pricePerDay').then((text) => {
            expect($el).to.contain(text)
        })        
    })
    qalabPage.getRentDetails().children().eq(2).then(($el) => {
        cy.get('@selectedCountry').then((text) => {
            expect($el).to.contain(text)
        })  
        cy.get('@selectedCity').then((text) => {
            expect($el).to.contain(text)
        })        
    })
    qalabPage.getRentDetails().children().eq(3).then(($el) => {
        cy.get('@licensePlate').then((text) => {
            expect($el).to.contain(text)
        })        
    })
    qalabPage.getRentDetails().children().eq(4).then(($el) => {
        cy.get('@pickUpDate').then((text) => {
            expect($el).to.contain(text)
        })        
    })
    qalabPage.getRentDetails().children().eq(5).then(($el) => {
        cy.get('@dropOffDate').then((text) => {
            expect($el).to.contain(text)
        })        
    })
})

And("The user clicked the Rent! button", () => {
    qalabPage.getRentDetailsButton().click()
})

When("Filling up the form for renting with correct values", () => {
    qalabPage.setNameInput("Lucas")
    qalabPage.setLastNameInput("Teixeira")
    qalabPage.setCreditCardInput("0123456789")
    qalabPage.setEmailInput("lbteixeira96@gmail.com")
})

And("The user clicked the Rent button", () => {
    qalabPage.getRentFormButton().click()
})

Then("A sucess message should appear", () => {
    qalabPage.getSucessMessage().contains("The car was successfully rented!")
})
