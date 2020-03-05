module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-15-206-195-185.ap-south-1.compute.amazonaws.com',
      key: '~/.ssh/newkey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ecomerse/dealscart-backend.git',
      path: '/home/ubuntu/dealscart-backend',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
