pipeline{
  agent any

stages{
  stage("Init"){
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
