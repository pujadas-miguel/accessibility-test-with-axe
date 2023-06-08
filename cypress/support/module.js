import { severityIndicators } from '../support/constants';

const object = {};
const severity = [];

module.exports = (violations) => {
    violations.forEach((violation) => {
        const nodes = Cypress.$(violation.nodes.map((node) => node.target).join(','));
        Cypress.log({
            name: `${severityIndicators[violation.impact]} A11Y`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}]($violation.helpUrl})`
        });
        violation.nodes.forEach(({ target }) => {
            severity.push({
                severity: severityIndicators[violation.impact],
                component: Object.values(target)[0],
                description: violation.description,
                help: violation.helpUrl
            });
            Cypress.log({
                name: '🔧 ',
                consoleProps: () => violation,
                $el: Cypress.$(target.join(',')),
                message: target
            });
        });
    });
    object.name = severity;
    cy.writeFile(Cypress.currentTest.title + '.json', object);
};
