const { Given, When, Then } = require("cucumber");
const { Builder, By, until } = require("selenium-webdriver");

let driver;

Given("I am on the login page", async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signin");
    console.log("Successfully in signin page");
});
When("I enter valid credentials", async function () {
    await driver.findElement(By.id("em")).sendKeys("sreeragkuofficial@gmail.com");
    await driver.findElement(By.id("ps")).sendKeys("sku@MCA20");
    console.log("Found the input fields and entered valid credentials successfully");
});
When("click on the login button", async function () {
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
    await driver.quit();
    console.log("Test Passed at Scenario 2: Login");
});
