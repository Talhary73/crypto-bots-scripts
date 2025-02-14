const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");
const {setTimeout} = require('node:timers/promises');

const urls = [
  `https://hamsterkombatgame.io/clicker#tgWebAppData=query_id%3DAAH1UTx6AgAAAPVRPHofYAx3%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721108206%26hash%3D76a48c26507d6eb8243b6e1f10fc705b2b2ea1efcd46d9dc3db44d2099ad9acb&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23212d3b%22%2C%22section_bg_color%22%3A%22%231d2733%22%2C%22secondary_bg_color%22%3A%22%23151e27%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%237d8b99%22%2C%22link_color%22%3A%22%235eabe1%22%2C%22button_color%22%3A%22%2350a8eb%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23242d39%22%2C%22accent_text_color%22%3A%22%2364b5ef%22%2C%22section_header_text_color%22%3A%22%2379c4fc%22%2C%22subtitle_text_color%22%3A%22%237b8790%22%2C%22destructive_text_color%22%3A%22%23ee686f%22%2C%22section_separator_color%22%3A%22%230d1218%22%7D`,
  'https://app.tapswap.club/?bot=app_bot_1#tgWebAppData=query_id%3DAAH1UTx6AgAAAPVRPHq2JC2Z%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721370545%26hash%3D8091fdabdb664da3e9377c4046ee6f76de1d97ab78e3e19516cb5f47fa4378da&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23ffffff%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22secondary_bg_color%22%3A%22%23f0f0f0%22%2C%22text_color%22%3A%22%23222222%22%2C%22hint_color%22%3A%22%23a8a8a8%22%2C%22link_color%22%3A%22%232678b6%22%2C%22button_color%22%3A%22%2350a8eb%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23527da3%22%2C%22accent_text_color%22%3A%22%231c93e3%22%2C%22section_header_text_color%22%3A%22%233a95d5%22%2C%22subtitle_text_color%22%3A%22%2382868a%22%2C%22destructive_text_color%22%3A%22%23cc2929%22%2C%22section_separator_color%22%3A%22%23d9d9d9%22%7D'
];
let browser = null
const launchBrowser = async()=>{
  browser = await puppeteer.launch({
    headless: true,
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
} 

const userAgent = 'Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36';

const func = async (url,i) => {
  // Launch the browser
  try {
    if(!browser) await launchBrowser()

      // Open a new page
      const page = await browser.newPage();
      // Set user agent
      await page.setUserAgent(userAgent);
      // Set viewport for mobile device
      await page.setViewport({
        width: 360,
        height: 640,
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2,
      });
    
      // Navigate to the desired URL
     
      await page.goto(url);
      // Wait for 10 seconds
      await setTimeout(20000);
      // Take a screenshot and save it

      await page.screenshot({ path: './images/'+i+'Hamand2nd.png' });
     
    
  } catch (error) {
     console.log(error)
  }
  // Close the browser
 
};


setInterval(() => {
  urls.forEach((url,i) => func(url,i));
}, 60000);
