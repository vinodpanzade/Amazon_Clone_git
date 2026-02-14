class Amazon{


    amazonvisit(){
        cy.visit("http://127.0.0.1:5501/index.html")
    }
    amazontest(){
        cy.get(".search-input-change").should("exist")
        cy.get("a>img").should("have.attr","src").and("include","amazon_logo.png")
    }
}

export default  Amazon