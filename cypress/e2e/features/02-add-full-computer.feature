Feature: Add Computer with complete data

    As a regular user
    I want to add a new Computer with complete data
    in order to validate it can be added.

    Scenario: Add computer with complete data
        Given the user is on the computer page
        When the user adds a computer with all the information
        Then the application displays a confirmation message
