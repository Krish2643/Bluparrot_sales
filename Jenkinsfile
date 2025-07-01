pipeline {
    agent any

    environment {
        APP_DIR = "/opt/sales/Bluparrot_sales"       // Remote server app directory
        DEPLOY_USER = "krish"           // SSH user (used for logging purposes, actual user comes from credentials)
        DEPLOY_HOST = "4.213.98.99"     // Remote server IP or DNS
        SSH_CRED = "bluparrot-sales"       // Jenkins credentials ID (username + password)
        
        }

    stages {
        stage('Install sshpass') {
            steps {
                sh 'sudo apt-get update && sudo apt-get install -y sshpass'
            }
        }

        stage('Deploy using sshpass') {
            steps {
                withCredentials([
                    usernamePassword(credentialsId: "${SSH_CRED}", usernameVariable: 'DEPLOY_USER', passwordVariable: 'DEPLOY_PASS')
                    
                ]) {
                    sh '''
                        #!/bin/bash
                        sshpass -p "$DEPLOY_PASS" ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST << EOF
                            cd $APP_DIR
                            sudo git pull 
                            sudo rm -rf package-lock.json
                            sudo npm install
			                sudo npm run build
                            sudo pm2 reload frontend
                            sudo pm2 save
EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment succeeded!"
        }
        failure {
            echo "❌ Deployment failed!"
        }
    }
}
