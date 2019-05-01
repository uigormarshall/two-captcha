const test = require("tape")
const TwoCaptcha = require("../lib/index")
require("dotenv").config()

const Captcha = new TwoCaptcha(process.env.apiKey)
const method = process.env.method
const googleKey = process.env.googleKey
const pageUrl = process.env.pageUrl
let id = 00000
//  improve the test
test("Get id", async t => {
  resp = await  Captcha.getId(method, googleKey, pageUrl)
  id = resp
  t.assert(resp, resp)
  t.end()
})

test("Solve", async t => {
  let solve = await Captcha.solve(id)
  t.assert(solve, solve.request)
  t.end()
})

