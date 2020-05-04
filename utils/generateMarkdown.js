function generateMarkdown(data) {
  return `
# ${data.title}

`;
}
function generateMarkdown(data) {
  return `
## ${data.description}

`;
}
function generateMarkdown(data) {
  return `
## ${data.usage}

`;
}
function generateMarkdown(data) {
  return `
## ${data.license}

`;
}
function generateMarkdown(data) {
  return `
## ${data.contributing}

`;
}
function generateMarkdown(data) {
  return `
## ${data.test}

`;
}
function generateMarkdown(data) {
  return `
## ${data.questions}

`;
}

module.exports = generateMarkdown;
