<!-- Slide number: 1 -->
# Starting out with Python
Fifth Edition

![Starting out with Python, Fifth edition by Tony Gaddis](Picture11.jpg)
Chapter 7
Lists and Tuples
Copyright © 2021, 2018, 2015 Pearson Education, Inc. All Rights Reserved

<!-- Slide number: 2 -->
# Topics (1 of 2)
Sequences
Introduction to Lists
List Slicing
Finding Items in Lists with the in Operator
List Methods and Useful Built-in Functions

<!-- Slide number: 3 -->
# Topics (2 of 2)
Copying Lists
Processing Lists
List Comprehensions
Two-Dimensional Lists
Tuples
Plotting List Data with the matplotlib Package

<!-- Slide number: 4 -->
# Sequences
Sequence: an object that contains multiple items of data
The items are stored in sequence one after another
Python provides different types of sequences, including lists and tuples
The difference between these is that a list is mutable and a tuple is immutable

<!-- Slide number: 5 -->
# Introduction to Lists (1 of 2)
List: an object that contains multiple data items
Element: An item in a list
Format: list = [item1, item2, etc.]
Can hold items of different types
print function can be used to display an entire list
list() function can convert certain types of objects to lists

<!-- Slide number: 6 -->
# Introduction to Lists (2 of 2)

![A list of even numbers is depicted as a 1 by 5 array in which the following elements are entered in each of the cells. 2, 4, 6, 8, and 10. An arrow from even underscore numbers points to the first element of the list.](Picture3.jpg)
Figure 7-1 A list of integers

![A list of names is depicted as a 1 by 5 array in which the following elements are entered in each of the cells. Molly, Steven, Will, Alicia, and Adriana. An arrow from names points to the first element of the list.](Picture4.jpg)
Figure 7-2 A list of strings

![A list is depicted as a 1 by 5 array in which the following elements are entered in each of the cells. Alicia, 27, and 1550.87. An arrow from info points to the first element of the list.](Picture5.jpg)
Figure 7-3 A list holding different types

<!-- Slide number: 7 -->
# The Repetition Operator and Iterating over a List
Repetition operator: makes multiple copies of a list and joins them together
The * symbol is a repetition operator when applied to a sequence and an integer
Sequence is left operand, number is right
General format: list * n
You can iterate over a list using a for loop
Format: for x in list:

<!-- Slide number: 8 -->
# Indexing
Index: a number specifying the position of an element in a list
Enables access to individual element in list
Index of first element in the list is 0, second element is 1, and n’th element is n-1
Negative indexes identify positions relative to the end of the list
The index -1 identifies the last element, -2 identifies the next to last element, etc.

<!-- Slide number: 9 -->
# The len function
An IndexError exception is raised if an invalid index is used
len function: returns the length of a sequence such as a list
Example: size = len(my_list)
Returns the number of elements in the list, so the index of last element is len(list)-1
Can be used to prevent an IndexError exception when iterating over a list with a loop

<!-- Slide number: 10 -->
# Lists Are Mutable
Mutable sequence: the items in the sequence can be changed
Lists are mutable, and so their elements can be changed
An expression such as
list[1] = new_value can be used to assign a new value to a list element
Must use a valid index to prevent raising of an IndexError exception

<!-- Slide number: 11 -->
# Concatenating Lists
Concatenate: join two things together
The + operator can be used to concatenate two lists
Cannot concatenate a list with another data type, such as a number
The += augmented assignment operator can also be used to concatenate lists

<!-- Slide number: 12 -->
# List Slicing
Slice: a span of items that are taken from a sequence
List slicing format: list[start : end]
Span is a list containing copies of elements from start up to, but not including, end
If start not specified, 0 is used for start index
If end not specified, len(list) is used for end index
Slicing expressions can include a step value and negative indexes relative to end of list

