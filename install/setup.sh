#!/bin/bash

# Copy and run all the dependencies
source deps.sh

setup_project (){
#  Download the zip file using curl
curl -L -o weiss.zip https://github.com/weissthorn/weiss/archive/refs/tags/v1.0.1.zip

# Step 2: Unzip into a temporary directory
unzip weiss.zip -d weiss_temp

# Step 3: Create the 'weiss' folder and move the contents into it
mkdir weiss
mv weiss_temp/weiss-1.0.1/* weiss/

# Step 4: Clean up the temporary folder and zip file
rm -rf weiss_temp
rm weiss.zip
cd weiss
yarn setup
yarn live
}

setup_project
