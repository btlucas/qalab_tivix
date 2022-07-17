@qalab_app @car_search
Feature: Searching a car for rent on QAlab app

    The user should be able to find cars for renting on the QAlab app from Tivix

@car_search_countries_and_cities
Scenario Outline: Finding cars on different countries and cities
    Given An access to the car rent app
    And The user selected the country "<country>" and city "<city>"
    And The pick-up date is set for today and the drop-off date is set for one week later
    When Clicking the Search button
    Then The user should see the available cars for that city and country

    Examples:
        | country | city    |
        | France  | Paris   |
        | Germany | Berlin  |
        | Poland  | Krakow  |
        | Poland  | Wroclaw |

@car_search_model
Scenario Outline: Finding rent cars based on model
    Given An access to the car rent app
    And The user selected the country "<country>" and city "<city>"
    And Writen the model name "<model>"
    And The pick-up date is set for today and the drop-off date is set for one week later
    When Clicking the Search button
    Then The user should see only the car model from the search form

    Examples:
        | country | city    | model             |
        | France  | Paris   | Skoda Octavia     |
        | Germany | Berlin  | Volkswagen Tiguan |
        | Poland  | Krakow  | Skoda Octavia     |
        | Poland  | Wroclaw | Volkswagen Tiguan |


