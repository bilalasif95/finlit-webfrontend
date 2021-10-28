/* eslint-disable */
/// <reference types="cypress" />
import 'cypress-mailosaur';

const serverId = 'c0sxzwsh';
const serverDomain = 'c0sxzwsh.mailosaur.net';
const emailAddress = `testUser@${serverDomain}`;

describe('student forgot password', () => {
  let studentUser;
  before(function() {
    cy.fixture('student').then(function(student) {
      cy.deleteUser(emailAddress);
      student.email = emailAddress;
      cy.addUser(student);
      studentUser = student;
    });
  });
  beforeEach(() => {
    cy.visit('forgot_password');
  });

  it('with valid input values', () => {
    cy.forgotPassword(emailAddress);
    cy.get('.Toastify__toast-body').then(() => {
      cy.wait(5000);
      cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress,
      }).then(email => {
        cy.visit(email.html.links[0].href);
      });
      cy.resetPassword('Test@12345', 'Test@12345');
    });
  });

  afterEach(() => {
    cy.deleteUser(emailAddress);
  });
});
