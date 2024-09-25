pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/AshishChikane/react-app-jenkins'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'gcloud app deploy --quiet'
                }
            }
        }
    }
}
