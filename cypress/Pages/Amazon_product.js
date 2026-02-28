class Amazon_product {

    visit(){
        cy.visit("http://127.0.0.1:5501/index.html")
    }
    product_search(){
         cy.get('h2').contains("Best Sellers in Sports & Outdoors")
         cy.get('div.products>img').each((link)=>{
            const url=link.prop('src')
            //cy.log(url)
           // cy.request(url).its("status").should("eq",200)
         })
    }
    product_list(){
        cy.get('.box-col>h3').should("be.visible")
        const heading=["Stationery","Laptops for study","Office chairs","Gaming Monitor"]

        heading.forEach((data)=>{
           //cy.get("h3").contains(data)
           //cy.get("h3").should('contain',data)
          // cy.get("h3").should('include.text',data)
           
        })
        cy.get(".box-col>img").should('be.visible')

        cy.get(".box-col>img").each((link)=>{
            const url = link.prop("src")
            cy.request(url).its("status").should('eq',200)
        })
    }

}
export default Amazon_product