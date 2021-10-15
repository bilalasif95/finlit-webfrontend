/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable spaced-comment */

/// <reference types="cypress" />

const serverDomain = 'c0sxzwsh.mailosaur.net';
const emailAddress = `testUser@${serverDomain}`;

describe('student forgot password', () => {
  before(function() {
    cy.fixture('student').then(function(student) {
      cy.deleteUser(student.email);
      cy.addUser(student);
      cy.verifyEmail(student.email);
      studentUser = student;
    });
    beforeEach(() => {
      cy.visit('signup');
      cy.deleteUser(emailAddress);
    });

    it('with valid input values', () => {
      cy.registerStudent(
        emailAddress,
        'Test',
        'User',
        'Test@12345',
        'Test@12345',
      );
      cy.get('h4 > span').should('have.text', 'Your email has been verified');
    });

    afterEach(() => {
      cy.deleteUser(emailAddress);
    });
  });
});
