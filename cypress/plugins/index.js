/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable spaced-comment */

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = on => {
  on('task', {
    dbQuery: query =>
      require('cypress-postgres')(query.query, query.connection),
  });
};
