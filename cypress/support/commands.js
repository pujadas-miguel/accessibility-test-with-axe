Cypress.Commands.add('search', (search) => {
    cy.log('Search: ' + search);
    cy.get('#searchform').type(search);
    cy.get('.cdx-button').click();
});

Cypress.Commands.add('moveToLastLink', () => {
    cy.get('.vector-toc-text').last().click();
});

Cypress.Commands.add('expandExternalLinks', () => {
    cy.get('.mw-collapsible-text').first().click();
});
