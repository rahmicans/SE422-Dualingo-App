<!-- Slide number: 1 -->
# Topics (1 of 2)
The if Statement
The if-else Statement
Comparing Strings
Nested Decision Structures and the if-elif-else Statement
Logical Operators
Boolean Variables

<!-- Slide number: 2 -->
# Topics (2 of 2)
Introduction to Repetition Structures
The while Loop: a Condition-Controlled Loop
The for Loop: a Count-Controlled Loop
Calculating a Running Total
Sentinels
Input Validation Loops
Nested Loops

<!-- Slide number: 3 -->
# Reminderif-else Statement
This program calculates gross pay based on the number of hours worked and the hourly pay rate, taking into account any overtime hours worked.

![](ContentPlaceholder3.jpg)

<!-- Slide number: 4 -->
# Nested Decision Structures (1 of 4)
A decision structure can be nested inside another decision structure
Commonly needed in programs
Example:

![A screenshot of a computer program Description automatically generated](Picture3.jpg)

<!-- Slide number: 5 -->
# Nested Decision Structures (2 of 4)
A decision structure can be nested inside another decision structure
Commonly needed in programs
Example:
Determine if someone qualifies for a loan, they must meet two conditions:
Must earn at least $30,000/year
Must have been employed for at least two years
Check first condition, and if it is true, check second condition

<!-- Slide number: 6 -->
# Nested Decision Structures (4 of 4)
Important to use proper indentation in a nested decision structure
Important for Python interpreter
Makes code more readable for programmer
Rules for writing nested if statements:
else clause should align with matching if clause
Statements in each block must be consistently indented

<!-- Slide number: 7 -->
# Example (1 of 3)

![](Picture5.jpg)

<!-- Slide number: 8 -->
# Example (2 of 3) What are the differences?			Compare with the previous slide

![](Picture5.jpg)

<!-- Slide number: 9 -->
# Example (3 of 3) What is the difference?			Compare with the previous slide

![](Picture5.jpg)

<!-- Slide number: 10 -->
# The if-elif-else Statement (1 of 5)
if-elif-else statement: special version of a decision structure
Makes logic of nested decision structures simpler to write
Can include multiple elif statements
Syntax:
if condition_1:
    statement(s)
elif condition_2:
    statement(s)
elif condition_3:
    statement(s)
else
    statement(s)

Insert as many elif clauses
as necessary.

<!-- Slide number: 11 -->
# The if-elif-else Statement (2 of 5)
Alignment used with if-elif-else statement:
if, elif, and else clauses are all aligned
Conditionally executed blocks are consistently indented
if-elif-else statement is never required, but logic easier to follow
Can be accomplished by nested if-else
Code can become complex, and indentation can cause problematic long lines

<!-- Slide number: 12 -->
# Nested if-else Solution (4 of 5)

![A screenshot of a computer program Description automatically generated](ContentPlaceholder3.jpg)

<!-- Slide number: 13 -->
# The if-elif-else Solution (5 of 5)

![](ContentPlaceholder3.jpg)

<!-- Slide number: 14 -->
# Example
temp = 36if temp > 99:    print("water is at boiling temperature")elif temp >= 1 and temp <= 99:    print("water temperature is at normal level")else:    print("water is at freezing temperature")

<!-- Slide number: 15 -->
# Example (Test the code by changing the values of the 									variables.)
employee1 = "engineer"employee2 = "manager"salary1 = 7000salary2 = 10000if employee1 == "engineer":    if salary1 >= 7000 and salary1 < salary2:        print("your salary belongs to the engineer salary scale")    elif salary1 < 7000:        print("your salary is below to the engineer salary scale")elif employee2 == "manager":    if salary2 >= 10000:        print("your salary belongs to the manager salary scale")    else:        print("your salary is below to the manager salary scale")

<!-- Slide number: 16 -->
# Introduction to Repetition Structures
Often have to write code that performs the same task multiple times
Disadvantages to duplicating code
Makes program large
Time consuming
May need to be corrected in many places
Repetition structure: makes computer repeat included code as necessary
Includes condition-controlled loops and count-controlled loops

<!-- Slide number: 17 -->
# The while Loop: a Condition-Controlled Loop (1 of 4)
while loop: while condition is true, do something
Two parts:
Condition tested for true or false value
Statements repeated as long as condition is true
General format:
	while condition:
		statements

<!-- Slide number: 18 -->
# The while Loop: a Condition-Controlled Loop (3 of 4)
In order for a loop to stop executing, something has to happen inside the loop to make the condition false
Iteration: one execution of the body of a loop
while loop is known as a pretest loop
Tests condition before performing an iteration
Will never execute if condition is false to start with
Requires performing some steps prior to the loop

<!-- Slide number: 19 -->
# while Loop

![](Picture4.jpg)

<!-- Slide number: 20 -->

