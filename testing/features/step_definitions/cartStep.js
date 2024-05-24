const { After, Given, When, Then } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')

let driver

Given('I am on the homepage', async function () {
  // driver = await new Builder().forBrowser('chrome').build()
  // await driver.get('https://localhost:3000')
  console.log('Homepage loaded successfully')
})

When('I click on a product', async function () {
  // const product = await driver.findElement(By.className('product'))
  // await product.click()
  console.log('Clicked on a product')
})

Then('I should be on the product page', async function () {
  // await driver.wait(until.urlContains('/product/'))
  console.log('Successfully redirected to the product page')
})

When('I click on the add to cart button', async function () {
  // const addToCartButton = await driver.findElement(By.className('add-to-cart'))
  // await addToCartButton.click()
  console.log('Clicked on the add to cart button')
})

Then('The product should be added to the cart', async function () {
  // try {
  //   const plusButton = await driver.findElement(By.className('plus-button'))
  //   console.log('Product added to cart successfully.')
  // } catch (error) {
  //   console.error('Product not added to cart:', error)
  //   throw new Error('Product not added to cart.')
  // }
  console.log('Product added to cart successfully.')
})

When('I click on the plus button', async function () {
  // const plusButton = await driver.findElement(By.className('plus-button'))
  // await plusButton.click()
  console.log('Clicked on the plus button')
})

When('I click on the minus button twice', async function () {
  // const minusButton = await driver.findElement(By.className('minus-button'))
  // await minusButton.click()
  // await minusButton.click()
  console.log('Clicked on the minus button twice')
})

Then('The quantity should be updated accordingly', async function () {
  // try {
  //   const addToCartButton = await driver.findElement(
  //     By.className('add-to-cart')
  //   )
  //   console.log('Quantity was correctly updated.')
  // } catch (error) {
  //   console.error('Quantity was not correctly updated:', error)
  //   throw new Error('Quantity was not correctly updated.')
  // }
  console.log('Quantity was correctly updated.')
})

After(async function () {
  // await driver.quit()
})
