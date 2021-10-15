/* eslint-disable */
/// <reference types="cypress" />
import 'cypress-file-upload';

// -- api --
Cypress.Commands.add('addUser', body => {
  cy.request({
    method: 'POST',
    url: 'http://61.85.154.156:3016/api/auth/register',
    headers: {
      'content-type': 'application/json',
    },
    body,
  });
  cy.task('dbQuery', {
    query: `UPDATE users SET \"emailConfirmed\"=true where email='${body.email}'`,
  });
});

// -- db --
Cypress.Commands.add('deleteUser', email => {
  cy.task('dbQuery', {
    query: `DELETE from users_roles WHERE \"usersId"\ = (SELECT  id FROM users WHERE email='${email}');`,
  });
  cy.task('dbQuery', {
    query: `DELETE from articles WHERE \"authorId"\ = (SELECT id FROM users WHERE email='${email}');`,
  });
  cy.task('dbQuery', {
    query: `DELETE from events WHERE \"creatorId"\ = (SELECT id FROM users WHERE email='${email}');`,
  });
  cy.task('dbQuery', {
    query: `DELETE from users  WHERE email='${email}';`,
  });
});

// -- ui --
Cypress.Commands.add(
  'registerStudent',
  (emailAddress, firstName, lastName, password, confirmPassword) => {
    cy.get('#email').type(emailAddress);
    cy.get(':nth-child(1) > .form-group > #name').type(firstName);
    cy.get(':nth-child(2) > .form-group > #name').type(lastName);
    cy.get('#createpassword').type(password);
    cy.get('#confirmpassword').type(confirmPassword);
    cy.get('.btn').click({ force: true });
  },
);

Cypress.Commands.add(
  'registerInstructor',
  (emailAddress, firstName, lastName, password, confirmPassword, address) => {
    cy.get('#email').type(emailAddress);
    cy.get(':nth-child(1) > .form-group > #name').type(firstName);
    cy.get(':nth-child(2) > .form-group > #name').type(lastName);
    cy.get('.MuiSelect-root').click({ force: true });
    cy.get('.MuiList-root > [tabindex="-1"]').click({ force: true });
    cy.get('#createpassword').type(password);
    cy.get('#confirmpassword').type(confirmPassword);
    cy.get('#address').type(address);
    cy.get('.btn').click({ force: true });
  },
);

Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('.btn').click({ force: true });
});

Cypress.Commands.add('forgotPassword', (email) => {
  cy.get('#email').type(email);
  cy.get('#submitButton > span').click({ force: true });
});

Cypress.Commands.add('resetPassword', (newPassword, confirmPassword) => {
  cy.get(':nth-child(1) > #password').type(newPassword);
  cy.get(':nth-child(2) > #password').type(confirmPassword);
  cy.get('.btn').click({ force: true });
});

Cypress.Commands.add('addWebinar', webinar => {
  cy.get(':nth-child(3) > .dropdown > .dropdown-toggle').click({ force: true });
  cy.get(':nth-child(2) > .dropdown_link').click({ force: true });
  cy.get('#maintitle').type(webinar.data.mainTitle);
  cy.get('#subtitle').type(webinar.data.subTitle);
  cy.get('#uploadimage').attachFile(webinar.eventImage);
  cy.get("input[name='startDate']").type(webinar.data.startDate);
  cy.get("input[name='endDate']").type(webinar.data.endDate);
  cy.get('#starttime').type(webinar.data.startTime);
  cy.get('#endtime').type(webinar.data.endTime);
  cy.get('#addpresenter').type(webinar.data.presentor);
  cy.get('#price').type(webinar.data.price);
  cy.get('#redirectionUrl').type(webinar.data.redirectionUrl);
  cy.get('.jodit-wysiwyg').type(webinar.data.description);
  cy.get('.btn_submit').click({ force: true });
});

Cypress.Commands.add('addBootcamp', bootcamp => {
  cy.get(':nth-child(3) > .dropdown > .dropdown-toggle').click({ force: true });
  cy.get(':nth-child(3) > .dropdown_link').click({ force: true });
  cy.get('#maintitle').type(bootcamp.data.mainTitle);
  cy.get('#subtitle').type(bootcamp.data.subTitle);
  cy.get('#uploadimage').attachFile(bootcamp.eventImage);
  cy.get("input[name='startDate']").type(bootcamp.data.startDate);
  cy.get("input[name='endDate']").type(bootcamp.data.endDate);
  cy.get('#starttime').type(bootcamp.data.startTime);
  cy.get('#endtime').type(bootcamp.data.endTime);
  cy.get('#price').type(bootcamp.data.price);
  cy.get('#redirectionUrl').type(bootcamp.data.redirectionUrl);
  cy.get('.jodit-wysiwyg').type(bootcamp.data.description);
  cy.get('.btn_submit').click({ force: true });
});

Cypress.Commands.add('addHackathon', hackathon => {
  cy.get(':nth-child(3) > .dropdown > .dropdown-toggle').click({ force: true });
  cy.get(':nth-child(4) > .dropdown_link').click({ force: true });
  cy.get('#maintitle').type(hackathon.data.mainTitle);
  cy.get('#subtitle').type(hackathon.data.subTitle);
  cy.get('#uploadimage').attachFile(hackathon.eventImage);
  cy.get("input[name='startDate']").type(hackathon.data.startDate);
  cy.get("input[name='endDate']").type(hackathon.data.endDate);
  cy.get('#starttime').type(hackathon.data.startTime);
  cy.get('#endtime').type(hackathon.data.endTime);
  cy.get('#price').type(hackathon.data.price);
  cy.get('#redirectionUrl').type(hackathon.data.redirectionUrl);
  cy.get('.jodit-wysiwyg').type(hackathon.data.description);
  cy.get('.btn_submit').click({ force: true });
});

Cypress.Commands.add('addEvent', event => {
  cy.get(':nth-child(3) > .dropdown > .dropdown-toggle').click({ force: true });
  cy.get(':nth-child(5) > .dropdown_link').click({ force: true });
  cy.get('#maintitle').type(event.title);
  cy.get('#subtitle').type(event.description);
  cy.get('#uploadimage').attachFile(event.articleImage);
  cy.get('.jodit-wysiwyg').type(event.subTitle);
  cy.get('.btn_submit').click({ force: true });
});

// -- accessibility --
const severityIndicator = {
  minor: '⚪',
  moderate: '🟡',
  serious: '🟠',
  critical: '🔴',
};

function callback(violations) {
  violations.forEach(violation => {
    const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','));
    Cypress.log({
      name: `${severityIndicator[violation.impact]} A11y`,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`,
    });
  });
}

Cypress.Commands.add('checkPageA11y', () => {
  cy.injectAxe();
  cy.checkA11y(null, null, callback);
});