![Shape, rectangle Description automatically generated](Picture4.jpg)
# while Loop

Ex:
i = 0while i < 5:    print(i)    i += 1

### Notes:
Continue with Code 037 and 038

<!-- Slide number: 21 -->
# Infinite Loops
Loops must contain within themselves a way to terminate
Something inside a while loop must eventually make the condition false
Infinite loop: loop that does not have a way of stopping
Repeats until program is interrupted
Occurs when programmer forgets to include stopping code in the loop

### Notes:
Show Code 039

<!-- Slide number: 22 -->
# The for Loop: a Count-Controlled Loop (1 of 2)
Count-Controlled loop: iterates a specific number of times
Use a for statement to write count-controlled loop
Designed to work with sequence of data items
Iterates once for each item in the sequence
General format:
	for variable in [val1, val2, etc]:
		statements
Target variable: the variable which is the target of the assignment at the beginning of each iteration

<!-- Slide number: 23 -->
# for Loop
The for loop in Python is used to iterate over a sequence (list, tuple, string) or other iterable objects.

Loop continues until we reach the last item in the sequence.

General usage is as follows:
	for loop_variable in sequence:
	      body of for

<!-- Slide number: 24 -->
# The for Loop: a Count-Controlled Loop (2 of 2)

![An illustration depicts for loop.](Picture3.jpg)
Figure 4-4 The for loop

<!-- Slide number: 25 -->
# for Loop
The variable in the 'for' loop moves sequentially from the first element in the collection to the last element.
As long as the variable holds an element of the collection, the in operator produces True value and the loop continues.

The 'for' loop can also be used to repeat a block of code a specified number of times.

<!-- Slide number: 26 -->
# for Loop

![](Picture4.jpg)

<!-- Slide number: 27 -->

![Table Description automatically generated](Picture4.jpg)
# for Loop

Ex:
spell = "Star Wars"for s in spell:    print(s)

### Notes:
Continue with Code 040, 041, and 042

<!-- Slide number: 28 -->
# Using the range Function with the for Loop
The range function simplifies the process of writing a for loop
range returns an iterable object
Iterable: contains a sequence of values that can be iterated over
range characteristics:
One argument: used as ending limit
Two arguments: starting value and ending limit
Three arguments: third argument is step value

<!-- Slide number: 29 -->
# for Loop

The range() function is used to repeat an operation a certain number of times with the 'for' loop.
range(stop): Produces numbers from 0 to last_value, in increments of 1 (including 0, excluding last_value).

![Graphical user interface, text Description automatically generated](Picture4.jpg)

### Notes:
Show Code 043

<!-- Slide number: 30 -->
# for Loop

range(start, stop): From first_value to last_value, numbers are generated in increments of 1 (including first_value, excluding last_value).

![](Picture4.jpg)

### Notes:

<!-- Slide number: 31 -->
# Using the Target Variable Inside the Loop
Purpose of target variable is to reference each item in a sequence as the loop iterates
Target variable can be used in calculations or tasks in the body of the loop
Example: calculate squares of each number in a range

### Notes:
Show Code 044

<!-- Slide number: 32 -->
# for Loop
range(start, stop, step): From first_value to last_value, numbers are generated with the specified increment_amount.

![](Picture4.jpg)

<!-- Slide number: 33 -->
# Generating an Iterable Sequence that Ranges from Highest to Lowest
The range function can be used to generate a sequence with numbers in descending order
Make sure starting number is larger than end limit, and step value is negative
Example: range(10, 0, -1)

<!-- Slide number: 34 -->

![Table Description automatically generated with medium confidence](Picture5.jpg)
# range()

for number in range(19, 11, -1):    print(number)

<!-- Slide number: 35 -->
# Letting the User Control the Loop Iterations
Sometimes the programmer does not know exactly how many times the loop will execute
Can receive range inputs from the user, place them in variables, and call the range function in the for clause using these variables
Be sure to consider the end cases: range does not include the ending limit

### Notes:
Continue with Code 045 and 046

<!-- Slide number: 36 -->
# Calculating a Running Total
Programs often need to calculate a total of a series of numbers
Typically include two elements:
A loop that reads each number in series
An accumulator variable
Known as program that keeps a running total:  accumulates total and reads in series
At end of loop, accumulator will reference the total

<!-- Slide number: 37 -->
# The Augmented Assignment Operators (1 of 2)
In many assignment statements, the variable on the left side of the = operator also appears on the right side of the = operator
Augmented assignment operators: special set of operators designed for this type of job
Shorthand operators

<!-- Slide number: 38 -->
# The Augmented Assignment Operators (2 of 2)
Table 4-2 Augmented assignment operators
| Operator | Example Usage | Equivalent To |
| --- | --- | --- |
| += | x += 5 | x = x + 5 |
| −= | y −= 2 | y = y − 2 |
| \*= | z \*= 10 | z = z \* 10 |
| /= | a /= b | a = a / b |
| %= | c %= 3 | c = c % 3 |
| //= | x //= 3 | x = x // 3 |
| \*\*= | y \*\*= 2 | y = y\*\*2 |

