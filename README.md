# Playwright Enterprise Automation Framework

A reusable Playwright + TypeScript automation framework demonstrating enterprise software testing practices. This project showcases UI automation, email validation using Mailosaur, financial business rule validation, and CI/CD integration using GitHub Actions.

---

## Features

- Playwright with TypeScript
- Mailosaur email integration
- Financial business rule validation
- Reusable helper classes
- Environment variable management
- HTML test reports
- GitHub Actions CI/CD
- Modular project structure

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Mailosaur
- GitHub Actions

---

## Project Structure

```text
playwright-enterprise-automation-framework
│
├── tests
│   ├── email
│   ├── financial
│   ├── api
│   └── smoke
│
├── helpers
├── pages
├── fixtures
├── .github
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## Current Test Coverage

### Email Automation

- Generate unique Mailosaur email addresses
- Mailosaur integration
- Email workflow foundation

### Financial Validation

- Checking account balance validation
- Credit card balance validation
- Payment processing fee calculations

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
- End-to-end account verification workflow
- Password reset automation
- OTP email automation
- Public demo application integration
- API validation
- Docker support
---

## Author

**Oluwadamilola Alatishe**

Automation Test Engineer | Playwright | TypeScript | QA Automation | CI/CD | Business Analysis