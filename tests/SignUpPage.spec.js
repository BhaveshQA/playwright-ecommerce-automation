//import SignUp from "../pages/SignUpPage.js";
import { test } from "../fixtures/BaseTest.js";
import testData from "../testData/testData.json";
import { ExcelToJSONconvert } from "../utils/excelRead.js";
import path from "path";
//import { takeScreenShot } from "../utils/commonUtils.js";

test.describe("Singup page functional Testing", () => {
  test("Launch the Website URL & validate", async ({ signUpPage }) => {
    await signUpPage.clickOnLoginSignupLink();
  });

  test("Should register user with site when provided valid data", async ({
    signUpPage,
  }) => {
    await signUpPage.registerUser("Bhavesh", "bhavesh@gmail.com");
  });

  test("Should display validation message when name or email fields blank", async ({
    signUpPage,
  }) => {
    await signUpPage.validateBlankFields();
  });

  test("Should display error message when provided invalid email format", async ({
    signUpPage,
  }) => {
    await signUpPage.validateInvalidEmailFormat(
      testData.valid.name,
      testData.invalid.email
    );
  });

  test("Should display validation message when existing email id provided", async ({
    signUpPage,
  }) => {
    await signUpPage.duplicate_email_validation();
  });

  test("Validate singup with testData pick from JSON", async ({
    signUpPage,
  }) => {
    await signUpPage.registerUser(testData.valid.name, testData.valid.email);
  });

  test("Should read data from excel and register user", async ({
    signUpPage,
  }) => {
    let data = ExcelToJSONconvert();

    for (let e of data) {
      if (e.usecase === "valid") {
        console.log(e.name);
        await signUpPage.registerUser(e.name, e.email);
      }
    }
  });

  let data = ExcelToJSONconvert();
  for (let row of data) {
    test(`Signup with different usecase ${row.usecase}`, async ({
      signUpPage,
    }) => {
      if (row.usecase === "valid") {
        await signUpPage.registerUser(row.name, row.email);
      }
      if (row.usecase === "invalid") {
        await signUpPage.validateInvalidEmailFormat(row.name, row.email);
      }
    });
  }

  let excelData = ExcelToJSONconvert().filter(
    (e) => e.usecase === "valid" || e.usecase === "invalid"
  );

  for (let row of excelData) {
    test(`Should validate singup with ${row.usecase}`, async ({
      signUpPage,
    }) => {
      if (row.usecase === "valid") {
        await signUpPage.registerUser(row.name, row.email);
      }
      if (row.usecase === "invalid") {
        await signUpPage.validateInvalidEmailFormat(row.name, row.email);
      }
    });
  }
});
