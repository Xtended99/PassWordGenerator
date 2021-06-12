#!/bin/bash


declare -a git_repos=("CoffeeOverFlow" "HW_1_4_24_2021_AS" "LDAP-Attribute-Accounting-COMPOSER" "PassWordGame" "PassWordGenerator" "PreWork" "QuestionGame" "TestRepo" "The-One-Day-Scheduler" "WeatherDashBoard" "WorkReference" )


for (( i = 0; i < 11; i ++ ))
   {
    cd ${git_repos[i]}
    echo "" >> README.md;git add --all; git commit -m ${git_repos[i]}; git push origin main
    pwd
    cd ..
   }

## // CoffeeOverFlow
## // Git_Short_Cuts
## // HW_1_4_24_2021_AS
## // LDAP-Attribute-Accounting-COMPOSER
## // PassWordGame
## // PassWordGenerator
## // PreWork
## // QuestionGame
## // TestRepo
## // The-One-Day-Scheduler
## // WeatherDashBoard
## // WorkReference
