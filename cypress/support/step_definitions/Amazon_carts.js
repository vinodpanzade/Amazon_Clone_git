import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import Amazon_carts from "../../Pages/Amazon_carts"

const amazon_cart=new Amazon_carts();

Given("I open the Amazon Page",()=>{
     amazon_cart.visit();
})

Then("Verify the Carts",()=>{
     amazon_cart.cart();
     amazon_cart.Slider()
     amazon_cart.Add_to_Cart()
})
//add c=som comment for the tsting  skndskjfn 