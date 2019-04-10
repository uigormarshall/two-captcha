const test = require("tape")
const TwoCaptcha = require("../lib/index")
require("dotenv").config()

const Captcha = new TwoCaptcha(process.env.apiKey)

//  improve the test
test("Get Id", async t => {
  t.assert(Captcha.getId(), "Attempt made successfully!")
  t.end()
})
