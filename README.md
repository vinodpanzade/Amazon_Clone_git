🚀 Amazon Clone Automation Framework

A Cypress-based automation framework for an Amazon Clone application using BDD (Cucumber), Page Object Model (POM), and Jenkins CI/CD.
This project showcases real-world QA automation practices used in modern teams.

🛠 Tech Stack

🧪 Cypress

🥒 Cucumber (BDD)

🧱 Page Object Model (POM)

⚙️ Jenkins

🌐 JavaScript | Node.js

📂 Project Highlights

BDD scenarios written in Gherkin

Clean POM architecture

UI validations (search bar, logo, carts)

Cart & product section verification

Broken image/link checks using cy.request

Quantity dropdown validation

🥒 Sample BDD Scenarios

Scenario: Open Amazon clone homepage
Given I open the Amazon clone homepage
Then the search input should be visible
And the Amazon logo image should be displayed

Scenario: Open Amazon homepage
Given I open the Amazon Page
Then Verify the Carts

⚙️ Jenkins Integration

Pulls latest code from GitHub

Installs dependencies automatically

Runs Cypress tests in headless mode

Fails build on test failure ❌

Run Tests
npm install
npx cypress run


Fully CI integrated with Jenkins
