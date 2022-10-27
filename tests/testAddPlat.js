module.exports = {
    "validate Add plat " :browser=> {
      
        browser.url("http://localhost:4200/addPlat")
        browser.pause(10 * 1000)
        
        
        
        const urgentText= "body > app-root > app-add-plat > section > div > div:nth-child(1) > div > div > h2"
        browser.assert.containsText(urgentText,"Add plat")
        browser.pause(10 * 1000)
    } 

}