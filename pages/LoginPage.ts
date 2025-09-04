import {Page} from "@playwright/test";

export class LoginPage{
    protected page: Page;
    constructor(page:Page){
        this.page = page;
    }
    
    async login(username:string, password:string){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await this.page.getByPlaceholder("Username").fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.getByRole("button", {name:"Login"}).click();
    }
}