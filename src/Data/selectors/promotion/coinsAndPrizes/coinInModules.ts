export const COININ_SELECTORS = {
    inputs: {
        coinName: 'input[name="title"]',
        description: 'textarea[name="description"]',
        cronExpression: 'input[placeholder="* * * * *"]',
        nextAt: 'input#\\:r1r3\\:',
        cronExplanation: 'textarea#\\:r1r4\\:',
    },
    
    checkboxes: {
        saveAsTemplate: 'label:has-text("Save as template") input[type="checkbox"]',
    },

    buttons: {
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
        nextAt: 'label:has-text("Next at")',
        cronExplanation: 'label:has-text("Cron explanation")',
    },

    sections: {
        enterResetOptionTitle: 'h6:has-text("Enter reset option")',
        aggregationHeader: 'h6:has-text("Configure Aggregation settings using Templates or manual setup")',
    },
};
