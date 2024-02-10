# -*- coding: utf-8 -*-
"""
Created on Thu Aug 17 20:50:04 2023

@author: admin
"""

Age = int(input("Please tell your age: "))

if 88 > Age >= 18:
    print("You are eligible for driving")
elif Age >= 89:
    print("You will probably cause an accident. Better to stay away")
else:
    print("You are not eligible for driving")
    
