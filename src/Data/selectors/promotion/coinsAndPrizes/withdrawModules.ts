export const WITHDRAWAL_SELECTORS = {
  titles: {
    section: 'h6:has-text("Withdrawal")',
    resetOption: 'h6:has-text("Enter reset option")',
  },

  checkboxes: {
    saveAsTemplate: 'label:has-text("Save as template") input[type="checkbox"]',
  },

  inputs: {
    coinName: 'input[name="title"]',
    description: 'textarea[name="description"]',
    value: 'input[id="\\:r1s6\\:"]',
    cronExpression: 'input[placeholder="* * * * *"]',
    nextAt: 'input[id="\\:r1s9\\:"]',
    cronExplanation: 'textarea[id="\\:r1sa\\:"]',
  },

  buttons: {
    deleteCard: 'button.MuiIconButton-colorError',
    collapseCard: 'button:has(svg[data-testid="KeyboardArrowUpIcon"])',
    addFilters: 'button:has-text("Add filters")',
    addOptions: 'button:has-text("Add options")',
    chooseFromTemplate: 'button:has-text("Choose from template")',
    addNewConfiguration: 'button:has-text("Add new configuration")',
  },

  fileUpload: {
    single: 'div:has-text("Upload file") >> input[type="file"]',
    multiple: 'div[role="presentation"] >> input[type="file"][multiple]',
  },

  labels: {
    coinName: 'label:has-text("Coin Name")',
    description: 'label:has-text("Description")',
    value: 'label:has-text("Value")',
    nextAt: 'label:has-text("Next at")',
    cronExplanation: 'label:has-text("Cron explanation")',
  },

  warnings: {
    noWithdrawalOptions: 'h6:has-text("Add at least one Withdrawal Option")',
    configureAggregation: 'h6:has-text("Configure Aggregation settings using Templates or manual setup")',
  },
};
