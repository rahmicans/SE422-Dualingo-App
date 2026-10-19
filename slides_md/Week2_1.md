<!-- Slide number: 1 -->
# Python Basics
Basic Python syntax, data types, variables, operators

SE 422
Introduction to Data Science
Using Python, Input, Processing, and Output, Decision Structures and Boolean Logic

Copyright © 2022 Pearson Education, Ltd. All Rights Reserved.

<!-- Slide number: 2 -->
# Topics (1 of 3)
Using Python
Designing a Program
Input, Processing, and Output
Displaying Output with print Function
Comments
Variables
Reading Input from the Keyboard
Performing Calculations

<!-- Slide number: 3 -->
# Topics (2 of 3)
String Concatenation
More About The print Function
Displaying Formatted Output
Named Constants
The if Statement
The if-else Statement
Comparing Strings

<!-- Slide number: 4 -->
# Topics (3 of 3)
Nested Decision Structures and the if-elif-else Statement
Logical Operators
Boolean Variables

<!-- Slide number: 5 -->
# Using Python
Python must be installed and configured prior to use
One of the items installed is the Python interpreter
Python interpreter can be used in two modes:
Interactive mode: enter statements on keyboard
Script mode: save statements in Python script

<!-- Slide number: 6 -->
# Interactive Mode
When you start Python in interactive mode, you will see a prompt
Indicates the interpreter is waiting for a Python statement to be typed
Prompt reappears after previous statement is executed
Error message displayed If you incorrectly type a statement
Good way to learn new parts of Python

<!-- Slide number: 7 -->
# Writing Python Programs and Running Them in Script Mode
Statements entered in interactive mode are not saved as a program
To have a program use script mode
Save a set of Python statements in a file
The filename should have the .py extension
To run the file, or script, type
	python filename
	at the operating system command line

<!-- Slide number: 8 -->
# The IDLE Programming Environment
IDLE (Integrated Development Program): single program that provides tools to write, execute and test a program
Automatically installed when Python language is installed
Runs in interactive mode
Has built-in text editor with features designed to help write Python programs

