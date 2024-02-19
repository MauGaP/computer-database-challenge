import { createNextYearDate, createTodaysDate } from './utils/date-time-variables';
import { createRandomName } from './utils/name-variables';

describe('computer creation', () => {
  it('adds a new computer with only name', () => {
    var name = createRandomName();

    cy.visit('/');
    cy.get('#add').click();
    cy.get('#name').type(name);
    cy.get('.primary').click();

    cy.get('.alert-message').should('contain', `Computer ${name} has been created`);
  });

  it('adds a new computer with all data', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    cy.visit('/');
    cy.get('#add').click();
    cy.get('#name').type(name);
    cy.get('#introduced').type(today);
    cy.get('#discontinued').type(nextYear);
    cy.get('#company').select('Sony');
    cy.get('.primary').click();

    cy.get('.alert-message').should('contain', `Computer ${name} has been created`);
  });

  it('searches for an already created computer', () => {
    cy.visit('/');

    cy.get('#searchbox').type('Compaq');
    cy.get('#searchsubmit').click();

    cy.get('tbody > tr > :nth-child(1)').should('contain', 'Compaq')
  });

  it('adds a computer and searches for it', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    cy.visit('/');
    cy.get('#add').click();
    cy.get('#name').type(name);
    cy.get('#introduced').type(today);
    cy.get('#discontinued').type(nextYear);
    cy.get('#company').select('Sony');
    cy.get('.primary').click();

    cy.get('.alert-message').should('contain', `Computer ${name} has been created`);

    cy.get('#searchbox').type(name);
    cy.get('#searchsubmit').click();

    cy.get('tbody > tr > :nth-child(1)').should('contain', name)
  });
});
