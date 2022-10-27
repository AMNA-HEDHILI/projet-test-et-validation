module.exports = {
    '@tags':['signup'],
 "validate signup":function(browser){
    browser.url("http://localhost:4200/signup")

    const urgentText= "body > app-root > app-signup > section > div > div:nth-child(1) > div > div > h2"
    browser.assert.containsText(urgentText,"Signup")
    browser.pause(6 * 1000)
    const firstname ="body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(1) > input"
    browser.setValue(firstname,"oumayma")
    const lastname ="body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(2) > input"
    browser.setValue(lastname,"khemissi")
    const email ="body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(3) > input"
    browser.setValue(email,"oumayma@gmail.com")
    const password ="body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(4) > input"
    browser.setValue(password,"123")
    const confipassword ="body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.form-row > div:nth-child(5) > input"
    browser.setValue(confipassword,"123")
    browser.click("body > app-root > app-signup > section > div > div:nth-child(2) > div > div > form > div.regerv_btn > button")
    
    browser.pause(6 * 1000)

 }

}