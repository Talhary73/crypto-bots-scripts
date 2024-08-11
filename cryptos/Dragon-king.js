const url = 'http://bot.dragonz.land/api/me/feed';
const headers = {
  'Host': 'bot.dragonz.land',
  'Content-Length': '18',
  'Sec-Ch-Ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
  'Accept': 'application/json, text/plain, */*',
  'Sec-Ch-Ua-Platform': 'Android',
  'X-Init-Data': 'user=%7B%22id%22%3A1933807522%2C%22first_name%22%3A%22%D8%B7%D9%84%D8%AD%DB%81%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22TalhaRiaz%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-6775246703119644418&chat_type=sender&auth_date=1723222602&hash=8710326b83d65385cf0d6e93a8a6b216cafb32fed0000c8d301076707609f5db',
  'Sec-Ch-Ua-Mobile': '?1',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36',
  'Content-Type': 'application/json',
  'Origin': 'https://bot.dragonz.land',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://bot.dragonz.land/',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'en-US,en;q=0.9',
  'Cookie': '_ga=GA1.1.1283453401.1723222702',
  'Cookie': '_ga_35M86WVDVQ=GS1.1.1723222701.1.1.1723222706.0.0.0',
  'Priority': 'u=1, i'
};
const body = JSON.stringify({ "feedCount": 1000 });

function sendFeedRequest() {
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

// Initial call
sendFeedRequest();

// Set up an interval to send the request every minute
setInterval(sendFeedRequest, 60000);
