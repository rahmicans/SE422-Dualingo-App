<!-- Slide number: 1 -->
# Starting out with Python
Fifth Edition

![Starting out with Python, Fifth edition by Tony Gaddis](Picture11.jpg)
Chapter 5
Functions
Copyright © 2021, 2018, 2015 Pearson Education, Inc. All Rights Reserved

<!-- Slide number: 2 -->
# Topics (1 of 2)
Introduction to Functions
Defining and Calling a Void Function
Local Variables
Passing Arguments to Functions
Global Variables and Global Constants

<!-- Slide number: 3 -->
# Topics (2 of 2)
Introduction to Value-Returning Functions: Generating Random Numbers
Writing Your Own Value-Returning Functions
The math Module
Storing Functions in Modules

<!-- Slide number: 4 -->
# Introduction to Functions (1 of 2)
Function: group of statements within  a program that perform as specific task
Usually one task of a large program
Functions can be executed in order to perform overall program task
Known as divide and conquer approach
Modularized program: program wherein each task within the program is in its own function

<!-- Slide number: 5 -->
# Introduction to Functions (2 of 2)

![A program is one long, complex sequence of statements. There are 24 statements. In this program the task has been divided into smaller tasks, each of which is performed by a separate function.](Picture1.jpg)
Figure 5-1 Using functions to divide and conquer a large task

<!-- Slide number: 6 -->
# Void Functions and Value-Returning Functions
A void function:
Simply executes the statements it contains and then terminates.
A value-returning function:
Executes the statements it contains, and then it returns a value back to the statement that called it.
The input, int, and float functions are examples of value-returning functions.

<!-- Slide number: 7 -->
# Defining and Calling a Function (1 of 5)
Functions are given names
Function naming rules:
Cannot use keywords as a function name
Cannot contain spaces
First character must be a letter or underscore
All other characters must be a letter, number or underscore
Uppercase and lowercase characters are distinct

<!-- Slide number: 8 -->
# Defining and Calling a Function (2 of 5)
Function name should be descriptive of the task carried out by the function
Often includes a verb
Function definition: specifies what function does
 def function_name():
		statement
		statement

<!-- Slide number: 9 -->
# Defining and Calling a Function (3 of 5)
Function header: first line of function
Includes keyword def and function name, followed by parentheses and colon
Block: set of statements that belong together as a group
Example: the statements included in a function

<!-- Slide number: 10 -->
# Defining and Calling a Function (4 of 5)
Call a function to execute it
When a function is called:
Interpreter jumps to the function and executes statements in the block
Interpreter jumps back to part of program that called the function
Known as function return

<!-- Slide number: 11 -->
# Defining and Calling a Function (5 of 5)
main function: called when the program starts
Calls other functions when they are needed
Defines the mainline logic of the program

<!-- Slide number: 12 -->
# Indentation in Python
Each block must be indented
Lines in block must begin with the same number of spaces
Use tabs or spaces to indent lines in a block, but not both as this can confuse the Python interpreter
IDLE automatically indents the lines in a block
Blank lines that appear in a block are ignored

<!-- Slide number: 13 -->
# Using the pass Keyword
You can use the pass keyword to create empty functions
The pass keyword is ignored by the Python interpreter
This can be helpful when designing a program
def step1():
    pass

def step2():
    pass

<!-- Slide number: 14 -->
# Local Variables (1 of 2)
Local variable: variable that is assigned a value inside a function
Belongs to the function in which it was created
Only statements inside that function can access it, error will occur if another function tries to access the variable
Scope: the part of a program in which a variable may be accessed
For local variable: function in which created

<!-- Slide number: 15 -->
# Local Variables (2 of 2)
Local variable cannot be accessed by statements inside its function which precede its creation
Different functions may have local variables with the same name
Each function does not see the other function’s local variables, so no confusion

<!-- Slide number: 16 -->
# Passing Arguments to Functions (1 of 4)
Argument: piece of data that is sent into a function
Function can use argument in calculations
When calling the function, the argument is placed in parentheses following the function name

<!-- Slide number: 17 -->
# Passing Arguments to Functions (2 of 4)

