// @ts-check
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "../tests",
  retries: 1,
  timeout: 30 * 1000, // 30s
  use: {
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 720 },
    baseURL: "https://automationexercise.com",
    actionTimeout: 0, // no limit
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["line"], ["allure-playwright"], ["html", { open: "never" }]],
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "firefox", use: { browserName: "firefox" } },
  ],
});
