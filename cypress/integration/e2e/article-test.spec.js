/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable spaced-comment */

/// <reference types="cypress" />

describe('add article', () => {
  let educatorUser;
  before(function() {
    cy.fixture('educator').then(function(educator) {
      cy.deleteUser(educator.email);
      cy.addUser(educator);
      cy.verifyEmail(educator.email);
      educatorUser = educator;
    });
  });

  beforeEach(() => {
    cy.visit('login');
    cy.login(educatorUser.email, educatorUser.password);
  });

  it('with valid input values', () => {
    const event = {
      title: 'Cyber Security',
      description:
        'The crypto currency is currently in use and have some serious security concerns due to its usage.',
      articleImage: 'images/article.jpg',
      subTitle: 'Information Technology Security',
    };
    cy.addEvent(event);
  });

  after(() => {
    cy.wait(2000);
    cy.deleteUser(educatorUser.email);
  });
});
