const request = require("request-promise-native")
const baseUrl = "http://2captcha.com/in.php?"
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
    let resp = await this.request.get({
      resolveWithFullResponse: true,
    })
    console.log(resp.body)
    return resp.body
  }

  // develop method solve ()
}

module.exports = TwoCaptcha
