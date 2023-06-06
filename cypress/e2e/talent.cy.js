import 'cypress-axe';
const callback = require('../support/module');
const constants = require('../support/constants');

beforeEach(() => {
    cy.visit('https://www.talent.upc.edu/');
    cy.injectAxe();
});

describe('Test UPC Talent accesibility', () => {
    it('test UPC Talent accesibility', () => {
        cy.checkA11y(null, null, callback, true);
        cy.acceptCookies();
        cy.findCourse(constants.courseValue);
        cy.goCourse();
    });
});
