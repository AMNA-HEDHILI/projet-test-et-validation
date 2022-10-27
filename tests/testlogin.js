module.exports = {
    '@tags':['login'],
 "validate login":function(browser){
    browser.url("http://localhost:4200/login")

    const urgentText= "body > app-root > app-login > section > div > div:nth-child(1) > div > div > h2"
    browser.assert.containsText(urgentText,"Login")
    browser.pause(2 * 1000)
   
    const email ="body > app-root > app-login > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(1) > input"
    browser.setValue(email,"nawres@gmail.com")
    const password ="body > app-root > app-login > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(2) > input"
    browser.setValue(password,"123")
    
    browser.click("body > app-root > app-login > section > div > div:nth-child(2) > div > div > form > div.regerv_btn > button")
    
    browser.pause(10 * 1000)

 }

}