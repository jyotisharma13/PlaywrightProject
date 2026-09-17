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
│   ├── 01_Basics/
│   │   ├── 216_example.spec.js      # Sample Playwright tests (playwright.dev)
│   │   ├── 217_multiple_context.js  # Multiple browser contexts (admin + viewer)
│   │   ├── 218_normal_pw.js         # Single-user script (launch, navigate, read title)
│   │   ├── 219_tta-check.spec.js    # Login flow test for thetestingacademy.com
│   │   ├── 220_BCP.spec.js          # Browser context and page test
│   │   └── 221_TA.spec.js           # TTA navigation and multi-context (three roles) test
│   └── 02_TestAnnotations/ ... 23_Advance_PW_Framework/   # Topic folders for upcoming tests
├── playwright.config.js      # Playwright configuration
├── package.json              # Scripts and dependencies
└── README.md
```

Only files matching the `*.spec.js` naming pattern are picked up and executed by the Playwright test runner. Plain `.js` files in the folder are standalone scripts and are not run by `npm test`.

## Configuration

Key settings in `playwright.config.js`:

- `testDir: './tests'` — location of test files
- `fullyParallel: true` — tests run in parallel
- `reporter: 'html'` — HTML report output
- `headless: false` — browsers run in headed mode locally
- Projects: `chromium`, `firefox`, `webkit`

## License

ISC
