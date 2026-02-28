# Playwright Hybrid Automation Project (UI + API)

## 📌 Overview

This project demonstrates a real-world **Hybrid Test Automation approach** using Playwright.

The test flow combines:

- ✅ API testing (user registration via backend)
- ✅ UI testing (login through frontend)
- ✅ End-to-End validation
- ✅ Dynamic test data generation
- ✅ Cross-browser execution
- ✅ CI pipeline with GitHub Actions

This project reflects real QA Automation practices used in industry.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)
- RealWorld Demo App (Frontend + API)

---

## 🧪 Hybrid Test Scenario

**Flow:**

1. Create a new user via API
2. Open UI login page
3. Login with the same user
4. Validate successful login via UI

This demonstrates:

- API + UI integration
- Backend-frontend consistency validation
- Dynamic data handling
- Reliable automation design

---

## 📂 Project Structure

tests/
api/
hybrid/

src/
utils/
.github/
workflows/

---

## ▶️ Run Locally

### Install dependencies:
```bash
npm install
```

### Install Playwright browsers:
```bash
npx playwright install
```

### Run all tests:
```bash
npx playwright test
```

### Run specific test:
```bash
npx playwright test tests/hybrid/hybrid.spec.ts
```

### View HTML report:
```bash
npx playwright show-report
```