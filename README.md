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
│   │   ├── 221_TA.spec.js           # TTA navigation and multi-context (three roles) test
│   │   └── 222_Test_Options.spec.js # Context options and mobile browser emulation test
│   ├── 02_TestAnnotations/
│   │   ├── 223_TestAnnotations.spec.js # Test annotations (skip, only, fail, fixme, slow)
│   │   └── 224_TestDescribe.spec.js # Grouping tests with test.describe
│   ├── 03_Locator_Commands/
│   │   ├── 15sept_Home_work.spec.js  # CURA login failure test (XPath/CSS locators)
│   │   ├── 17Sept_home_work.spec.js  # TTA multiple-element-filter login with Remember me
│   │   ├── 225_LC.spec.js            # Page navigation with waitUntil options and referrer
│   │   ├── 226_Refere.spec.js        # Context-level referer via extraHTTPHeaders
│   │   ├── 227_Fresh.spec.js         # CSS locators on VWO login (fill, click, error text)
│   │   ├── 228_Project3.spec.js      # VWO free-trial form validation with XPath locators
│   │   ├── 229_getByRole.spec.js     # VWO login role-based locators and error message
│   │   └── 230_getByRole.spec.js     # CURA login getByRole link click and heading assertion
│   ├── 04_Session_Storage/
│   │   ├── 231_SessionStorage.js     # Standalone script saving VWO login storage state
│   │   └── 232_TestWingify.spec.js   # Reuses saved storageState to open VWO dashboard
│   ├── 05_Allure_reporting/
│   │   ├── 233_testWingifyCustomReporter.spec.js # Wingify dashboard test via storageState
│   │   └── 234_customReporter.spec.js # Custom Playwright reporter test (placeholder)
│   ├── 06_Multiple_Element_Filter/
│   │   ├── 235_Me.spec.js             # TTA filter: collect link texts, click Forgotten Password
│   │   └── 236_Me.spec.js             # TTA filter: collect links and their href attributes
│   └── ... 23_Advance_PW_Framework/   # Topic folders for upcoming tests
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
