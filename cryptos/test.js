const axios = require('axios');
const memefi = async()=>{
    try {
      const {data} =   await axios.post('https://api-gw-tg.memefi.club/graphql', [{
        "operationName": "MutationGameProcessTapsBatch",
        "variables": {
          "payload": {
            "nonce": "03dbd9ada63c45f8d6562edba23616e5373e2eca6504883c172fef4757fc27e3",
            "tapsCount": 100,
            "vector": "2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2"
          }
        },
        "query": `mutation MutationGameProcessTapsBatch($payload: TelegramGameTapsBatchInput!) {
          telegramGameProcessTapsBatch(payload: $payload) {
            ...FragmentBossFightConfig
            __typename
          }
        }
        fragment FragmentBossFightConfig on TelegramGameConfigOutput {
          _id
          coinsAmount
          currentEnergy
          maxEnergy
          weaponLevel
          zonesCount
          tapsReward
          energyLimitLevel
          energyRechargeLevel
          tapBotLevel
          currentBoss {
            _id
            level
            currentHealth
            maxHealth
            __typename
          }
          freeBoosts {
            _id
            currentTurboAmount
            maxTurboAmount
            turboLastActivatedAt
            turboAmountLastRechargeDate
            currentRefillEnergyAmount
            maxRefillEnergyAmount
            refillEnergyLastActivatedAt
            refillEnergyAmountLastRechargeDate
            __typename
          }
          bonusLeaderDamageEndAt
          bonusLeaderDamageStartAt
          bonusLeaderDamageMultiplier
          nonce
          spinEnergyNextRechargeAt
          spinEnergyNonRefillable
          spinEnergyRefillable
          spinEnergyTotal
          spinEnergyStaticLimit
          __typename
        }`
      }], {
        headers: {
          'Host': 'api-gw-tg.memefi.club',
          'Content-Length': '1401',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
          'sec-ch-ua-mobile': '?1',
          'Content-Language': 'en-GB',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NTRhOTJjOWU3MTVmNDNjZjExZDk5YyIsInVzZXJuYW1lIjoiVGFsaGFSaWF6In0sInNlc3Npb25JZCI6IjY2YWRmODNmYjI0YjI3Yjg5NTBmMWY4YSIsInN1YiI6IjY2NTRhOTJjOWU3MTVmNDNjZjExZDk5YyIsImlhdCI6MTcyMjY3NzMxMSwiZXhwIjoxNzMwNDUzMzExfQ.r2cNcnjNQm2QM5AM8Kk53TZ82AtFNKqG--tdnes3bqc',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36',
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'sec-ch-ua-platform': '"Android"',
          'Origin': 'https://tg-app.memefi.club',
          'X-Requested-With': 'org.telegram.messenger',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'Referer': 'https://tg-app.memefi.club/',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,en-US;q=0.9',
          'Priority': 'u=1, i'
        }
      })
      console.log(data)
    } catch (error) {
        console.log('error')
    }
}

setInterval(()=>{
  memefi()
},250_000)
memefi()