const puppeteer = require('puppeteer');
const chromium = require('chromium');
//const functions = require('./functions.js')
//const fs = require('fs')

//functions.zzz()

(async () => {

    const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 700 });
    await page.goto('https://www.facebook.com/');

    await login_facebook(page)

})(); 

async function login_facebook (page) {
    return new Promise(async function (resolve, reject) {
        //#email
        await page.waitFor(1500)
        await page.waitForSelector('#email')
        //{visible: true}
        //{delay: 100}
        await page.type('#email', 'seuemail@gmail.com')
        //#pass
        await page.waitFor(1500)
        await page.waitForSelector('#pass')
        await page.type('#pass', 'suasenha')
        //#u_0_b
        await page.waitFor(1500)
        await page.click('#u_0_b')
        resolve(true)
    });
}


