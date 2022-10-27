module.exports = {
    "validate home " :browser=> {
      
        browser.url("http://localhost:4200/")
        browser.pause(10 * 1000)
        
        
        
        const urgentText= "body > app-root > app-home > app-banner > section > div > div > div > div > div > h1"
        browser.assert.containsText(urgentText,"Deliciousness jumping into the mouth")
        browser.pause(10 * 1000)
    } 

}