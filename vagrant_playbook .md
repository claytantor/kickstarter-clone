

2001  vagrant up
 2002  vagrant ssh


## Run `sudo apt-get install -y nodejs` to install Node.js 14.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn



 ===
     1  sudo apt-get update
    2  sudo apt-get install nodejs npm nodejs-legacy git mongodb
    3  sudo apt-get update
    4  sudo npm install -g npm



    5  sudo apt-get purge node
    6  sudo npm install npm@latest -g --ca=null

npm install npm@">1.4.0" -g --ca=null


    7  sudo apt-get update
    8  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    9  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   10  sudo apt-get install -y nodejs
   11  sudo apt-get install nodejs
   12  sudo apt-get install gcc g++ make
   13  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
   14  echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   15  sudo apt-get update && sudo apt-get install yarn
   16  sudo npm install -g nodemon forever
   17  sudo service mongodb start
   18  cd /vagrant
       npm i
   19  npm start
   20  npm i
   21  history    