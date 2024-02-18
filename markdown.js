// Choose a license URL according to chosen license
const licenseURLs = {
        'Apache': 'https://opensource.org/licenses/Apache-2.0',
        'BSD Revised': 'https://opensource.org/licenses/BSD-3-Clause',
        'BSD Simplified': 'https://opensource.org/licenses/BSD-2-Clause',
        'Boost': 'https://opensource.org/licenses/BSL-1.0',
        'Creative': 'https://creativecommons.org/publicdomain/zero/1.0/',
        'Eclipse': 'https://opensource.org/licenses/EPL-1.0',
        'GNU': 'https://opensource.org/licenses/GPL-3.0',
        'GNU Affero': 'https://opensource.org/licenses/AGPL-3.0',
        'GNU Lesser': 'https://opensource.org/licenses/LGPL-3.0',
        'MIT': 'https://opensource.org/licenses/MIT',
        'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
        'No License': '',
        'Unlicense': 'http://unlicense.org/',
};

// Choose a license badge according to chosen license
function licenseBadgeLinks(license) {
    const badgeURLs = {
        'Apache': 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
        'BSD Revised': 'https://img.shields.io/badge/license-BSD%203--Clause-blue.svg',
        'BSD Simplified': 'https://img.shields.io/badge/license-BSD%202--Clause-blue.svg',
        'Boost': 'https://img.shields.io/badge/license-Boost%201.0-blue.svg',
        'Creative': 'https://img.shields.io/badge/license-CC0%201.0-blue.svg',
        'Eclipse': 'https://img.shields.io/badge/license-EPL%201.0-blue.svg',
        'GNU': 'https://img.shields.io/badge/license-GPL%203.0-blue.svg',
        'GNU Affero': 'https://img.shields.io/badge/license-AGPL%203.0-blue.svg',
        'GNU Lesser': 'https://img.shields.io/badge/license-LGPL%203.0-blue.svg',
        'MIT': 'https://img.shields.io/badge/license-MIT-blue.svg',
        'Mozilla': 'https://img.shields.io/badge/license-MPL%202.0-blue.svg',
        'No License': 'https://img.shields.io/badge/license-none-lightgrey.svg',
        'Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    };

    return badgeURLs[license] || '';
};

// Create README.md template
function markdownTemplate(response) {
const licenseBadge = licenseBadgeLinks(response.license);
const licenseURL = licenseURLs[response.license] || '';

    return `# ${response.title}

![License](${licenseBadge})

## Description
${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation Instructions
${response.instructions}

## Usage
${response.usage}

## Contribution Guidelines
${response.contribution}

## Tests
${response.tests}

## License
![License](${licenseBadge})

For more information regarding the ${response.license} license, please visit this link: ${licenseURL}

## Questions
Please feel free to contact me via my GitHub or Email address below for any questions associated with this application:  
GitHub: [${response.username}](https://github.com/${response.username})  
Email: ${response.email}`;
};

// Export template
module.exports = markdownTemplate;