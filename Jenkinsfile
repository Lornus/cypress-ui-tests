pipeline{
      agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
stages{
  stage("Build"){
    steps{
        sh "echo 'Init'"
        script{
            sh "cd Tests"
             sh "npm i"
    }
    }
  }
    stage("Run tests"){
      steps{
        sh "echo 'run tests headless'"
      script{
            pwd && ls
            sh "npm run cl:test"
      }
      }
    }
  }
  post{
    cleanup{
      script{
        sh label: 'Cleanup working directoty', script: """
        echo "Cleaning work directory..."
        ls -a
        """
      }
    }
  }
    
}
