const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://www.cresesb.cepel.br/index.php?section=sundata");
    const element = await page.waitForSelector('input[name="latitude_dec"]');
    await element.click();
    await element.fill();
    await browser.close();
}) ();