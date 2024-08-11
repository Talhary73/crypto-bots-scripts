const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");
const ActivatedPuppeteer = async()=>{
   try {
    return  await puppeteer.launch({
      headless: false,
      args: [
        ...chromium.args,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=360,640',
      ],
      defaultViewport: {
        width: 360,
        height: 640,
        isMobile: true,
        hasTouch: true,
      },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
  });
   } catch (error) {
    console.log(error)
    return null
   }
}
module.exports =  {ActivatedPuppeteer}