Two-Captcha Wrapper
---
 2Captcha JavaScript Wrapper



<p align="center">
  <a href="https://www.npmjs.com/package/two-captcha"><img alt="NPM version" src="https://badge.fury.io/js/two-captcha.svg"></a>
  <a href="https://travis-ci.com/uigormarshall/two-captcha"><img alt="TRAVIS version" src="https://travis-ci.com/uigormarshall/two-captcha.svg?branch=master"></a> 
</p>

# Prerequisites:
You will need a `2Captcha API key` 

# Installation:
```js
npm i two-captcha
```
# Usage:
Set up your api key:
```js

const TwoCaptcha = require('two-captcha')
const Captcha = new TwoCaptcha('your-api-key')

```
Get the ID of your task:


```js
let id = Captcha.getId('method', 'googleKey', 'pageUrl')
```
Start a cycle that checks if your task is completed and get result:
```js
let solve = Captcha.solve(id)
```
