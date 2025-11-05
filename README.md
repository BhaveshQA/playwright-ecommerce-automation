 🛒 Playwright E-Commerce Automation Framework

This repository demonstrates an **end-to-end web automation framework** built using **Playwright with JavaScript**.  
It automates various workflows of an e-commerce application — from login, product search, add to cart, checkout, and more — using a **Page Object Model (POM)** design for maintainability and scalability.

---

## 🚀 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Automation Tool** | [Playwright](https://playwright.dev/) |
| **Language** | JavaScript (Node.js) |
| **Test Runner** | Playwright Test |
| **Framework Design Pattern** | Page Object Model (POM) |
| **Reporting** | Playwright HTML Reports |
| **Data Handling** | JSON-based Test Data |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure
```
playwright-ecommerce-automation/
│
├── 📂 pages/ # Page Object classes (each page as separate class)
├── 📂 tests/ # Test scripts (importing page objects)
├── 📂 utils/ # Utility/helper functions
├── 📂 testData/ # JSON test data files
├── 📂 fixtures/ # Common setup/teardown or custom fixtures
├── 📂 reports/ # Custom HTML/JSON reports
├── 📂 playwright-report/ # Default Playwright reports
│
├── playwright.config.js # Playwright configuration file
├── package.json # NPM dependencies and scripts
└── README.md # Project documentation

```

## 🧠 Key Features

✅ Built using **Playwright + JavaScript**  
✅ Modular **Page Object Model (POM)** structure  
✅ **Reusable utilities** and helper functions  
✅ **Data-driven testing** using JSON files  
✅ Supports **cross-browser testing** (Chromium, Firefox, WebKit)  
✅ **Auto-screenshot** and **HTML reports** on failure  
✅ Easily extensible for **API testing integration**  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/BhaveshQA/playwright-ecommerce-automation.git
cd playwright-ecommerce-automation
2️⃣ Install dependencies
npm install

3️⃣ Run tests
npx playwright test

4️⃣ View HTML Report
After test execution, view the report:
npx playwright show-report

🧩 Example Test Flow
Example: Add product to cart and validate checkout
```
test('User should be able to add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('testuser@example.com', 'password123');
  await homePage.searchProduct('Wireless Headphones');
  await homePage.addProductToCart('Wireless Headphones');
  await cartPage.verifyProductInCart('Wireless Headphones');
});

```
🧱 Framework Design (POM Concept)
Test File → Defines test scenario and assertions.

Page Class → Contains locators and actions for one page.

BaseTest / Fixtures → Manages browser, context, page setup.

Utils → Shared methods (logging, waits, date utils, etc.).

TestData → External JSON for data-driven testing.


Test → calls → PageObject → interacts with → Web Elements
🧰 Example Folder Explanation
pages/
Each page class represents one web page and exposes high-level actions:

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.loginBtn = page.locator('#login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

tests/
Contains Playwright test files using Playwright Test syntax:

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify login functionality', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('test@example.com', 'Password123');
});


🧩 Upcoming Enhancements
 Add Allure Reports integration

 Integrate API testing within the same framework

 Add Environment config management (dev, stage, prod)

 Include Playwright fixtures for global setup

 Add Reusable base page with generic methods

💡 Best Practices Followed
✔️ Separation of locators and test logic (POM)
✔️ Use of async/await for clean asynchronous handling
✔️ Readable and reusable methods for better maintenance
✔️ Consistent naming conventions
✔️ Easily extendable for CI/CD pipelines

🧑‍💻 Author
👤 Bhavesh Rathod
💼 QA Automation Engineer | Playwright | JavaScript | API Automation
📧 LinkedIn https: https://www.linkedin.com/in/bhavesh-rathod-38b89615/
📂 GitHub

⭐ How to Contribute
Contributions are welcome!
If you’d like to enhance the framework:

Fork the repository

Create a new feature branch

Make your changes

Submit a pull request 🚀

🏁 Summary
This framework provides a clean and extendable structure to automate complex e-commerce flows using Playwright with JavaScript, following best QA engineering practices.
It’s a great starting point for UI + API automation integration and for preparing advanced Playwright interview discussions.

"Quality Automation isn’t just testing — it’s building confidence with every commit." 
