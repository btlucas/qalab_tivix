@qalab_app @car_rent
Feature: Renting a car on QAlab app

    The user should be able to rent cars on the QAlab app from Tivix

@car_rent_sucessful
Scenario: Renting a car
    Given An user that selected the first available car in the search result
    And The user confirmed that all the car details are correct
    And The user clicked the Rent! button
    When Filling up the form for renting with correct values
    And The user clicked the Rent button
    Then A sucess message should appear