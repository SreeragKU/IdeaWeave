const { Given, When, Then } = require("cucumber");
const { Builder, By, until } = require("selenium-webdriver");

let driver;

Given("I am on contact page", async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/contact");
    console.log("Successfully in contact page");
});
When("I enter the contact query", async function (){
    await driver.findElement(By.id("name")).sendKeys("Test");
    await driver.findElement(By.id("email")).sendKeys("sreeragkuofficial@gmail.com");
    await driver.findElement(By.id("message")).sendKeys("Did you get this test mail?");
    console.log("Found the input fields and entered message successfully");
})
When("click on submit", async function () {
    try {
        const button = await driver.wait(
            until.elementLocated(By.id("submit")),
            10000
        );
        console.log("Submit Button Found and Waiting to be Clicked")
        await button.click();
        console.log("Message sent successfully...!");
    } catch (error) {
        console.error("Error clicking on the login button:", error);
    }
});
Then("contact is accomplished", async function () {
    await driver.quit();
    console.log("Test Passed at Scenario 2: Contact");
});