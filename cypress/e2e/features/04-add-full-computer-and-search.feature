Feature: Add Computer with complete data and search for it

    As a regular user
    I want to add a new Computer with complete data
    in order to validate it can be added.

    Scenario: Add computer with complete data and search for it
        Given the user is on the computer page
        When the user adds a computer with all the information
        Then the application displays a confirmation message
        When the user searches for the newly created computer
        Then the application displays the filtered computer
