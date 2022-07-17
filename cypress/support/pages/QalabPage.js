class QalabPage {
    setCountry(country){
        return cy.get('#country').select(country)
    }

    setCity(city){
        return cy.get('#city').select(city)
    }

    setPickUp(date){
        return cy.get('#pickup').type(date)
    }

    setDropOff(date){
        return cy.get('#dropoff').type(date)
    }

    getSearchButton(){
        return cy.get('.btn')
    }

    getCarsList(){
        return cy.get('tbody')
    }

    setCarModel(model){
        return cy.get('#model').type(model)
    }

    getCarsNameList(){
        return cy.get('tr > :nth-child(3)')
    }

    getRentButton(){
        return cy.get('.btn-success')
    }

    getCompanyNameList(){
        return cy.get('tr > :nth-child(2)')
    }

    getPricePerDayList(){
        return cy.get('tr > :nth-child(6)')
    }

    getLicensePlateList(){
        return cy.get('tr > :nth-child(4)')
    }

    getRentDetails(){
        return cy.get('.card-body')
    }

    getRentDetailsButton(){
        return cy.get('.btn')
    }

    getRentFormButton(){
        return cy.get('.btn')
    }

    setNameInput(name){
        return cy.get('#name').type(name)
    }

    setLastNameInput(last_name){
        return cy.get('#last_name').type(last_name)
    }

    setCreditCardInput(card_number){
        return cy.get('#card_number').type(card_number)
    }

    setEmailInput(email){
        return cy.get('#email').type(email)
    }

    getSucessMessage(){
        return cy.get('.sucess')
    }
}

export default QalabPage