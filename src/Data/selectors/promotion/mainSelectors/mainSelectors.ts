export const MAIN_SELECTORS = {
    main: {
        newPromotionButton: 'button:has-text("New promotion")',
        emptyFormCardButton: 'div:has(h6:has-text("Start with an empty form"))',
        discardButton: 'button:has-text("Discard")',
        createPromotionButton: 'button:has-text("Create promotion")',
        backButton: 'button:has(svg) >> nth=0',
        pageTitle: 'h4:has-text("Create a new Promotion")',
        breadcrumbs: 'nav[aria-label="breadcrumb"]',
        saveButton: 'button:has-text("Save")',
    },
}