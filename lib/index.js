const delay = require('delay')
const request = require("request-promise-native")
const _cliProgress = require('cli-progress');
const baseUrl = "http://2captcha.com/in.php?"
const solveUrl = 'http://2captcha.com/res.php?'
let options
class TwoCaptcha {
  constructor(apikey) {
    this.options = {
      method: "GET",
      url: baseUrl,
      qs: {
        key: apikey,
        json: true
      },
      headers: {
        "Content-Type": "application/json",
      }
    }
  }

  async getId(method, googleKey, pageUrl) {
    this.options.qs.method = method || "userrecaptcha"
    this.options.qs.googleKey = googleKey || "googleKey"
    this.options.qs.pageUrl = pageUrl || "pageUrl"
    this.request = request.defaults(this.options)
    let resp = await this.request.get({
      resolveWithFullResponse: true,
    })
    return resp.body
  }
  
  async solve(id, shots = 10, waitTime = 5000){
    const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic)
    let max = shots * waitTime
    bar1.start(max, 0);
    let result
    for (var i = 0; i < shots; i++) {
      this.options.url = solveUrl
      this.options.qs.action = 'get'
      this.options.qs.id = id
      let resp = await this.request.get({
        resolveWithFullResponse: true,
      })
      result = JSON.parse(resp.body)
      if(result.status === 1){
        bar1.update(max);
        break
      }
      await delay(waitTime)
      bar1.update(i * waitTime);
    }
    bar1.stop();
    console.log('\n\n')
    return result
  }
}

module.exports = TwoCaptcha
