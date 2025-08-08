export const ASSET_MODAL_SELECTORS = {
  modal: {
    container: '[role="dialog"][aria-labelledby="select-template"]',
    title: 'h2#select-template',
  },

  upload: {
    inputHidden: 'input[type="file"][multiple]',
    icon: '.iconify[role="img"]',
    label: 'p:has-text("Upload file")',
  },

  sections: {
    assetDetailsHeader: 'h6:has-text("Asset details")',
    costHeader: 'h6:has-text("Cost")',
  },

  fields: {
    titleInput: 'input[name="title"]',
    descriptionInput: 'input[name="description"]',
    priceInput: 'input[name="price"]',
  },

  labels: {
    title: 'label[for="\\:r1sl\\:"]',
    description: 'label[for="\\:r1sm\\:"]',
    price: 'label[for="\\:r1sr\\:"]',
  },

  priceControls: {
    incrementButton: 'button[aria-label="increment"]',
    decrementButton: 'button[aria-label="decrement"]',
  },

  templateCheckbox: {
    root: 'label:has-text("Save as template")',
    input: 'input[name="saveAsTemplate"][type="checkbox"]',
  },

  buttons: {
    cancel: 'button:has-text("Cancel")',
    submit: 'button:has-text("Add Asset")',
  },
};