<!-- Slide number: 13 -->
# Finding Items in Lists with the in Operator
You can use the in operator to determine whether an item is contained in a list
General format: item in list
Returns True if the item is in the list, or False if it is not in the list
Similarly you can use the not in operator to determine whether an item is not in a list

<!-- Slide number: 14 -->
# List Methods and Useful Built-in Functions (1 of 4)
append(item): used to add items to a list – item is appended to the end of the existing list
index(item): used to determine where an item is located in a list
Returns the index of the first element in the list containing item
Raises ValueError exception if item not in the list

<!-- Slide number: 15 -->
# List Methods and Useful Built-in Functions (2 of 4)
insert(index, item): used to insert item at position index in the list
sort(): used to sort the elements of the list in ascending order
remove(item): removes the first occurrence of item in the list
reverse(): reverses the order of the elements in the list

<!-- Slide number: 16 -->
# List Methods and Useful Built-in Functions (3 of 4)
Table 7-1 A few of the list methods
| Method | Description |
| --- | --- |
| append(item) | Adds item to the end of the list. |
| index(item) | Returns the index of the first element whose value is equal to item. A ValueError exception is raised if item is not found in the list. |
| insert(index, item) | Inserts item into the list at the specified index. When an item is inserted into a list, the list is expanded in size to accommodate the new item. The item that was previously at the specified index, and all the items after it, are shifted by one position toward the end of the list. No exceptions will occur if you specify an invalid index. If you specify an index beyond the end of the list, the item will be added to the end of the list. If you use a negative index that specifies an invalid position, the item will be inserted at the beginning of the list. |
| sort() | Sorts the items in the list so they appear in ascending order (from the lowest value to the highest value). |
| remove(item) | Removes the first occurrence of item from the list. A ValueError exception is raised if item is not found in the list. |
| reverse() | Reverses the order of the items in the list. |

<!-- Slide number: 17 -->
# List Methods and Useful Built-in Functions (4 of 4)
del statement: removes an element from a specific index in a list
General format: del list[i]
min and max functions: built-in functions that returns the item that has the lowest or highest value in a sequence
The sequence is passed as an argument

<!-- Slide number: 18 -->
# Copying Lists (1 of 2)
To make a copy of a list you must copy each element of the list
Two methods to do this:
Creating a new empty list and using a for loop to add a copy of each element from the original list to the new list
Creating a new empty list and concatenating the old list to the new empty list

<!-- Slide number: 19 -->
# Copying Lists (2 of 2)

![List 1 and list 2 point to the first element of the list, which is depicted as a 1 by 4 array in which the following elements are entered in each of the cells. 1, 2, 3, and 4.](Picture3.jpg)
Figure 7-5 list1 and list2 reference the same list

<!-- Slide number: 20 -->
# Processing Lists (1 of 2)
List elements can be used in calculations
To calculate total of numeric values in a list use loop with accumulator variable
To average numeric values in a list:
Calculate total of the values
Divide total of the values by len(list)
List can be passed as an argument to a function

<!-- Slide number: 21 -->
# Processing Lists (2 of 2)
A function can return a reference to a list
To save the contents of a list to a file:
Use the file object’s writelines method
Does not automatically write \n at then end of each item
Use a for loop to write each element and \n
To read data from a file use the file object’s readlines method

<!-- Slide number: 22 -->
# List Comprehensions (1 of 7)
List comprehension: a concise expression that creates a new list by iterating over the elements of an existing list.

<!-- Slide number: 23 -->
# List Comprehensions (2 of 7)
The following code uses a for loop to make a copy of a list:

The following code uses a list comprehension to make a copy of a list:
list1 = [1, 2, 3, 4]
list2 = []

for item in list1:
    list2.append(item)
list1 = [1, 2, 3, 4]
list2 = [item for item in list1]

<!-- Slide number: 24 -->
# List Comprehensions (3 of 7)

![list 2 equals left bracket item for item in list 1 right bracket. The result expression is the first part of the expression, item, and the iteration expression is the latter part, for item in list 1.](Picture8.jpg)
The iteration expression works like a for loop
In this example, it iterates over the elements of list1
Each time it iterates, the target variable item is assigned the value of an element.
At the end of each iteration, the value of the result expression is appended to the new list.

