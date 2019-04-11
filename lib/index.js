const request = require("request-promise-native")
const baseUrl = "http://2captcha.com/in.php?"
const solveUrl = "http://2captcha.com/res.php?"
let options
class TwoCaptcha {
  constructor(apikey) {
    this.options = {
      method: "GET",
      url: baseUrl,
      qs: {
        key: apikey,
      },
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    }
  }

  async getId(method, googleKey, pageUrl) {
    this.options.qs.method = method || "userrecaptcha"
    this.options.qs.googleKey = googleKey || "googleKey"
    this.options.qs.pageUrl = pageUrl || "pageUrl"
    this.request = request.defaults(this.options)
    console.log(this.options)
    let resp = await this.request.get({
      resolveWithFullResponse: true,
    })
    console.log(resp.body)
    return resp.body
  }

  async solve(id) {
    this.method = "POST"
    this.options.url = solveUrl
    this.options.qs.action = "get"
    this.options.qs.id = id
    this.request = request.defaults(this.options)
    let resp = await this.request.post({
      resolveWithFullResponse: true,
    })
    console.log(resp.body)
    return resp.body
  }
}

module.exports = TwoCaptcha
