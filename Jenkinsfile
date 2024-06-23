pipeline{
    agent any
    environment{
        REPO_URL=''
        FRONTEND_IMAGE_NAME='project-frontend-k8s'
        FRONTEND_IMAGE_TAG='v1.${BUILD_NUMBER}'
        BACKEND_IMAGE_NAME='project-backend-k8s'
        BACKEND_IMAGE_TAG='v1.${BUILD_NUMBER}'
        CONTAINER_NAME='frontend'
        CONTAINER_NAME='backend'
        REGISTRY='DockerHub'
        ACCOUNT_NAME='itsikweiss1020'
        NEW_FRONTEND_NAME=
        NEW_BACKEND_NAME=
    }
    stages{
        stage("clone"){
            steps{
                //sh 'gig clone '
                sh "pwd"
                sh 'fing .'
            }
        }
        stage("A"){
            steps{
                echo "========executing A========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}