<!-- Slide number: 25 -->
# List Comprehensions (4 of 7)
list1 = [1, 2, 3, 4]
list2 = [item**2 for item in list1]
After this code executes, list2 will contain the values [1, 4, 9, 16]

<!-- Slide number: 26 -->
# List Comprehensions (5 of 7)
str_list = ['Winken', 'Blinken', 'Nod']
len_list = [len(s) for s in str_list]
After this code executes, len_list will contain the values [6, 7, 3]

<!-- Slide number: 27 -->
# List Comprehensions (6 of 7)
You can use an if clause in a list comprehension to select only certain elements when processing a list
list1 = [1, 12, 2, 20, 3, 15, 4]
list2 = []

for n in list1:
    if n < 10:
        list2.append(n)
Works the same as…
list1 = [1, 12, 2, 20, 3, 15, 4]
list2 = [item for item in list1 if item < 10]

<!-- Slide number: 28 -->
# List Comprehensions (7 of 7)
list1 = [1, 12, 2, 20, 3, 15, 4]
list2 = [item for item in list1 if item < 10]
After this code executes, list2 will contain [1, 2, 3, 4]

<!-- Slide number: 29 -->
# Two-Dimensional Lists (1 of 3)
Two-dimensional list: a list that contains other lists as its elements
Also known as nested list
Common to think of two-dimensional lists as having rows and columns
Useful for working with multiple sets of data
To process data in a two-dimensional list need to use two indexes
Typically use nested loops to process

<!-- Slide number: 30 -->
# Two-Dimensional Lists (2 of 3)

![A table depicts a two dimensional list.](Picture3.jpg)
Figure 7-8 A two-dimensional list

<!-- Slide number: 31 -->
# Two-Dimensional Lists (3 of 3)

![A table depicts a two dimensional list.](Picture3.jpg)
Figure 7-10 Subscripts for each element of the scores list

<!-- Slide number: 32 -->
# Tuples (1 of 3)
Tuple: an immutable sequence
Very similar to a list
Once it is created it cannot be changed
Format: tuple_name = (item1, item2)
Tuples support operations as lists
Subscript indexing for retrieving elements
Methods such as index
Built in functions such as len, min, max
Slicing expressions
The in, +, and * operators

<!-- Slide number: 33 -->
# Tuples (2 of 3)
Tuples do not support the methods:
append
remove
insert
reverse
sort

<!-- Slide number: 34 -->
# Tuples (3 of 3)
Advantages for using tuples over lists:
Processing tuples is faster than processing lists
Tuples are safe
Some operations in Python require use of tuples
list() function: converts tuple to list
tuple() function: converts list to tuple

<!-- Slide number: 35 -->
# Plotting Data with matplotlib (1 of 4)
The matplotlib package is a library for creating two-dimensional charts and graphs.
It is not part of the standard Python library, so you will have to install it separately, after you have installed Python on your system.

<!-- Slide number: 36 -->
# Plotting Data with matplotlib (2 of 4)
To install matplotlib on a Windows system, open a Command Prompt window and enter this command:
To install matplotlib on a Mac or Linux system, open a Terminal window and enter this command:
See Appendix F in your textbook for more information about packages and the pip utility.
pip install matplotlib
sudo pip3 install matplotlib

<!-- Slide number: 37 -->
# Plotting Data with matplotlib (3 of 4)
To verify the package was installed, start IDLE and enter this command:

If you don't see any error messages, you can assume the package was properly installed.
>>> import matplotlib

<!-- Slide number: 38 -->
# Plotting Data with matplotlib (4 of 4)
The matplotlib package contains a module named pyplot that you will need to import.
Use the following import statement to import the module and create an alias named plt:
import matplotlib.pyplot as plt
For more information about the import statement, see Appendix E in your textbook.

