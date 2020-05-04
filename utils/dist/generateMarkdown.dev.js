"use strict";

function generateMarkdown(data) {
  return "\n# ".concat(data.title, "\n\n");
}

module.exports = generateMarkdown;