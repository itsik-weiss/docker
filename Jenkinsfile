pipeline {
    agent any
    environment {
        REPO_URL='https://github.com/V1Su4L/DevSecOps14FinalProject.git'
        FRONTEND_IMAGE_NAME='project-frontend-k8s'
        FRONTEND_IMAGE_TAG="v1.${BUILD_NUMBER}"
        BACKEND_IMAGE_NAME='project-backend-k8s'
        BACKEND_IMAGE_TAG="v1.${BUILD_NUMBER}"
        CONTAINER_NAME_FRONTEND='frontend'
        CONTAINER_NAME_BACKEND='backend'
        REGISTRY='DockerHub'
        ACCOUNT_NAME='itsikweiss1020'
        NEW_FRONTEND_NAME=''
        NEW_BACKEND_NAME=''
    }
    stages {
        stage('clone') {
            steps {
                sh 'git checkout itsik-dev-k8s || git checkout -b itsik-dev-k8s'
                sh 'git pull origin itsik-dev-k8s'
                sh 'pwd'
            }
        }
        stage('build backend') {
            steps {
                sh 'chmod 777 /var/run/docker.sock'
                sh 'docker build -t ${CONTAINER_NAME_BACKEND}:${BACKEND_IMAGE_TAG} .'
            }
            post {
                always {
                    echo '========always========'
                }
                success {
                    echo '========A executed successfully========'
                }
                failure {
                    echo '========A execution failed========'
                }
            }
        }
    }
    post {
        always {
            echo '========always========'
        }
        success {
            echo '========pipeline executed successfully ========'
        }
        failure {
            echo '========pipeline execution failed========'
        }
    }
}
