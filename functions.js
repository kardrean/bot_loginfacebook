module.exports = {
    zzz: function () {
        console.log('teste')
    },

    login_facebook: async function (page) {
        return new Promise(async function (resolve, reject) {
            //#email
            await page.waitFor(1500)
            await page.waitForSelector('#email')
            //{visible: true}
            //{delay: 100}
            await page.type('#email', 'sigilosopoars@gmail.com')
            //#pass
            await page.waitFor(1500)
            await page.waitForSelector('#pass')
            await page.type('#pass', 'paparoach7')
            //#u_0_b
            await page.waitFor(1500)
            await page.click('#u_0_b')
            resolve(true)
        });
    }
    
}