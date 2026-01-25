import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import Amazon from '../../Pages/Amazon'

const amazon =new Amazon();

Given("I open the Amazon clone homepage",()=>{
   amazon.amazonvisit();

})

Then("the search input should be visible",()=>{
    amazon.amazontest();
})

Then("the Amazon logo image should be displayed",()=>{
    amazon.amazontest();
})

