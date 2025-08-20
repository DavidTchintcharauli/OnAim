export const AGGREGATION_SELECTORS = {
  titles: {
    main: 'h4:has-text("Create coin-in aggregation")',
    resetOption: 'h6:has-text("Enter reset option")',
    evaluationRule: 'h6:has-text("Point Evalution Rule")',
    configStart: 'h6:has-text("Select event type and start configuration")',
  },

  inputs: {
    name: 'input[name="name"]',
    description: 'input[name="description"]',
    cron: 'input[placeholder="* * * * *"]',
    nextAt: 'input#\\:r1r9\\:',
    cronExplanation: 'textarea#\\:r1ra\\:',
    pointLimit: 'input[name="pointLimit"]',
    for: 'input[name="singleRuleFor"]',
    give: 'input[name="singleRuleGive"]',
    step: 'input[name="pointEvaluationRules.0.step"]',
    points: 'input[name="pointEvaluationRules.0.points"]',
  },

  radios: {
    single: 'input[type="radio"][name="evaluationType"][value="single"]',
    incremental: 'input[type="radio"][name="evaluationType"][value="steps"]',
  },

  selects: {
    eventSource: '[role="combobox"][aria-controls="\\:r1rb\\:"]',
    eventType: '[role="combobox"][aria-controls="\\:r1rc\\:"]',
    conditionAndOr: '[role="combobox"][aria-controls="\\:r1rd\\:"]',
    aggregationType: '[role="combobox"][aria-controls="\\:r1re\\:"]',
    selectionField: '[role="combobox"][id="mui-component-select-selectionField"]',
  },

  buttons: {
    discard: 'button:has-text("Discard")',
    save: 'button:has-text("Save")',
    filter: 'button:has-text("Filter")',
    group: 'button:has-text("Group")',
    addRule: 'button:has-text("Add new Rule")',
  },

  text: {
    noFilters: 'p:has-text("No Filters")',
  },
};
