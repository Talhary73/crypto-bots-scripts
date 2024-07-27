const axios = require('axios')
const data = {
    tapsNumber: 1
  };
  
  const config = {
    headers: {
      'content-length': '16',
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
      'sec-ch-ua-platform': '"Android"',
      'sec-ch-ua-mobile': '?1',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
      'content-type': 'application/json',
      'accept': '*/*',
      'origin': 'https://baboon-tg-web-app-v2.onrender.com',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://baboon-tg-web-app-v2.onrender.com/',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'priority': 'u=1, i'
    }
  };

  
const postBatteryTaps = async () => {
  const data = {
    tapsNumber: 13
  };

  const config = {
    headers: {
      'content-length': '17',
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
      'sec-ch-ua-platform': '"Android"',
      'sec-ch-ua-mobile': '?1',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
      'content-type': 'application/json',
      'accept': '*/*',
      'origin': 'https://baboon-tg-web-app-v2.onrender.com',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://baboon-tg-web-app-v2.onrender.com/',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'priority': 'u=1, i'
    }
  };

  try {
    const response = await axios.post('https://baboon-telegram.onrender.com/game/batteryTaps?tgInitData=query_id%3DAAH1UTx6AgAAAPVRPHqXtR4G%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721377483%26hash%3Dabba9bbb6c7a0ccbe2dcc6a3e9860da125f15ee360f11f25017c573b29a3c6c8', data, config);
    // console.log(response.data);
  } catch (error) {
    console.error('There was an error!', error);
  }
};



async function postRepairFingers() {
  const url = 'https://baboon-telegram.onrender.com/game/repairFingers?tgInitData=query_id%3DAAH1UTx6AgAAAPVRPHpqNBpq%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1722070135%26hash%3D15d28858b85015ead0eb95f5199e1a55772449c725c510f87292f40d9fce3a6f';
  const headers = {
    'Host': 'baboon-telegram.onrender.com',
    'content-length': '36',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
    'sec-ch-ua-platform': '"Android"',
    'sec-ch-ua-mobile': '?1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
    'content-type': 'application/json',
    'accept': '*/*',
    'origin': 'https://baboon-tg-web-app-v2.onrender.com',
    'x-requested-with': 'org.telegram.messenger',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://baboon-tg-web-app-v2.onrender.com/',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=1, i'
  };

  const data = {
    "fingersToRepair": 1000,
    "price": 100
  };

  try {
    const response = await axios.post(url, data, { headers });
    // console.log(response.data);
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}
postRepairFingers()
 setInterval(()=>{
  
postRepairFingers();

 },1000)

  setInterval(async()=>{
 try {

 const res = await axios.post('https://baboon-telegram.onrender.com/game/chargeBattery?tgInitData=query_id%3DAAH1UTx6AgAAAPVRPHqXtR4G%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721377483%26hash%3Dabba9bbb6c7a0ccbe2dcc6a3e9860da125f15ee360f11f25017c573b29a3c6c8', data, config)
//  console.log(res)
 postBatteryTaps()

 } catch (error) {
  console.log(error)  
 }
  },50)