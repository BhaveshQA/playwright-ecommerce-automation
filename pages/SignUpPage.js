import { expect, Page } from "@playwright/test";

export default class SignUp {
  /**@param{Page} page */
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]'); // xpath = '//a[@href="/login"]'
    this.name = page.locator('input[name="name"]');
    this.email = page.locator('input[data-qa="signup-email"]');
    this.signupbtn = page.getByRole("button", { name: "Signup" });
    this.duplicateEmailMsg = page.locator("p").first();
  }

  async clickOnLoginSignupLink() {
    await this.loginLink.click();
    const currentUrl = await this.page.url();
    expect(currentUrl).toBe("https://automationexercise.com/login");
  }

  async registerUser(name, email) {
    await this.clickOnLoginSignupLink();
    await this.name.fill(name);
    await this.email.fill(email);
    await this.signupbtn.click();
  }

  async validateBlankFields() {
    await this.clickOnLoginSignupLink();
    await this.name.fill("Bhavesh");
    await this.signupbtn.click();

    let elements = [this.name, this.email];
    for (let e of elements) {
      if ((await e.inputValue()) === "") {
        const alertText = await e.evaluate((el) => el.validationMessage);
        console.log(alertText);
      }
    }
  }

  async validateInvalidEmailFormat(name, email) {
    await this.clickOnLoginSignupLink();
    await this.name.fill(name);
    await this.email.fill(email);
    await this.signupbtn.click();

    const invalidEmailMessageText = await this.email.evaluate(
      (el) => el.validationMessage
    );
    console.log("Invalid Email :", invalidEmailMessageText);
  }

  async duplicate_email_validation() {
    await this.clickOnLoginSignupLink();
    await this.name.fill("Bhavesh");
    await this.email.fill("bhavesh@gmail.com");
    await this.signupbtn.click();

    const duplicateEmailText = await this.duplicateEmailMsg.textContent();
    console.log(duplicateEmailText);
  }
}
