import 'cypress-axe';
const callback = require('../support/module');
const constants = require('../support/constants');

beforeEach(() => {
    cy.visit('https://en.wikipedia.org/');
    cy.injectAxe();
});

describe('Test Wikipedia accesibility', () => {
    it('test wikipedia accesibility', () => {
        cy.checkA11y(null, null, callback, true);
        cy.search(constants.searchValue);
        cy.moveToLastLink();
        cy.expandExternalLinks();
    });
});
