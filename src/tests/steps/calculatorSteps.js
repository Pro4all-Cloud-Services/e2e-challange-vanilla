import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let page;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: true, // Set to false to debug in a visible browser
  });
  page = await browser.newPage();
});

AfterAll(async () => {
  await browser.close();
});
