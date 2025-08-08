export const PROMOCOINS_SELECTORS = {
  modal: {
    container: '[role="dialog"][aria-labelledby="select-template"]',
    title: 'h2#select-template',
  },

  upload: {
    inputHidden: 'input[type="file"][multiple]',
    icon: '.iconify[role="img"]',
    label: 'p:has-text("Upload file")',
  },

  fields: {
    titleInput: 'input[name="title"]',
    descriptionInput: 'input[name="description"]',
    cronInput: 'input#\\:r1si\\:',
    nextAtInput: 'input#\\:r1sj\\:[readonly]',
    cronExplanationTextarea: 'textarea#\\:r1sk\\:',
  },

  labels: {
    title: 'label[for="\\:r1sf\\:"]',
    description: 'label[for="\\:r1sg\\:"]',
    cron: 'h6:has-text("Enter reset option")',
    nextAt: 'label[for="\\:r1sj\\:"]',
    cronExplanation: 'label[for="\\:r1sk\\:"]',
  },

  templateCheckbox: {
    root: 'label:has-text("Save as template")',
    input: 'input[name="saveAsTemplate"][type="checkbox"]',
  },

  buttons: {
    cancel: 'button:has-text("Cancel")',
    submit: 'button:has-text("Add Promo Coin")',
  },
};
