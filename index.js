const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        defaultViewport: null,

        args: ['--hide-scrollbars', '--window-size=1366,720']
    });

    const page = await browser.newPage();
    // await page.setViewport({
    //     width: 1920,
    //     height: 1080,
    //     deviceScaleFactor: 1
    // });
    await page.goto("https://demoqa.com/");
    const title = await page.title();
    const url = await page.url();
    console.log("Site title: " + title + "\nUrl: " + url);
    await page.waitFor(2000);
    await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, 200);
    // await page.waitFor(5000);
    await (await page.waitForXPath("//h5[contains(.,'Elements')]")).click();
    // await page.mouse.click("//h5[contains(.,'Elements')]", { delay: 1000 });
    await page.waitFor(3000);
    await (await page.waitForXPath("//span[contains(.,'Text Box')]")).click();
    await page.waitFor(1000);
    await (await page.waitForXPath("//input[@id='userName']")).click();
    await page.waitFor(1000);
    await (await page.waitForXPath("//input[@id='userName']")).type("Hridoy");
    await page.screenshot({ 'path': 'logo.png', 'clip': { 'x': 50, 'y': 40, 'width': 500, 'height': 300 } });
    let input = page.waitForXPath("//input[@id='userEmail']//input[@id='userEmail']");
    const x = input[100];
    const y = input[40];
    const w = input[500];
    const h = input[400]
    await page.screenshot({ 'path': 'newcreenshots.png', 'clip': { 'x': x, 'y': y, 'width': w, 'height': h } });

    // await page.screenshot({
    //     path: "./fullPage.png",
    //     fullPage: true
    // });
    // await browser.close();

})();