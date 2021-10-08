// / <reference types="cypress" />

describe('add hackathon', () => {
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
    const hackathon = {
      type: 'Hackathon',
      eventImage: 'images/hackathon.png',
      data: {
        mainTitle: 'Block Chain Security',
        subTitle: 'Blockchain',
        startTime: '00:00',
        endTime: '00:00',
        startDate: '2030-05-05',
        endDate: '2050-05-05',
        description:
          'The crypto currency is currently in use and have some serious security concerns due to its usage.',
        price: '100',
        redirectionUrl: 'https://google.com/',
      },
    };
    cy.addHackathon(hackathon);
  });

  after(() => {
    cy.wait(2000);
    cy.deleteUser(educatorUser.email);
  });
});
