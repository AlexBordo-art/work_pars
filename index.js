const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://hh.ru/');
  console.log('Navigated to hh.ru');
  // Don't close the browser yet, we'll add more code in the next steps.
})();

