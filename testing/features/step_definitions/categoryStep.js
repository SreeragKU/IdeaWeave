const { Given, When, Then } = require("cucumber");
const { Builder, By, until } = require("selenium-webdriver");

let driver;

Given("I am on the login page", async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signin");
});
When("I enter valid credentials", async function () {
    await driver.findElement(By.id("em")).sendKeys("ideaweavep@gmail.com");
    await driver.findElement(By.id("ps")).sendKeys("sku@ADMIN20");
    console.log("Found the Email and Password fields and Valid credentials entered successfully");
});
When("click on the login button", async function (){
    try {
        const button = await driver.wait(
            until.elementLocated(By.id("testid")),
            10000
        );
        console.log("Login Button Found and Waiting to be Clicked")
        await button.click();
        console.log("Login successful...!");
    } catch (error) {
        console.error("Error clicking on the login button:", error);
    }
});
Then("I should be redirected to the home page", async function () {
    await driver.wait(until.urlIs("http://localhost:3000/"));
    console.log("Successfully redirected to the home page");
});
When("I am on the home page", async function () {
    await driver.wait(until.urlIs("http://localhost:3000/"));
});

When("I click on the explore button", async function () {
    const exploreButton = await driver.findElement(By.id("explore"));
    await exploreButton.click();
    console.log("Clicked on the explore button");
});

Then("I should be redirected to the admin dashboard", async function () {
    await driver.wait(until.urlIs("http://localhost:3000/admin"));
    console.log("Successfully redirected to the admin dashboard");
});

When("I am on the category page", async function () {
    await driver.wait(until.urlIs("http://localhost:3000/admin/categories"), 10000);
    console.log("Successfully on the category page");
});

When("I enter a new category", async function () {
    await driver.findElement(By.id("category")).sendKeys("Drama");
    console.log("Entered new category");
});

Then("I click on the save changes button", async function () {
    const saveChangesButton = await driver.findElement(By.id("submit-btn"));
    await saveChangesButton.click();
    console.log("Clicked on the submit button");
});

Then("I should remain in category page", async function () {
    await driver.wait(until.urlIs("http://localhost:3000/admin/categories"));
    await driver.quit();
    console.log("Test Passed at Scenario 4: Category created")
});
