describe('Amazon Clone', () => {
  it('open amazon clone', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(".nav-search-input").should("exist")
    cy.get("a>img").should("have.attr","src").and("include","amazon_logo.png")
  })
})

