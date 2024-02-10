# -*- coding: utf-8 -*-
"""
Created on Wed Aug 30 22:04:18 2023

@author: admin
"""

Prize = float(input("Enter your Prize amount: "))

# Calculate 30% of the number
percentage = 30
tax = (percentage / 100) * Prize

# Calculate the tax-free amount
tax_free = Prize - tax

print("You would get:", tax_free)

