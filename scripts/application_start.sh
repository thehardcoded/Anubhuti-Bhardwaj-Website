#!/bin/bash

# give permission to the files inside /secure_docs directory

sudo chmod -R 777 /home/ubuntu/Anubhuti-Bhardwaj-Website

# navigate into current working directory

cd /home/ubuntu/Anubhuti-Bhardwaj-Website

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

# start our node app in the background using pm2

node app.js > app.out.log 2> app.err.log < /dev/null & 