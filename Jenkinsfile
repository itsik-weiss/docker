pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/itsik-dev-k8s']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/V1Su4L/DevSecOps14FinalProject.git']]])
            }
        }
        stage('build'){
            steps{
               sh 'docker build -t backend .'
            }
        }
        stage('test'){
            steps{
                timeout(time: 3,unit: 'SECONDS'){
                    sh 'sleep 1'
                }

            }
        }

    }
    post{
        aborted{
            sh 'echo please give me more time'
        }
        success{
        }
        failure{
            sh 'echo die'
        }
    }
}