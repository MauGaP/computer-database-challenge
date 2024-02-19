Feature: Add Computer with basic data

    As a regular user
    I want to add a new Computer with basic data
    in order to validate it can be added.

    Scenario: Add computer with basic data
        Given the user is on the computer page
        When the user adds a computer with only the name
        Then the application displays a confirmation message
