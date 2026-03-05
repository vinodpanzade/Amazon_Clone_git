// pipeline {
//     agent any

//     tools {
//         nodejs 'Node20'
//     }

//     stages {

//         stage('Checkout Code') {
//             steps {
//                 git branch: 'develop',
//                     url: 'https://github.com/vinodpanzade/Amazon_clone_git.git'
//             }
//         }

//         stage('Verify Node Version') {
//             steps {
//                 bat 'where node'
//                 bat 'node -v'
//                 bat 'npm -v'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Install Cypress Binary') {
//             steps {
//                 bat 'npx cypress install'
//             }
//         }
        
//         stage('Clean Cypress Reports') {
//         steps {
//             bat 'rmdir /s /q cypress\\reports || exit 0'
//              }
//            }

//         // stage('Run Cypress Tests') {
//         //     steps {
//         //         bat 'npx cypress run'
//         //     }
//         // }

//         //parallel running the type of testing

//         stage("Parallel Tests"){
//             parallel {
//                 stage("Smoke"){
//                     steps{
//                         bat 'npx cypress run --env TAGS="@smoke"'
//                     }
//                 }
//                 stage("Regression"){
//                     steps{
//                         bat 'npx cypress run --env TAGS="@regression"'
//                     }
//                 }
//                    stage("UAT"){
//                     steps{
//                         bat 'npx cypress run --env TAGS="@UAT"'
//                     }
//                 }
//             }
//         }

//         //sequential execution
// //         stage("Smoke Tests"){
// //     steps{
// //         bat 'npx cypress run --env TAGS="@smoke"'
// //     }
// // }

// // stage("Regression Tests"){
// //     steps{
// //         bat 'npx cypress run --env TAGS="@regression"'
// //     }
// // }

// // stage("UAT Tests"){
// //     steps{
// //         bat 'npx cypress run --env TAGS="@UAT"'
// //     }
// // }

//         stage('Generate Cypress HTML Report') {
//   steps {
//     bat 'npm run report:merge'
//     bat 'npm run report:generate'
//   }
// }
//     }

//     post {
//         success {
//             echo '✅ Build passed: Cypress tests successful'
//         }
//         failure {
//             echo '❌ Build failed: Check Cypress/Jenkins logs'
//         }
//        always {
//     script {
//       publishHTML([
//        reportDir: 'cypress/reports',
//         reportFiles: '*.html',
//         reportName: 'Cypress Test Report',
//         keepAll: true,
//         alwaysLinkToLastBuild: true
//       ])
//     }
//   }
//     }
// }





//simple pipeline code
pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'develop',
                    url: 'https://github.com/vinodpanzade/Amazon_clone_git.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Run Smoke Tests') {
            steps {
                bat 'npx cypress run --env TAGS="@smoke"'
            }
        }
    }
    post {
        success {
            echo '✅ Smoke Tests Pass'
        }
        failure {
            echo '❌ Tests Failed '
        }
    }
}

// //Allure result 
// pipeline {
//     agent any

//     tools {
//         nodejs 'Node20'
//     }

//     stages {

//         stage('Checkout Code') {
//             steps {
//                 git branch: 'develop',
//                     url: 'https://github.com/vinodpanzade/Amazon_clone_git.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm ci'
//             }
//         }

//         stage('Clean Old Allure Results') {
//             steps {
//                 bat 'rmdir /s /q allure-results || exit 0'
//             }
//         }

//         stage('Run Smoke Tests') {
//             steps {
//                 bat 'npx cypress run --env TAGS="@smoke"'
//             }
//         }

//         stage('Run Regression Tests') {
//             steps {
//                 bat 'npx cypress run --env TAGS="@regression"'
//             }
//         }

//         stage('Run UAT Tests') {
//             steps {
//                 bat 'npx cypress run --env TAGS="@UAT"'
//             }
//         }
//     }

//     post {
//         always {
//             allure(
//                 results: [[path: 'allure-results']]
//             )
//         }

//         success {
//             echo '✅ All Tests Passed'
//         }

//         failure {
//             echo '❌ Some Tests Failed'
//         }
//     }
// }