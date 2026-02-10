class Amazon_carts{

    //comment re present this code for testing 
    visit(){
         cy.visit("http://127.0.0.1:5501/index.html")
    }

    cart(){
         const headings=["Free international returns","Lunar New Year","Toy under $25","Deals in PCs"]
        
        //    cy.get(".header-box>.box-col>h3").should("exist").each(($heading,index)=>{
        //     cy.wrap($heading).should("contain",headings[index])
        //     cy.get("a").contains("Shop More")
        //    })

        headings.forEach((data)=>{
            cy.get(".box-col>h3").contains(data)
            cy.get(".box-row>.box-col>a").contains("Shop More")
        })

        const heading2=["Grooming Products","Latest Devices","Pets Food","Fashion Mart"]

        // cy.get(".box-row").each(($heading,index)=>{
        //     // cy.wrap($heading).should("contain",heading2[index])

        //     cy.wrap($heading).within(()=>{
        //         cy.get(".box-col>h3").should("contain",heading2[index])
        //     })
        //     cy.get("a").contains("Shop More")
        // })
        

        heading2.forEach((data)=>{
            cy.get(".box-row>.box-col>h3").contains(data)
            cy.get(".box-row>.box-col>a").contains("Shop More")
            
        })

    }


    Slider(){
        cy.get("ul>img").each(($link)=>{
            const url=$link.prop("src")//here prop is used to get the src link from image 
            cy.request(url).its("status").should("eq",200)

        })
    }

    Add_to_Cart(){

        cy.get(".nav-cart>h4").should("contain","Cart").click()
        cy.get(".cart-left>h1").should("contain","Shopping Cart")
        cy.get(".product-cart-list>img").each(($link)=>{
            const url=$link.prop("src")
            cy.request(url).its("status").should("eq",200)
           
        })
          
        const options=["Qty: 1","Qty: 2","Qty: 3","Qty: 4","Qty: 5"]
        cy.get(".product-cart-list-action>select>option").each(($opt,index)=>{
            if(index<options.length){

                cy.wrap($opt).should("contain",options[index])
            }
            
        })



    }


}

export default Amazon_carts