![The lines read as follows. Line 1. d e f main left parenthesis right parenthesis colon. Line 2, indented once. value equals 5. Line 3, indented once. show underscore double left parenthesis value right parenthesis. Line 10, indented once. d e f show underscore double left parenthesis number right parenthesis colon. Line 11, indented twice. result equals number asterisk 2. Line 12, indented twice. print left parenthesis result right parenthesis. An arrow from value in line 3 points to number in line 10.](Picture2.jpg)
Figure 5-13 The value variable is passed as an argument

<!-- Slide number: 18 -->
# Passing Arguments to Functions (3 of 4)
Parameter variable: variable that is assigned the value of an argument when the function is called
The parameter and the argument reference the same value
General format:
def function_name(parameter):
Scope of a parameter: the function in which the parameter is used

<!-- Slide number: 19 -->
# Passing Arguments to Functions (4 of 4)

![The lines read as follows. Line 1. d e f main left parenthesis right parenthesis colon. Line 2, indented once. value equals 5. Line 3, indented once. show underscore double left parenthesis value right parenthesis. Line 10, indented once. d e f show underscore double left parenthesis number right parenthesis colon. Line 11, indented twice. result equals number asterisk 2. Line 12, indented twice. print left parenthesis result right parenthesis. An arrow from value in line 3 points to number in line 10. A number, 5, in a box is labeled, value and number.](Picture3.jpg)
Figure 5-14 The value variable and the number parameter reference the same value

<!-- Slide number: 20 -->
# Passing Multiple Arguments (1 of 2)
Python allows writing a function that accepts multiple arguments
Parameter list replaces single parameter
Parameter list items separated by comma
Arguments are passed by position to corresponding parameters
First parameter receives value of first argument, second parameter receives value of second argument, etc.

<!-- Slide number: 21 -->
# Passing Multiple Arguments (2 of 2)

![Two arguments in a computer code.](Picture2.jpg)
Figure 5-16 Two arguments passed to two parameters

<!-- Slide number: 22 -->
# Making Changes to Parameters (1 of 3)
Changes made to a parameter value within the function do not affect the argument
Known as pass by value
Provides a way for unidirectional communication between one function and another function
Calling function can communicate with called function

<!-- Slide number: 23 -->
# Making Changes to Parameters (2 of 3)

![Computer code. The code has 10 lines.](Picture2.jpg)
Figure 5-17 The value variable is passed to the change_me function

<!-- Slide number: 24 -->
# Making Changes to Parameters (3 of 3)
Figure 5-18
The value variable passed to the change_me function cannot be changed by it

![Computer code. The code has 10 lines.](Picture1.jpg)
Figure 5-18 The value variable is passed to the change_me function

<!-- Slide number: 25 -->
# Keyword Arguments
Keyword argument: argument that specifies which parameter the value should be passed to
Position when calling function is irrelevant
General Format:
function_name(parameter=value)
Possible to mix keyword and positional arguments when calling a function
Positional arguments must appear first

<!-- Slide number: 26 -->
# Global Variables and Global Constants (1 of 2)
Global variable: created by assignment statement written outside all the functions
Can be accessed by any statement in the program file, including from within a function
If a function needs to assign a value to the global variable, the global variable must be redeclared within the function
General format: global variable_name

<!-- Slide number: 27 -->
# Global Variables and Global Constants (2 of 2)
Reasons to avoid using global variables:
Global variables making debugging difficult
Many locations in the code could be causing a wrong variable value
Functions that use global variables are usually dependent on those variables
Makes function hard to transfer to another program
Global variables make a program hard to understand

<!-- Slide number: 28 -->
# Global Constants
Global constant: global name that references a value that cannot be changed
Permissible to use global constants in a program
To simulate global constant in Python, create global variable and do not re-declare it within functions

<!-- Slide number: 29 -->
# Introduction to Value-Returning Functions: Generating Random Numbers
void function: group of statements within a program for performing a specific task
Call function when you need to perform the task
Value-returning function: similar to void function, returns a value
Value returned to part of program that called the function when function finishes executing

<!-- Slide number: 30 -->
# Standard Library Functions and the import Statement (1 of 3)
Standard library: library of pre-written functions that comes with Python
Library functions perform tasks that programmers commonly need
Example: print, input, range
Viewed by programmers as a “black box”
Some library functions built into Python interpreter
To use, just call the function

<!-- Slide number: 31 -->
# Standard Library Functions and the import Statement (2 of 3)
Modules: files that stores functions of the standard library
Help organize library functions not built into the interpreter
Copied to computer when you install Python
To call a function stored in a module, need to write an import statement
Written at the top of the program
Format: import module_name

