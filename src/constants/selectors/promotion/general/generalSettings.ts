export const GENERAL_SELECTORS = {
  checkboxes: {
    saveAsTemplate: 'input[name="saveAsTemplate"]',
    requireOptIn: 'input[name="hasOptIn"]',
  },

  inputs: {
    title: 'input[name="name"]',
    description: 'textarea[name="description"]',
    startDate: 'input#\\:rlg\\:',
    endDate: 'input#\\:rli\\:',
    welcomeCoinIns: 'input[name="rewardAmount"]',
  },

  segments: {
    selectAll: 'label:has-text("Select All") input[type="checkbox"]',
    searchInput: 'input[placeholder="Search segment"]',
    listItemTest: 'li:has-text("test") input[type="checkbox"]',
    listItemDefault: 'li:has-text("default") input[type="checkbox"]',
    removeSegmentFilterButton: 'button:has(svg):below(input[placeholder="Search segment"])',
  }
};
