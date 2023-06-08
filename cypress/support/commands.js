import addContext from 'mochawesome/addContext';

/* WIKIPEDIA */

Cypress.Commands.add('search', (search) => {
    cy.get('#searchform').type(search);
    cy.get('.cdx-button').click();
});

Cypress.Commands.add('moveToLastLink', () => {
    cy.get('.vector-toc-text').last().click();
});

Cypress.Commands.add('expandExternalLinks', () => {
    cy.get('.mw-collapsible-text').first().click();
});

/* TALENT */

Cypress.Commands.add('acceptCookies', () => {
    cy.get('.butonKO').click();
});

Cypress.Commands.add('findCourse', (course) => {
    cy.get('#par_clau').type(course);
    cy.get('.veure_tots').click();
});

Cypress.Commands.add('goCourse', () => {
    cy.get('.destacat').first().click();
});

Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context));
});