<!-- Slide number: 9 -->
# Strings and String Literals
String: sequence of characters that is used as data
String literal: string that appears in actual code of a program
Must be enclosed in single (') or double (") quote marks
String literal can be enclosed in triple quotes (''' or """)
Enclosed string can contain both single and double quotes and can have multiple lines

<!-- Slide number: 10 -->
# Comments
Comments: notes of explanation within a program
Ignored by Python interpreter
Intended for a person reading the program’s code
Begin with a # character
End-line comment: appears at the end of a line of code
Typically explains the purpose of that line

<!-- Slide number: 11 -->
# Variables
Variable: name that represents a value stored in the computer memory
Used to access and manipulate data stored in memory
A variable references the value it represents
Assignment statement: used to create a variable and make it reference data
General format is variable = expression
Example: age = 29
Assignment operator: the equal sign (=)

<!-- Slide number: 12 -->
# Variables (cont’d.)
In assignment statement, variable receiving value must be on left side
A variable can be passed as an argument to a function
Variable name should not be enclosed in quote marks
You can only use a variable if a value is assigned to it

<!-- Slide number: 13 -->
# Variable Naming Rules
Rules for naming variables in Python:
Variable name cannot be a Python key word
Variable name cannot contain spaces
First character must be a letter or an underscore
After first character may use letters, digits, or underscores
Variable names are case sensitive
Variable name should reflect its use

<!-- Slide number: 14 -->
# Displaying Multiple Items with the print Function
Python allows one to display multiple items with a single call to print
Items are separated by commas when passed as arguments
Arguments displayed in the order they are passed to the function
Items are automatically separated by a space when displayed on screen

<!-- Slide number: 15 -->
# Variable Reassignment
Variables can reference different values while program is running
Garbage collection: removal of values that are no longer referenced by variables
Carried out by Python interpreter
A variable can refer to item of any type
Variable that has been assigned to one type can be reassigned to another type

<!-- Slide number: 16 -->
# Numeric Data Types, Literals, and the str Data Type
Data types: categorize value in memory
e.g., int for integer, float for real number, str used for storing strings in memory
Numeric literal: number written in a program
No decimal point considered int, otherwise, considered float
Some operations behave differently depending on data type

<!-- Slide number: 17 -->
# Reassigning a Variable to a Different Type
A variable in Python can refer to items of any type

![A variable, x, references the integer value, 99.](Picture2.jpg)
Figure 2-7 The variable x references an integer

![A variable, x, an integer value, 99, and a statement, take me to your leader, are present. The variable, x, references the statement, take me to your leader.](Picture3.jpg)
Figure 2-8 The variable x references a string

<!-- Slide number: 18 -->
# Reading Input from the Keyboard
Most programs need to read input from the user
Built-in input function reads input from keyboard
Returns the data as a string
Format: variable = input(prompt)
prompt is typically a string instructing user to enter a value
Does not automatically display a space after the prompt

<!-- Slide number: 19 -->
# Reading Numbers with the input Function
input function always returns a string
Built-in functions convert between data types
int(item) converts item to an int
float(item) converts item to a float
Type conversion only works if item is valid numeric value, otherwise, throws exception

<!-- Slide number: 20 -->
# Performing Calculations
Math expression: performs calculation and gives a value
Math operator: tool for performing calculation
Operands: values surrounding operator
Variables can be used as operands
Resulting value typically assigned to variable
Two types of division:
/ operator performs floating point division
// operator performs integer division
Positive results truncated, negative rounded away from zero

<!-- Slide number: 21 -->
# Operator  Precedence and Grouping with Parentheses
Python operator precedence:
Operations enclosed in parentheses
Forces operations to be performed before others
Exponentiation (**)
Multiplication (*), division (/ and //), and remainder (%)
Addition (+) and subtraction (-)
Higher precedence performed first
Same precedence operators execute from left to right

<!-- Slide number: 22 -->
# The Exponent Operator and the Remainder Operator
Exponent operator (**): Raises a number to a power
x ** y = xy
Remainder operator (%): Performs division and returns the remainder
a.k.a. modulus operator
e.g., 4%2=0, 5%2=1
Typically used to convert times and distances, and to detect odd or even numbers

<!-- Slide number: 23 -->
# Converting Math Formulas to Programming Statements
Operator required for any mathematical operation
When converting mathematical expression to programming statement:
May need to add multiplication operators
May need to insert parentheses

<!-- Slide number: 24 -->
# Mixed-Type Expressions and Data Type Conversion
Data type resulting from math operation depends on data types of operands
Two int values: result is an int
Two float values: result is a float
int and float: int temporarily converted to float, result of the operation is a float
Mixed-type expression
Type conversion of float to int causes truncation of fractional part

<!-- Slide number: 25 -->
# Breaking Long Statements into Multiple Lines (1 of 2)
Long statements cannot be viewed on screen without scrolling and cannot be printed without cutting off
Multiline continuation character (\): Allows to break a statement into multiple lines
result = var1 * 2 + var2 * 3 + \
         var3 * 4 + var4 * 5

<!-- Slide number: 26 -->
# Breaking Long Statements into Multiple Lines (2 of 2)
Any part of a statement that is enclosed in parentheses can be broken without the line continuation character.
print("Monday's sales are", monday,
      "and Tuesday's sales are", tuesday,
      "and Wednesday's sales are", Wednesday)

total = (value1 + value2 +
         value3 + value4 +
         value5 + value6)

<!-- Slide number: 27 -->
# String Concatenation (1 of 2)
To append one string to the end of another string
Use the + operator to concatenate strings
>>> message = 'Hello ' + 'world'
>>> print(message)
Hello world
>>>

<!-- Slide number: 28 -->
# String Concatenation (2 of 2)
You can use string concatenation to break up a long string literal
print('Enter the amount of ' +
      'sales for each day and ' +
      'press Enter.')
This statement will display the following:
Enter the amount of sales for each day and press Enter.

<!-- Slide number: 29 -->
# Implicit String Literal Concatenation (1 of 2)
Two or more string literals written adjacent to each other are implicitly concatenated into a single string

>>> my_str = 'one' 'two' 'three'
>>> print(my_str)
onetwothree

<!-- Slide number: 30 -->
# Implicit String Literal Concatenation (2 of 2)
print('Enter the amount of '
      'sales for each day and '
      'press Enter.')
This statement will display the following:
Enter the amount of sales for each day and press Enter.

<!-- Slide number: 31 -->
# More About The print Function (1 of 2)
print function displays line of output
Newline character at end of printed data
Special argument end='delimiter' causes print to place delimiter at end of data instead of newline character
print function uses space as item separator
Special argument sep='delimiter' causes print to use delimiter as item separator

<!-- Slide number: 32 -->
# More About The print Function (2 of 2)
Special characters appearing in string literal
Preceded by backslash (\)
Examples: newline (\n), horizontal tab (\t)
Treated as commands embedded in string

<!-- Slide number: 33 -->
# Displaying Formatted Output with F-strings (1 of 8)
An f-string is a special type of string literal that is prefixed with the letter f

F-strings support placeholders for variables
>>> print(f'Hello world')
Hello world
>>> name = 'Johnny'
>>> print(f'Hello {name}.')
Hello Johnny.

<!-- Slide number: 34 -->
# Displaying Formatted Output with F-strings (2 of 8)
Placeholders can also be expressions that are evaluated

>>> print(f'The value is {10 + 2}.')
The value is 12.
>>> val = 10
>>> print(f'The value is {val + 2}.')
The value is 12.

<!-- Slide number: 35 -->
# Displaying Formatted Output with F-strings (3 of 8)
Format specifiers can be used with placeholders

.2f means:
round the value to 2 decimal places
display the value as a floating-point number

>> num = 123.456789
>> print(f'{num:.2f}')
123.46
>>>

<!-- Slide number: 36 -->
# Displaying Formatted Output with F-strings (4 of 8)
Other examples:

>> num = 1000000.00
>> print(f'{num:,.2f}')
1,000,000.00

>>> discount = 0.5
>>> print(f'{discount:.0%}')
50%

<!-- Slide number: 37 -->
# Displaying Formatted Output with F-strings (5 of 8)
Other examples:

>> num = 123456789
>> print(f'{num:,d}')
123,456,789

>>> num = 12345.6789
>>> print(f'{num:.2e}')
1.23e+04

<!-- Slide number: 38 -->
# Displaying Formatted Output with F-strings (6 of 8)
Specifying a minimum field width:

>>> num = 12345.6789
>>> print(f'The number is {num:12,.2f}')
The number is   12,345.68

Field width = 12

The number is   12,345.68

Field width = 12

<!-- Slide number: 39 -->
# Displaying Formatted Output with F-strings (7 of 8)
Aligning values within a field
Use < for left alignment
Use > for right alignment
Use ^ for center alignment
Examples:
print(f'{num:<20.2f}')
print(f'{num:>20.2f}')
print(f'{num:^20.2f}')

<!-- Slide number: 40 -->
# Displaying Formatted Output with F-strings (8 of 8)
The order of designators in a format specifier
When using multiple designators in a format specifier, write them in this order:

Example:
print(f'{number:^10,.2f}')

[alignment][width][,][.precision][type]

<!-- Slide number: 41 -->
# Magic Numbers
A magic number is an unexplained numeric value that appears in a program’s code. Example:amount = balance * 0.069
What is the value 0.069? An interest rate? A fee percentage? Only the person who wrote the code knows for sure.

<!-- Slide number: 42 -->
# The Problem with Magic Numbers
It can be difficult to determine the purpose of the number.
If the magic number is used in multiple places in the program, it can take a lot of effort to change the number in each location, should the need arise.
You take the risk of making a mistake each time you type the magic number in the program’s code.
For example, suppose you intend to type 0.069, but you accidentally type .0069. This mistake will cause mathematical errors that can be difficult to find.

<!-- Slide number: 43 -->
# Named Constants
You should use named constants instead of magic numbers.
A named constant is a name that represents a value that does not change during the program's execution.
Example:
	INTEREST_RATE = 0.069
This creates a named constant named INTEREST_RATE, assigned the value 0.069. It can be used instead of the magic number:amount = balance * INTEREST_RATE

<!-- Slide number: 44 -->
# Advantages of Using Named Constants
Named constants make code self-explanatory (self-documenting)
Named constants make code easier to maintain (change the value assigned to the constant, and the new value takes effect everywhere the constant is used)
Named constants help prevent typographical errors that are common when using magic numbers

<!-- Slide number: 45 -->
# The if Statement (1 of 4)
Control structure: logical design that controls order in which set of statements execute
Sequence structure: set of statements that execute in the order they appear
Decision structure: specific action(s) performed only if a condition exists
Also known as selection structure

<!-- Slide number: 46 -->
# The if Statement (2 of 4)
In flowchart, diamond represents true/false condition that must be tested
Actions can be conditionally executed
Performed only when a condition is true
Single alternative decision structure: provides only one alternative path of execution
If condition is not true, exit the structure

<!-- Slide number: 47 -->
# The if Statement (3 of 4)

![In a flowchart, a decision box, cold outside, indicates the conditions true and false. If the condition is true, the action, wear a coat, is implemented. If the condition is false, the action is skipped.](Picture2.jpg)
Figure 3-1 A simple decision structure

<!-- Slide number: 48 -->
# The if Statement (4 of 4)
Python syntax:
if condition:
	Statement
	Statement
First line known as the if clause
Includes the keyword if followed by condition
The condition can be true or false
When the if statement executes, the condition is tested, and if it is true the block statements are executed. otherwise, block statements are skipped

<!-- Slide number: 49 -->
# Boolean Expressions and Relational Operators (1 of 5)
Boolean expression: expression tested by if statement to determine if it is true or false
Example: a > b
 true if a is greater than b; false otherwise
Relational operator: determines whether a specific relationship exists between two values
Example: greater than (>)

<!-- Slide number: 50 -->
# Boolean Expressions and Relational Operators (2 of 5)
>= and <= operators test more than one relationship
It is enough for one of the relationships to exist for the expression to be true
== operator determines whether the two operands are equal to one another
Do not confuse with assignment operator (=)
!= operator determines whether the two operands are not equal

<!-- Slide number: 51 -->
# Boolean Expressions and Relational Operators (3 of 5)
Table 3-2 Boolean expressions using relational operators
| Expression | Meaning |
| --- | --- |
| x > y | Is x greater than y? |
| x < y | Is x less than y? |
| x >= y | Is x greater than or equal to y? |
| x <= y | Is x less than or equal to y? |
| x == y | Is x equal to y? |
| x != y | Is x not equal to y? |

<!-- Slide number: 52 -->
# What will be the outputs?
print(5==5)
print(5!=5)
print(4>5)
print(4<5)
print(4<=5)
print(4>=5)
print(4<=5<3<1)

### Notes:

<!-- Slide number: 53 -->
# Boolean Expressions and Relational Operators (4 of 5)
Using a Boolean expression with the > relational operator

![In a flowchart, a decision box, sales greater than 50000, indicates the conditions true and false. If the condition is true, the action, bonus = 500.0, is implemented. If the condition is false, the action is skipped.](Picture4.jpg)
Figure 3-3 Example decision structure

<!-- Slide number: 54 -->
# Boolean Expressions and Relational Operators (5 of 5)
Any relational operator can be used in a decision block
Example: if balance == 0
Example: if payment != balance
It is possible to have a block inside another block
Example: if statement inside a function
Statements in inner block must be indented with respect to the outer block

<!-- Slide number: 55 -->
# The if-else Statement (1 of 3)
Dual alternative decision structure: two possible paths of execution
One is taken if the condition is true, and the other if the condition is false
Syntax: 	if condition:
				statements
			else:
				other statements
if clause and else clause must be aligned
Statements must be consistently indented

<!-- Slide number: 56 -->
# The if-else Statement (2 of 3)

![In a flowchart, a decision box, temperature less than 40, indicates the conditions true and false. If the condition is true, display, a little cold, isn’t it. If the condition is false, display, nice weather we’re having.](Picture6.jpg)
Figure 3-5 A dual alternative decision structure

<!-- Slide number: 57 -->
# The if-else Statement (3 of 3)

![The syntax for the if else clause is as follows. Line 1. if condition semicolon. Line 2. Indented once, statement. Line 3. Indented once, statement. Line 4. Indented once, et cetera. Line 5. else semicolon. Line 6. Indented once, statement. Line 7. Indented once, statement. Line 8. Indented once, et cetera.](Picture6.jpg)
Figure 3-6 Conditional execution in an if-else statement

<!-- Slide number: 58 -->
# Comparing Strings (1 of 2)
Strings can be compared using the == and != operators
String comparisons are case sensitive
Strings can be compared using >, <, >=, and <=
Compared character by character based on the ASCII values for each character
If shorter word is substring of longer word, longer word is greater than shorter word

<!-- Slide number: 59 -->
# Comparing Strings (2 of 2)

![An illustration displays the comparison of the character codes for the strings Mary and Mark using ASCII codes.](Picture5.jpg)
Figure 3-9 Comparing each character in a string

<!-- Slide number: 60 -->
# Logical Operators
Logical operators: operators that can be used to create complex Boolean expressions
and operator and or operator: binary operators, connect two Boolean expressions into a compound Boolean expression
not operator: unary operator, reverses the truth of its Boolean operand

<!-- Slide number: 61 -->
# The and Operator
Takes two Boolean expressions as operands
Creates compound Boolean expression that is true only when both sub expressions are true
Can be used to simplify nested decision structures
Truth table for the and operator
| Value of the Expression | Expression |
| --- | --- |
| false | false and false |
| false | false and true |
| false | true and false |
| true | true and true |

<!-- Slide number: 62 -->
# What will be the output?
un = ”arda"
pwd = "12345"
print(un==”arda" and pwd=="12345")

<!-- Slide number: 63 -->
# The or Operator
Takes two Boolean expressions as operands
Creates compound Boolean expression that is true when either of the sub expressions is true
Can be used to simplify nested decision structures
Truth table for the or operator
| Value of the Expression | Expression |
| --- | --- |
| false | false or false |
| true | false or true |
| true | true or false |
| true | true or true |

<!-- Slide number: 64 -->
# What will be the output?
hour = 14
temp = 28
print(hour<15 or temp>=28)

<!-- Slide number: 65 -->
# Short-Circuit Evaluation
Short circuit evaluation: deciding the value of a compound Boolean expression after evaluating only one sub expression
Performed by the or and and operators
For or operator: If left operand is true, compound expression is true. Otherwise, evaluate right operand
For and operator: If left operand is false, compound expression is false. Otherwise, evaluate right operand

<!-- Slide number: 66 -->
# The not Operator
Takes one Boolean expressions as operand and reverses its logical value
Sometimes it may be necessary to place parentheses around an expression to clarify to what you are applying the not operator
Truth table for the not operator

| Value of the Expression | Expression |
| --- | --- |
| false | true |
| true | false |

<!-- Slide number: 67 -->
# Boolean Variables
Boolean variable: references one of two values, True or False
Represented by bool data type
Commonly used as flags
Flag: variable that signals when some condition exists in a program
Flag set to False  condition does not exist
Flag set to True  condition exists

<!-- Slide number: 68 -->
# What will be the outputs?
a, b = True, False
print(not a, not b)
print(not(hour<=14))

<!-- Slide number: 69 -->
# Checking Numeric Ranges with Logical Operators
To determine whether a numeric value is within a specific range of values, use and
Example: x >= 10 and x <= 20
To determine whether a numeric value is outside of a specific range of values, use or
Example: x < 10 or x > 20

<!-- Slide number: 70 -->
# The in Operator
The in operator determines whether a given value is a constituent element of a sequence such as a string.
print("s" in "sebastian")
print("sss" in "sebastian")
print("123" in "Password: Trial1234")

<!-- Slide number: 71 -->
# The not in Operator
The not in membership operator evaluates to true if it does not find a variable in the specified sequence and false otherwise.
print("sss" not in "sebastian")
print("123" not in "Password:12345")