<!-- Slide number: 39 -->
# Sentinels
Sentinel: special value that marks the end of a sequence of items
When program reaches a sentinel, it knows that the end of the sequence of items was reached, and the loop terminates
Must be distinctive enough so as not to be mistaken for a regular value in the sequence
Example: when reading an input file, empty line can be used as a sentinel

### Notes:
Show code 048

<!-- Slide number: 40 -->
# Input Validation Loops (1 of 2)
Computer cannot tell the difference between good data and bad data
If user provides bad input, program will produce bad output
GIGO: garbage in, garbage out
It is important to design program such that bad input is never accepted

### Notes:
Show code 049

<!-- Slide number: 41 -->
# Input Validation Loops (2 of 2)
Input validation: inspecting input before it is processed by the program
If input is invalid, prompt user to enter correct data
Commonly accomplished using a while loop which repeats as long as the input is bad
If input is bad, display error message and receive another set of data
If input is good, continue to process the input

<!-- Slide number: 42 -->
# Loop Control Statements
Using loops in Python automates and repeats the tasks in an efficient manner. But sometimes, there may arise a condition where you want to exit the loop completely, skip an iteration or ignore that condition. These can be done by loop control statements.

Python supports the following control statements:
break
continue
pass
return

<!-- Slide number: 43 -->
# break
The break statement is used to terminate the loop in which it is present.

Ex:
sum = 0while True:    number = int(input("Enter a number: "))    if number <= 0:        break    sum += numberprint("Total:", sum)

<!-- Slide number: 44 -->
# break

![](ContentPlaceholder4.jpg)

<!-- Slide number: 45 -->
# break
Ex:
word = "gamer"for w in word:    if w == "m":        break    print(w)print("The loop has ended. The program continued from the first line after the loop")

<!-- Slide number: 46 -->
# break

![](ContentPlaceholder4.jpg)

<!-- Slide number: 47 -->
# continue
Continue is also a loop control statement just like the break statement. continue statement is opposite to that of break statement, instead of terminating the loop, it forces to execute the next iteration of the loop.
When the continue statement is executed in the loop, the code inside the loop following the continue statement will be skipped and the next iteration of the loop will begin.
Ex:
for i in range(15):    if not i % 2 == 0:        continue    print(i)

<!-- Slide number: 48 -->
# continue

![](ContentPlaceholder4.jpg)

<!-- Slide number: 49 -->
# pass
As the name suggests pass statement simply does nothing. The pass statement in Python is used when a statement is required syntactically but you do not want any command or code to execute.

Ex:
letters = "adchtx"while True:    guess = input("Enter a letter guess:")    if guess not in letters:        pass        print("Wrong guess")    else:        print("True guess")        break

<!-- Slide number: 50 -->
# pass

![](ContentPlaceholder4.jpg)

<!-- Slide number: 51 -->
# Nested Loops (1 of 2)
Nested loop: loop that is contained inside another loop
Example: analog clock works like a nested loop
Hours hand moves once for every twelve movements of the minutes hand: for each iteration of the “hours,” do twelve iterations of “minutes”
Seconds hand moves 60 times for each movement of the minutes hand: for each iteration of “minutes,” do 60 iterations of “seconds”

<!-- Slide number: 52 -->
# Nested Loops (2 of 2)
Key points about nested loops:
Inner loop goes through all of its iterations for each iteration of outer loop
Inner loops complete their iterations faster than outer loops
Total number of iterations in nested loop:
number of iterations of inner loop X number of iterations of outer loop

<!-- Slide number: 53 -->
# How many iterations will occur?
for seconds in range(60):
    print(seconds)

<!-- Slide number: 54 -->
# How many iterations will occur in each loop? What is the total iteration number?
for minutes in range(60):
    for seconds in range(60):
	    print(minutes, ':', seconds)

<!-- Slide number: 55 -->
# How many iterations will occur in each loop? What is the total iteration number?
for hours in range(24):
    for minutes in range(60):
	   for seconds in range(60):
		   print(hours, ':', minutes, 				':', seconds)

### Notes:
Show code 053

<!-- Slide number: 56 -->
# Summary
This chapter covered:
Decision structures, including:
Single alternative decision structures
Dual alternative decision structures
Nested decision structures
Relational operators and logical operators as used in creating Boolean expressions
String comparison as used in creating Boolean expressions
Boolean variables
Introduction to Repetition Structures
The while Loop: a Condition-Controlled Loop
The for Loop: a Count-Controlled Loop
Calculating a Running Total
Sentinels
Input Validation Loops
Nested Loops
