# 🛒 Playwright E-Commerce Automation Framework

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
├── package.json # NPM dependencies and scripts̨̨
└── README.md # Project documentation


---̨

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

## Install dependencies ##
npm install

## Run tests ##
npx playwright test tests/login.spec.js --config=config/playwright.config.js --project=chromium --headed

## View HTML Report ##
View HTML Report
