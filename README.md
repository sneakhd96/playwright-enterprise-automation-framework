# Playwright Enterprise Automation Framework

A reusable Playwright + TypeScript automation framework demonstrating enterprise software testing practices across UI, API, email, financial, database, and ETL validation. The framework uses the Page Object Model for UI automation, reusable helper utilities, and a service-layer architecture for database testing. It also includes GitHub Actions CI/CD and Playwright HTML reporting.

---

## Features

- UI automation using the Page Object Model
- REST API testing
- Email automation using Mailosaur
- Financial business-rule validation
- MySQL database integration
- ETL and data warehouse validation
- Environment-based configuration using `.env`
- Playwright HTML reporting
- Cross-browser execution
- GitHub Actions CI/CD

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- MySQL
- Apache Hop
- Mailosaur
- GitHub Actions

---

## Project Structure

playwright-enterprise-automation-framework/
│
├── .github/
│   └── workflows/
│
├── fixtures/
│
├── helpers/
│   ├── databaseHelper.ts
│   ├── financialHelper.ts
│   ├── mailosaurHelper.ts
│   └── testData.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── SecureAreaPage.ts
│   └── SignUpPage.ts
│
├── services/
│   └── etlDatabaseService.ts
│
├── tests/
│   ├── api/
│   ├── email/
│   ├── etl/
│   │   ├── database-connection.spec.ts
│   │   └── warehouse-validation.spec.ts
│   ├── financial/
│   └── smoke/
│
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md

---

### Current Test Coverage

### UI Automation

The UI suite uses Playwright and the Page Object Model to validate end-to-end user workflows in the browser.

Current coverage includes:

- Successful login with valid credentials
- Secure-area page verification after authentication
- Logout workflow validation
- Invalid username error-message validation
- Invalid password error-message validation
- Reusable page objects for login and authenticated-page interactions
- Cross-browser execution in Chromium and Firefox

### API Testing

The API suite uses Playwright's API request capabilities to validate REST endpoints without opening a browser.

Current coverage includes:

- HTTP status-code validation
- Response-body validation
- Verification of expected API fields and values
- Positive request scenario testing
- Negative or invalid request validation
- Fast backend testing independent of the UI

### Manual Test Coverage

The manual testing section documents business scenarios using Gherkin-style test cases.

Current coverage includes:

- Positive and negative login scenarios
- Preconditions, test steps, expected results, and acceptance criteria
- Business-readable Given, When, Then formatting
- Test scenarios that can support future Cucumber automation
- Coverage of workflows that may not yet be automated
- Traceable documentation for regression and exploratory testing

### Email Automation

- Generate unique Mailosaur email addresses
- Mailosaur integration
- Email workflow foundation

### Financial Validation

- Checking account balance validation
- Credit card balance validation
- Payment processing fee calculations

### ETL & Database Validation

- MySQL database connectivity validation
- Automated staging and data warehouse verification
- Customer dimension validation
- Product dimension validation
- Fact table validation
- Duplicate record detection
- Service-layer architecture for reusable SQL operations
- Environment-based database configuration using `.env`
- Apache Hop ETL pipeline validation


---

## Running the Framework

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Run all tests

```bash
npx playwright test
```

Run Chromium only

```bash
npx playwright test --project=chromium
```

---

## CI/CD

GitHub Actions automatically:

- Installs dependencies
- Installs Playwright browsers
- Executes the Playwright test suite
- Generates test reports

---

## Roadmap

### Version 1.0 (Complete)
- Playwright + TypeScript framework
- Mailosaur integration
- Dynamic email generation
- Financial business rule validation
- GitHub Actions CI/CD
- HTML reporting

### Version 2.0 
- Executable Gherkin (Cucumber) Integration
- Password Reset Workflow
- OTP Authentication Workflow ( in progress )
- Multi-Environment Configuration ( in progress )
- Docker Support ( in progress )
- Parallel Test Optimization ( in progress )
- Advanced Reporting ( in progress )
---

## Author

**Oluwadamilola Alatishe**

Automation Test Engineer | Playwright | TypeScript | QA Automation | CI/CD | Business Analysis