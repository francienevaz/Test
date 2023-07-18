import { launch } from "../node_modules/puppeteer";
const cepInput = document.getElementById("cepInput");
const btn = document.querySelector(".btn");
const key = "c50d7036d34b4c55ae2ddadfe2b15eb0";
const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&fields=geo`;

async function searchCep (zipcode) {
			

	const response = await fetch(apiUrl);
	const data = await response.json();				

    let latitude = data.latitude;
    let longitude = data.longitude;
    let datas = [];

    if (zipcode == data.zipcode) {

        datas.push(latitude, longitude)
        
        (async () => {
                const browser = await launch();
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
                await media.push(datas);
                await browser.close();
            }) ();

            console.log(datas);

    } else {
        console.log("Cep não localizado");
    }

} 

btn.addEventListener("click", () => {
    searchCep(cepInput.value);
})

export default searchCep();