import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Validate Dashboard Functionality", () => {
  test.beforeEach("Login to Page", async ({ page }) => {
    await new LoginPage(page).login("Admin", "admin123");
  });

  test("Validate Dashboard Page", async ({ page }) => {
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  });
});
