/* eslint-disable */
/// <reference types="cypress" />

describe('student login', () => {
  let studentUser;
  before(function() {
    cy.fixture('student').then(function(student) {
      cy.deleteUser(student.email);
      cy.addUser(student);
      studentUser = student;
    });
  });

  beforeEach(() => {
    cy.visit('login');
  });

  it('should login successfully', () => {
    cy.login(studentUser.email, studentUser.password);
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  after(() => {
    cy.deleteUser(studentUser.email);
  });
});

describe('educator login', () => {
  let educatorUser;
  before(function() {
    cy.fixture('educator').then(function(educator) {
      cy.deleteUser(educator.email);
      cy.addUser(educator);
      educatorUser = educator;
    });
  });

  beforeEach(() => {
    cy.visit('login');
  });

  it('with valid input values', () => {
    cy.login(educatorUser.email, educatorUser.password);
    cy.url().should('eq', `${Cypress.config().baseUrl}dashboard`);
  });

  after(() => {
    cy.deleteUser(educatorUser.email);
  });
});
