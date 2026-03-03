import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import Amazon_product from "../../Pages/Amazon_product"

const amazon_prod = new Amazon_product();

Given ("I open the homepage",()=>{
    amazon_prod.visit();
})

Then("verify the product",()=>{
     amazon_prod.product_search();
})

Then("Verify other product list",()=>{
    amazon_prod.product_list()
})