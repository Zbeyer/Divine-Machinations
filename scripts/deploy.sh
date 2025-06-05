source $(dirname "$0")/config.sh
meteor npm install
meteor deploy machinationsmeteorapp.com --settings settings.json
