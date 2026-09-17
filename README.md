# PlaywrightProject

Advanced Playwright project.

Playwright test automation project written in JavaScript. It contains end-to-end browser tests using the [Playwright Test](https://playwright.dev/docs/intro) runner.

## Requirements

- [Node.js](https://nodejs.org/) 18+ (developed with Node.js 24)
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npm run test:install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Open the last HTML report
npm run test:report
```

By default tests run across Chromium, Firefox, and WebKit as configured in `playwright.config.js`.

## Project Structure

```
.
├── tests/
│   └── 01_Basics/
│       ├── example.spec.js       # Sample Playwright tests (playwright.dev)
│       └── tta-check.spec.js     # Login flow test for thetestingacademy.com
├── playwright.config.js      # Playwright configuration
├── package.json              # Scripts and dependencies
└── README.md
```

## Configuration

Key settings in `playwright.config.js`:

- `testDir: './tests'` — location of test files
- `fullyParallel: true` — tests run in parallel
- `reporter: 'html'` — HTML report output
- `headless: false` — browsers run in headed mode locally
- Projects: `chromium`, `firefox`, `webkit`

## License

ISC
