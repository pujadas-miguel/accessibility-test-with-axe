import { severityIndicators } from '../support/constants';

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
            Cypress.log({
                name: '🔧 ',
                consoleProps: () => violation,
                $el: Cypress.$(target.join(',')),
                message: target
            });
        });
    });
};
