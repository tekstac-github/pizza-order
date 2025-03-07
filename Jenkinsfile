pipeline {
    agent any

    environment {
        JAVA_HOME = "/usr/lib/jvm/java-17-openjdk-amd64"
        PATH = "${JAVA_HOME}/bin:${PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci
                    npm install @types/node@18.16.19 --save-dev
                '''
            }
        }

        stage('Build PizzaOrder') {
            steps {
                sh 'ng build --configuration production --output-path=dist/angular-app'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'ng test --watch=false --browsers=ChromeHeadless'
                junit 'coverage/**/TEST-*.xml'
            }
        }

        stage('Serve Application') {
            steps {
                sh '''
                    sudo npm start --silent &
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh 'sudo kill $(lsof -t -i:4200) || true'
            }
        }
    }

    post {
        success {
            echo 'Application is running at http://localhost:4200 or http://IP:4200 (for IP give Jenkins server IP)'
        }
        failure {
            echo 'Build or deployment failed! Check logs.'
        }
    }
}
