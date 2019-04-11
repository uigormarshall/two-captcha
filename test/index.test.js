const test = require("tape")
const TwoCaptcha = require("../lib/index")
require("dotenv").config()

const Captcha = new TwoCaptcha(process.env.apiKey)
const method = process.env.method
const googleKey = process.env.googleKey
const pageUrl = process.env.pageUrl
//  improve the test
test("Get Id", async t => {
  t.assert(Captcha.getId(method, googleKey, pageUrl), "Attempt made successfully!")
  t.end()
})
