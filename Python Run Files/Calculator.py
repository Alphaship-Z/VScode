# -*- coding: utf-8 -*-
"""
Created on Fri Aug  4 22:07:17 2023

@author: admin
"""

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Cannot divide by zero"
    return x / y

def floordivision(x, y):
    return x//y

def modulus(x, y):
    return x % y 

def exponentiation(x, y): 
    return x**y 
             
def calculator():
    print("Select operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5.Floor Division")
    print("6. Modulus")
    print("7. Exponent") 
    
    while True:
        try:
            choice = int(input("Enter choice (1/2/3/4/5/6/7): "))
            if choice not in [1, 2, 3, 4, 5, 6, 7]:
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a valid choice.")

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    if choice == 1:
        print("Result:", add(num1, num2))
    elif choice == 2:
        print("Result:", subtract(num1, num2))
    elif choice == 3:
        print("Result:", multiply(num1, num2))
    elif choice == 4:
        print("Result:", divide(num1, num2))
    elif choice == 5:
        print("Result:", floordivision (num1 ,num2))
    elif choice == 6:
        print("Result:", modulus(num1, num2))
    elif choice == 7:
        print("Result:", exponentiation(num1, num2)) 
calculator()
5