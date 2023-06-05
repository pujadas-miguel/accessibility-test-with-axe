import 'cypress-axe';
const callback = require('../support/module');
const constants = require('../support/constants');

describe('Test Wikipedia accesibility', () => {
    it('test wikipedia accesibility', () => {
        cy.checkA11y(null, null, callback, false);
        cy.search(constants.searchValue);
        cy.moveToLastLink();
        cy.expandExternalLinks();
    });
});
