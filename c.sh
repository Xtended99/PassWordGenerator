#!/bin/bash


## declare -a git_repos=( "CoffeeOverFlow" "HW_1_4_24_2021_AS" "PassWordGenerator" "QuestionGame" "TestRepo" "The-One-Day-Scheduler" "WeatherDashBoard" "WorkReference" )
declare -a git_repos=( "CoffeeOverFlow" "HW_1_4_24_2021_AS" "PassWordGenerator" "QuestionGame" "TestRepo" "The-One-Day-Scheduler" "WeatherDashBoard" "WorkReference" )


for (( j = 0; j <= 299; j++ ))
   {
    for (( i = 0; i < 8; i ++ ))
       {
        echo $( pwd )
        sync
        cd ${git_repos[i]}
        echo $( pwd )
        sync
        echo "" >> README.md;git add --all; git commit -m ${git_repos[i]}; git push origin main
        echo $( pwd )
        cd ..
        echo $( pwd )
       }
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

