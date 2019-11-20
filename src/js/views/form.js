/**
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTamplate(msg) {
  return `
        <div class="invalid-feedback">${msg}</div>
    `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
