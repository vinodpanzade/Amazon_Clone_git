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

        stage('Verify Node Version') {
            steps {
                bat 'where node'
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Cypress Binary') {
            steps {
                bat 'npx cypress install'
            }
        }
        
        stage('Clean Cypress Reports') {
  steps {
    bat 'rmdir /s /q cypress\\reports || exit 0'
  }
}

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
        stage('Generate Cypress HTML Report') {
  steps {
    bat 'npm run report:merge'
    bat 'npm run report:generate'
  }
}
    }

    post {
        success {
            echo '✅ Build passed: Cypress tests successful'
        }
        failure {
            echo '❌ Build failed: Check Cypress/Jenkins logs'
        }
       always {
    script {
      publishHTML([
       reportDir: 'cypress/reports',
        reportFiles: '*.html',
        reportName: 'Cypress Test Report',
        keepAll: true,
        alwaysLinkToLastBuild: true
      ])
    }
  }
    }
}
