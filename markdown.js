// Create README.md template
function markdownTemplate(response) {
    return `# ${response.title}

## Description
${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Installation Instructions
${response.instructions}

## Usage
${response.usage}

## Contribution Guidelines
${response.contribution}

## Tests
${response.tests}

## License
${response.license}

## Contact
GitHub: [${response.username}](https://github.com/${response.username})
Email: ${response.email}`;
};

module.exports = markdownTemplate;