<!-- Slide number: 32 -->
# Standard Library Functions and the import Statement (3 of 3)

![An input is given to a library function, which yields an output.](Picture3.jpg)
Figure 5-19 A library function viewed as a black box

<!-- Slide number: 33 -->
# Generating Random Numbers (1 of 5)
Random number are useful in a lot of programming tasks
random module: includes library functions for working with random numbers
Dot notation: notation for calling a function belonging to a module
Format: module_name.function_name()

<!-- Slide number: 34 -->
# Generating Random Numbers (2 of 5)
randint function: generates a random number in the range provided by the arguments
Returns the random number to part of program that called the function
Returned integer can be used anywhere that an integer would be used
You can experiment with the function in interactive mode

<!-- Slide number: 35 -->
# Generating Random Numbers (3 of 5)

![Number = random period r and i n t left parenthesis 1 comma 100 right parenthesis. 1 and 100 are labeled, arguments. random period r and i n t left parenthesis 1 comma 100 right parenthesis is labeled, function call.](Picture2.jpg)
Figure 5-20 A statement that calls the random function

<!-- Slide number: 36 -->
# Generating Random Numbers (4 of 5)

![Number = random period r and i n t left parenthesis 1 comma 100 right parenthesis. An arrow labeled, some number, points from i n t to number. A text reads, a random number in the range of 1 through 100 will be assigned to the number variable.](Picture3.jpg)
Figure 5-21 The random function returns a value

![Print left parenthesis random period r and i n t left parenthesis 1 comma 10 right parenthesis right parenthesis. A text reads, an arrow labeled, some number points from and to print. A random number in the range of 1 through 10 will be displayed.](Picture4.jpg)
Figure 5-22 Displaying a random number

<!-- Slide number: 37 -->
# Generating Random Numbers (5 of 5)
randrange function: similar to range function, but returns randomly selected integer from the resulting sequence
Same arguments as for the range function
random function: returns a random float in the range of 0.0 and 1.0
Does not receive arguments
uniform function: returns a random float but allows user to specify range

<!-- Slide number: 38 -->
# Random Number Seeds
Random number created by functions in random module are actually pseudo-random numbers
Seed value: initializes the formula that generates random numbers
Need to use different seeds in order to get different series of random numbers
By default uses system time for seed
Can use random.seed() function to specify desired seed value

<!-- Slide number: 39 -->
# Writing Your Own Value-Returning Functions (1 of 2)
To write a value-returning function, you write a simple function and add one or more return statements
Format: return expression
The value for expression will be returned to the part of the program that called the function
The expression in the return statement can be a complex expression, such as a sum of two variables or the result of another value-returning function

<!-- Slide number: 40 -->
# Writing Your Own Value-Returning Functions (2 of 2)

![The lines read as follows. Line 1. d e f sum left parenthesis n u m 1 comma n u m 2 right parenthesis colon. Line 2, indented once. result equals n u m 1 plus n u m 2. Line 3, indented once. return result. Sum in line 1 is labeled, the name of this function is sum. N u m 1 and n u m 2 in line 1 are labeled, n u m 1 and n u m 2 are parameters. Return result in line 3 is labeled, this function returns the value referenced by the result variable.](Picture3.jpg)
Figure 5-23 Parts of the function

<!-- Slide number: 41 -->
# How to Use Value-Returning Functions
Value-returning function can be useful in specific situations
Example: have function prompt user for input and return the user’s input
Simplify mathematical expressions
Complex calculations that need to be repeated throughout the program
Use the returned value
Assign it to a variable or use as an argument in another function

<!-- Slide number: 42 -->
# Returning Strings
You can write functions that return strings
For example:
def get_name():
    # Get the user’s name.
    name = input(‘Enter your name:’)
    # Return the name.
    return name

<!-- Slide number: 43 -->
# Returning Boolean Values
Boolean function: returns either True or False
Use to test a condition such as for decision and repetition structures
Common calculations, such as whether a number is even, can be easily repeated by calling a function
Use to simplify complex input validation code

<!-- Slide number: 44 -->
# Returning Multiple Values
In Python, a function can return multiple values
Specified after the return statement separated by commas
Format: return expression1,
expression2, etc.
When you call such a function in an assignment statement, you need a separate variable on the left side of the = operator to receive each returned value