<!-- Slide number: 39 -->
# Plotting a Line Graph with the plot Function (1 of 4)
Use the plot function to create a line graph that connects a series of points with straight lines.
The line graph has a horizontal X axis, and a vertical Y axis.
Each point in the graph is located at a (X,Y) coordinate.

![The output displays a line graph.](Picture5.jpg)

<!-- Slide number: 40 -->
# Plotting a Line Graph with the plot Function (2 of 4)
Program 7-20 (line_graph1.py)
 1 # This program displays a simple line graph.
 2 import matplotlib.pyplot as plt
 3
 4 def main():
 5     # Create lists with the X and Y coordinates of each data point.
 6     x_coords = [0, 1, 2, 3, 4]
 7     y_coords = [0, 3, 1, 5, 2]
 8
 9     # Build the line graph.
10     plt.plot(x_coords, y_coords)
11
12     # Display the line graph.
13     plt.show()
14
15 # Call the main function.
16 if _ _name_ _ == '_ _main_ _':
17     main()

![The output displays a line graph.](Picture6.jpg)

<!-- Slide number: 41 -->
# Plotting a Line Graph with the plot Function (3 of 4)
You can change the lower and upper limits of the X and Y axes by calling the xlim and ylim functions. Example:
This code does the following:
Causes the X axis to begin at 1 and end at 100
Causes the Y axis to begin at 10 and end at 50

plt.xlim(xmin=1, xmax=100)
plt.ylim(ymin=10, ymax=50)

<!-- Slide number: 42 -->
# Plotting a Line Graph with the plot Function (4 of 4)
You can customize each tick mark’s label with the xticks and yticks functions.
These functions each take two lists as arguments.
The first argument is a list of tick mark locations
The second argument is a list of labels to display at the specified locations.
plt.xticks([0, 1, 2, 3, 4],
           ['2016', '2017', '2018', '2019', '2020'])
plt.yticks([0, 1, 2, 3, 4, 5],
           ['$0m', '$1m', '$2m', '$3m', '$4m', '$5m'])

<!-- Slide number: 43 -->
# Program 7-20
 1 # This program displays a simple line graph. 2 import matplotlib.pyplot as plt 3  4 def main(): 5     # Create lists with the X,Y coordinates of each data point. 6     x_coords = [0, 1, 2, 3, 4] 7     y_coords = [0, 3, 1, 5, 2] 8      9     # Build the line graph.10     plt.plot(x_coords, y_coords, marker='o')11 12     # Add a title.13     plt.title('Sales by Year')14 15     # Add labels to the axes.16     plt.xlabel('Year')17     plt.ylabel('Sales')18
Continued. . .

<!-- Slide number: 44 -->
# Program 7-24
19     # Customize the tick marks.20     plt.xticks([0, 1, 2, 3, 4],21                ['2016', '2017', '2018', '2019', '2020'])22     plt.yticks([0, 1, 2, 3, 4, 5],23                ['$0m', '$1m', '$2m', '$3m', '$4m', '$5m'])24 25     # Add a grid.26     plt.grid(True)27 28     # Display the line graph.29     plt.show()30 31 # Call the main function.
32 if __name__ == '__main__':33     main()

<!-- Slide number: 45 -->
# Output of Program 7-24
Displayed by the title() function.
Displayed by the yticks() function.

![The output displays a line graph titled, sales by year.](Picture7.jpg)
Displayed by the ylabel() function.
Displayed by the xticks() function.
Displayed by the xlabel() function.

<!-- Slide number: 46 -->
# Plotting a Bar Chart (1 of 6)
Use the bar function in the matplotlib.pyplot module to create a bar chart.
The function needs two lists: one with the X coordinates of each bar’s left edge, and another with the heights of each bar, along the Y axis.

<!-- Slide number: 47 -->
# Plotting a Bar Chart (2 of 6)
left_edges = [0, 10, 20, 30, 40]
heights = [100, 200, 300, 400, 500]

