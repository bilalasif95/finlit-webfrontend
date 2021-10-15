/* eslint-disable */
/// <reference types="cypress" />
import 'cypress-mailosaur';

const serverId = 'c0sxzwsh';
const serverDomain = 'c0sxzwsh.mailosaur.net';
const emailAddress = `testUser@${serverDomain}`;

describe('student signup', () => {
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
    cy.get('.Toastify__toast-body').then(() => {
      cy.wait(5000);
      cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress,
      }).then(email => {
        cy.visit(email.html.links[0].href);
      });
      cy.get('h4 > span').should('have.text', 'Your email has been verified');
    });
  });

  afterEach(() => {
    cy.deleteUser(emailAddress);
  });
});

describe('educator signup', () => {
  beforeEach(() => {
    cy.visit('signup');
    cy.deleteUser(emailAddress);
  });

  it('with valid input values', () => {
    cy.registerInstructor(
      emailAddress,
      'Test',
      'User',
      'Test@12345',
      'Test@12345',
      'Test address',
    );
    cy.get('.Toastify__toast-body').then(() => {
      cy.wait(5000);
      cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress,
      }).then(email => {
        cy.visit(email.html.links[0].href);
      });
      cy.get('h4 > span').should('have.text', 'Your email has been verified');
    });
  });

  afterEach(() => {
    cy.deleteUser(emailAddress);
  });
});
