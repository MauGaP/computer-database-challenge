# computer-database-challenge
interview challenge for a company

## Prerequisites
have node.js installed

## Installation
run `npm install`

## Running the test
run `npm run test`

## Debugging 
run `npm run open`

# Findings:
I have decided to create tests increasing their complexity until I find a bug, so it took me 4.

#### First test: adding a computer with only the name
For adding a computer with only the name, the expected result is the alert validation that it was created checking the name is displayed.
I used a function to create random values for the name.

#### Second test: adding a computer with all the data
For the second one, the expected result is that the alert contains the name.
I created a function to create date variables for today and next year.

#### Third test: searching for an already existent computer
I selected Compaq (because there is only one value). The expected Result is that the table displays at least one value with Compaq

#### Fourth test: adding a computer with all the data and searching for it
The fourth one is a combination of all the previous test in only one, and the expected result is that the table displays the recently created computer. The recently created computer is not existant in the table, so that should be a bug.

### Manualy reproduction:
#### Prerequisites:
1- valid string for the name.
2- Introduced date with format: yyyy-MM-dd.
3- Discontinued date with format: yyyy-MM-dd and after the introduced date.

#### Steps:
1- navigate to https://computer-database.gatling.io/computers
2- click 'add a new computer' button
3- complete the form with all valid data (name: string, introduced: Date ('yyyy-MM-dd'), Discontinued Date ('yyyy-MM-dd'), Company: select value) and click 'Create this computer'
4- validate the name of the computer is displayed on the alert banner
5- enter the name of the computer in the search field and click the 'Filter by name' button.

#### Expected result:
The table displays the name of the computer with all the data entered

#### Actual result:
The table is empty. 

#### Notes:
- Another evidence is that the number of computers does not increase when you create a new computer.
- I have found an issue when opening the console, that there is a 404 error,
Failed to load resource: the server responded with a status of 404 (Not Found), but I don't know what is the missing resource, this is when I open the console for the first time. I don't think is related to the bug I found.