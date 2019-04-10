const request = require("request-promise-native")
const baseUrl = "http://2captcha.com/in.php?"

class TwoCaptcha {
  constructor(apikey) {
    let options = {
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
    this.request = request.defaults(options)
  }

  async getId() {
    let resp = await this.request.get({
      resolveWithFullResponse: true,
    })
    console.log(resp.body)
    return resp.body
  }

  // develop method solve ()
}

module.exports = TwoCaptcha
