class Amazon{


    amazonvisit(){
        cy.visit("http://127.0.0.1:5501/index.html")
    }
    amazontest(){
        cy.get(".search-input-changedclassname").should("exist")
        cy.get("a>img").should("have.attr","src").and("include","amazon_logo.png")
    }
}
//made changes here also then now tell mw i am going to add this thing 
export default  Amazon