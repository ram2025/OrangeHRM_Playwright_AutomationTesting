import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test.describe("Validate Dashboard Functionality", () => {
  test.beforeEach("Login to Page", async ({ page }) => {
    await new LoginPage(page).login("Admin", "admin123");
  });

  test("Validate Dashboard Page", async ({ page }) => {
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  });

  test("Validate Side Bar Menu Items", async ({page})=>{
    const menuList = await new DashboardPage(page).getListOfMenu();
    const expectedList = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];
    for(let i = 0 ; i < expectedList.length; i++){
      expect(menuList.includes(expectedList[i])).toBeTruthy();
    }
  });

  test("Validate Title of each menu Item Page", async ({page})=>{
    const expectedList = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'Performance', 'Dashboard', 'Directory', 'Claim', 'Buzz'];
    for(let i = 0 ; i < expectedList.length; i++){
      await new DashboardPage(page).goto(expectedList[i]);
      const expectedUrlRegex = new RegExp(expectedList[i].toLowerCase());
      await expect(page).toHaveURL(expectedUrlRegex);
    }
  });

});
