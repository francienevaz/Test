const puppeteer = require("puppeteer")
   
    let latitude = 23.6183643;
    let longitude = 46.6995142;
    let datas = [];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://www.cresesb.cepel.br/index.php?section=sundata");
    const latitude = await page.waitForSelector('input[name="latitude_dec"]');
    const longitude = await page.waitForSelector('input[name="longitude_dec"]');
    await latitude.click();
    await latitude.fill(datas[0]);
    await longitude.click();
    await longitude.fill(datas[1]);
    const btn = await page.locator('#submit_btn');
    await btn.click();
    await page.reload();
    const media = await page.waitForSelector("table.tb_sundata tbody tr td strong");
    await media[0].push(datas);
    await browser.close();
}) ();

console.log(datas);
