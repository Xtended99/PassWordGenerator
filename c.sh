#!/bin/bash


for (( i = 0; i < 20; i ++ ))
   {
    echo "" >> README.md;git add --all; git commit -m "test_1"; git push origin main
   }
