Feature: Search for an existent computer

    As a regular user
    I want to search for an existent computer
    in order to validate the filtering of the table.

    Scenario: Search for an existent computer
        Given the user is on the computer page
        When the user searches for an existing computer
        Then the application displays the filtered computer