plt.bar(left_edges, heights)
plt.show()

![The output displays a vertical bar graph.](Picture4.jpg)

<!-- Slide number: 48 -->
# Plotting a Bar Chart (3 of 6)
The default width of each bar in a bar graph is 0.8 along the X axis.
You can change the bar width by passing a third argument to the bar function.

![The output displays a vertical bar graph.](Picture4.jpg)
left_edges = [0, 10, 20, 30, 40]
heights = [100, 200, 300, 400, 500]
bar_width = 5

plt.bar(left_edges, heights, bar_width)
plt.show()

<!-- Slide number: 49 -->
# Plotting a Bar Chart (4 of 6)
The bar function has a color parameter that you can use to change the colors of the bars.
The argument that you pass into this parameter is a tuple containing a series of color codes.
| Color Code | Corresponding Color |
| --- | --- |
| 'b' | Blue |
| 'g' | Green |
| 'r' | Red |
| 'c' | Cyan |
| 'm' | Magenta |
| 'y' | Yellow |
| 'k' | Black |
| 'w' | White |

<!-- Slide number: 50 -->
# Plotting a Bar Chart (5 of 6)
Example of how to pass a tuple of color codes as a keyword argument:
The colors of the bars in the resulting bar chart will be as follows:
The first bar will be red.
The second bar will be green.
The third bar will be blue.
The fourth bar will be white.
The fifth bar will be black.

plt.bar(left_edges, heights, color=('r', 'g', 'b', 'w', 'k'))

<!-- Slide number: 51 -->
# Plotting a Bar Chart (6 of 6)
Use the xlabel and ylabel functions to add labels to the X and Y axes.
Use the xticks function to display custom tick mark labels along the X axis
Use the yticks function to display custom tick mark labels along the Y axis.

<!-- Slide number: 52 -->
# Plotting a Pie Chart (1 of 4)
You use the pie function in the matplotlib.pyplot module to create a pie chart.
When you call the pie function, you pass a list of values as an argument.
The sum of the values will be used as the value of the whole.
Each element in the list will become a slice in the pie chart.
The size of a slice represents that element's value as a percentage of the whole.

<!-- Slide number: 53 -->
# Plotting a Pie Chart (2 of 4)
Example
values = [20, 60, 80, 40]
plt.pie(values)
plt.show()

![The output is a pie chart with four sectors. The sectors are of different sizes.](Picture4.jpg)

<!-- Slide number: 54 -->
# Plotting a Pie Chart (3 of 4)
The pie function has a labels parameter that you can use to display labels for the slices in the pie chart.
The argument that you pass into this parameter is a list containing the desired labels, as strings.

<!-- Slide number: 55 -->
# Plotting a Pie Chart (4 of 4)
Example
sales = [100, 400, 300, 600]
slice_labels = ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr']
plt.pie(sales, labels=slice_labels)
plt.title('Sales by Quarter')
plt.show()

![The output is a pie chart titled, sales by quarter, with four sectors that are labeled, first quarter, second quarter, third quarter, and fourth quarter, respectively, counter clockwise.](Picture6.jpg)

<!-- Slide number: 56 -->
# Plotting a Pie Chart
The pie function automatically changes the color of the slices, in the following order:
blue, green, red, cyan, magenta, yellow, black, and white.
You can specify a different set of colors, however, by passing a tuple of color codes as an argument to the pie function’s colors parameter:
When this statement executes, the colors of the slices in the resulting pie chart will be red, green, blue, white, and black.
plt.pie(values, colors=('r', 'g', 'b', 'w', 'k'))

<!-- Slide number: 57 -->
# Summary
This chapter covered:
Lists, including:
Repetition and concatenation operators
Indexing
Techniques for processing lists
Slicing and copying lists
List methods and built-in functions for lists
Two-dimensional lists
Tuples, including:
Immutability
Difference from and advantages over lists
Plotting charts and graphs with the matplotlib Package
