import { test as base } from "@playwright/test";
import SignUp from "../pages/SignUpPage.js";
import { takeScreenShot } from "../utils/commonUtils.js";

async function pageFixture({ page }, use) {
  await page.goto("https://automationexercise.com/login");
  await use(page);
}
async function signUpFixture({ page }, use) {
  const signUpPage = new SignUp(page);
  await use(signUpPage);
}

base.afterEach(async ({ page }, testInfo) => {
  if (page) {
    await takeScreenShot(page, testInfo);
  }
});
export const test = base.extend({
  page: pageFixture,
  signUpPage: signUpFixture,
});
