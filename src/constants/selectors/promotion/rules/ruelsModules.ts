export const RULES_SELECTORS = {
    buttons: {
        addNewRule: 'button:has(svg[data-testid="AddIcon"]):has-text("New Rule")',
    },
    container: {
        root: '[role="button"][aria-roledescription="sortable"]',
        content: '.MuiCardContent-root',
    },

    collapse: {
        toggle: 'button:has(svg)',
        wrapper: '.MuiCollapse-wrapper',
    },

    fields: {
        titleInput: 'input#\\:r1ss\\:',
        descriptionTextarea: 'textarea#\\:r1su\\:',
    },

    adornments: {
        titleIcon: 'input#\\:r1ss\\: + div svg',
        descriptionIcon: 'textarea#\\:r1su\\: + div svg',
    },

    labels: {
        title: 'label[for="\\:r1ss\\:"]',
        description: 'label[for="\\:r1su\\:"]',
    },

    delete: {
        button: 'button:has-text("Delete rule")',
        icon: 'button:has-text("Delete rule") svg',
    },

    reorder: {
        handle: 'button[aria-roledescription="sortable"] .MuiIconButton-root',
    },
};
