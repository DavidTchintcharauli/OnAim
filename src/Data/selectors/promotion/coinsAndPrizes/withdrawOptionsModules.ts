export const WITHDRAW_OPTIONS_SELECTORS = {
  modal: {
    container: '[role="dialog"][aria-labelledby="withdraw-options-modal"]',
    title: 'h2#withdraw-options-modal',
    closeButton: 'button[aria-label="close"]',
  },

  select: {
    withdrawOptionsCombobox: '[role="combobox"][aria-controls="\\:r1sd\\:"]',
    withdrawOptionsLabel: 'label:has-text("Withdraw Options")',
  },

  buttons: {
    cancel: 'button:has-text("Cancel")',
    save: 'button:has-text("Save")',
  },

  dropdown: {
    container: '[role="listbox"][aria-multiselectable="true"]',

    listItems: {
      all: '[role="option"]',
      byValue: (value: string | number) => `[role="option"][data-value="${value}"]`,
      byLabel: (label: string) => `li:has-text("${label}")`,
    },

    checkboxes: {
      withinOption: (value: string | number) =>
        `[role="option"][data-value="${value}"] input[type="checkbox"]`,
    },

    images: {
      avatarByAlt: (altText: string) => `li img[alt="${altText}"]`,
    },

    text: {
      primaryLabel: (value: string | number) =>
        `[role="option"][data-value="${value}"] .MuiListItemText-root span`,
    },
  },
};
