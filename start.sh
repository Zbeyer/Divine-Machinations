#!/bin/bash

SCRIPTS_DIR="$(dirname "$0")/scripts"

# Load private variables (assuming both scripts need the same config)
source "$SCRIPTS_DIR/config.sh"

echo "Select a script to run:"
echo "1) Run App.sh"
echo "2) Deploy App.sh"
read -p "Enter choice (1 or 2): " choice

if [[ "$choice" == "1" ]]; then
    bash "$SCRIPTS_DIR/run.sh"
elif [[ "$choice" == "2" ]]; then
    bash "$SCRIPTS_DIR/deploy.sh"
else
    echo "Invalid choice. Exiting..."
    exit 1
fi
