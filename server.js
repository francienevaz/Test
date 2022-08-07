const puppeteer = require("puppeteer");
// const cep = document.querySelector('#cep').value;


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.google.com.br/maps/");
    await page.screenshot({path: 'example.png'});
    await browser.close();
}) ();