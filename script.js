// PDF Dropdown Handler Module
(() => {
  /**
   * Opens the PDF URL in a new tab when user selects from dropdown
   * @param {HTMLSelectElement} selectElem - The select dropdown element
   */
  function handlePdfSelection(selectElem) {
    selectElem.addEventListener('change', () => {
      const selectedUrl = selectElem.value;
      if (selectedUrl) {
        // Open PDF in new tab
        window.open(selectedUrl, '_self');

        // Reset the dropdown to default option (index 0)
        selectElem.selectedIndex = 0;
      }
    });
  }

  /**
   * Initialize all dropdowns by their IDs
   * @param {string[]} dropdownIds - Array of dropdown element IDs
   */
  function initPdfDropdowns(dropdownIds) {
    dropdownIds.forEach(id => {
      const dropdown = document.getElementById(id);
      if (dropdown) {
        handlePdfSelection(dropdown);
      } else {
        console.warn(`Dropdown with ID '${id}' not found.`);
      }
    });
  }

  // List of all dropdown IDs in the page
  const dropdownIds = [
    'physicsMenu',
    'mathsMenu',
    'englishMenu',
    'electronicsMenu',
    'webdevMenu',
    'pyMenu',
    'englishPaperMenu',
    'mathsPaperMenu',
    'feMenu'
  ];

  // Initialize dropdown handlers on DOMContentLoaded to ensure elements are loaded
  document.addEventListener('DOMContentLoaded', () => {
    initPdfDropdowns(dropdownIds);
  });
})();