<!-- Slide number: 45 -->
# Returning None From a Function
The special value None means “no value”
Sometimes it is useful to return None from a function to indicate that an error has occurred
def divide(num1, num2):
    if num2 == 0:
        result = None
    else:
        result = num1 / num2
    return result

<!-- Slide number: 46 -->
# The math Module (1 of 3)
math module: part of standard library that contains functions that are useful for performing mathematical calculations
Typically accept one or more values as arguments, perform mathematical operation, and return the result
Use of module requires an import math statement

<!-- Slide number: 47 -->
# The math Module (2 of 3)
Table 5-2 Many of the functions in the math module
| math Module Function | Description |
| --- | --- |
| acos(x) | Returns the arc cosine of x, in radians. |
| asin(x) | Returns the arc sine of x, in radians. |
| atan(x) | Returns the arc tangent of x, in radians. |
| ceil(x) | Returns the smallest integer that is greater than or equal to x. |
| cos(x) | Returns the cosine of x in radians. |
| degrees(x) | Assuming x is an angle in radians, the function returns the angle converted to degrees. |
| exp(x) | Returns ex |
| floor(x) | Returns the largest integer that is less than or equal to x. |
| hypot(x, y) | Returns the length of a hypotenuse that extends from (0, 0) to (x, y). |
| log(x) | Returns the natural logarithm of x. |
| log10(x) | Returns the base-10 logarithm of x. |
| radians(x) | Assuming x is an angle in degrees, the function returns the angle converted to radians. |
| sin(x) | Returns the sine of x in radians. |
| sqrt(x) | Returns the square root of x. |
| tan(x) | Returns the tangent of x in radians. |

<!-- Slide number: 48 -->
# The math Module (3 of 3)
The math module defines variables pi and e, which are assigned the mathematical values for pi and e
Can be used in equations that require these values, to get more accurate results
Variables must also be called using the dot notation
Example:
circle_area = math.pi * radius**2

<!-- Slide number: 49 -->
# Storing Functions in Modules (1 of 2)
In large, complex programs, it is important to keep code organized
Modularization: grouping related functions in modules
Makes program easier to understand, test, and maintain
Make it easier to reuse code for multiple different programs
Import the module containing the required function to each program that needs it

<!-- Slide number: 50 -->
# Storing Functions in Modules (2 of 2)
Module is a file that contains Python code
Contains function definition but does not contain calls to the functions
Importing programs will call the functions
Rules for module names:
File name should end in .py
Cannot be the same as a Python keyword
Import module using import statement

<!-- Slide number: 51 -->
# Menu Driven Programs
Menu-driven program: displays a list of operations on the screen, allowing user to select the desired operation
List of operations displayed on the screen is called a menu
Program uses a decision structure to determine the selected menu option and required operation
Typically repeats until the user quits

<!-- Slide number: 52 -->
# Conditionally Executing the main Function (1 of 3)
It is possible to create a module that can be run as a standalone program or imported into another program
Suppose Program A defines several functions that you want to use in Program B
So, you import Program A into Program B
However, you do not want Program A to execute its main function when you import it

<!-- Slide number: 53 -->
# Conditionally Executing the main Function (2 of 3)
In the aforementioned scenario, you write each module so it executes its main function only when the module is being run as the main program
When a source code file is loaded into the Python interpreter, a special variable called __name__ is created
If the source code file has been imported as a module, the __name__ variable will be set to the name of the module.
If the source code file is being executed as the main program, the __name__ variable will be set to the value '__main__'.

<!-- Slide number: 54 -->
# Conditionally Executing the main Function (3 of 3)
To prevent the main function from being executed when the file is imported as a module, you can conditionally execute main

def main():
    statement
    statement

def my_function():
    statement
    statement

if __name__ == '__main__':
    main()

<!-- Slide number: 55 -->
# Summary (1 of 2)
This chapter covered:
The advantages of using functions
The syntax for defining and calling a function
Use of local variables and their scope
Syntax and limitations of passing arguments to functions
Global variables, global constants, and their advantages and disadvantages

<!-- Slide number: 56 -->
# Summary (2 of 2)
Value-returning functions, including:
Writing value-returning functions
Using value-returning functions
Functions returning multiple values
Using library functions and the import statement
Modules, including:
The random and math modules
Grouping your own functions in modules
