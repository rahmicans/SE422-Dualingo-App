<!-- Slide number: 1 -->
# NumPy for Data Science Part 2
Dr. Gökçen Tonbul

<!-- Slide number: 2 -->
# Boolean Indexing (Masking) (1 of 3)
A powerful technique for selecting elements from an array based on a set of conditions.
An important method in Data Analysis Pipelines (Data filtering, Cleaning, and Manipulation)
Boolean indexing is a two step process:
Create a boolean array (named as mask):
Each element is True or False based on a condition (vectorized comparison operation)
Use this mask as an index for original array (a new 1D array will be returned with corresponding boolean value)

<!-- Slide number: 3 -->
# Boolean Indexing (Masking) (2 of 3)
import numpy as np
data = np.array ([3,8,2,7,1,6,0,4])
mask = data > 4
mask
Output: array([False, True, False, True, False, True, False, False])
filtered_data = data[mask]
filtered_data
Output: array([8, 7, 6])
# and, or, not keywords are not overloaded by NumPy.
# Use these bitwise logical operators: & (and), | (or), ~ (not)
complex_mask = (data > 3) & (data < 7)
complex_mask
Output: array([False, False, False, False, False, True, False, True])
data[complex_mask]
Output: array([6, 4])
complex_mask = (data == 5) | (data < 5)
complex_mask
data[complex_mask]
Output: array([3, 2, 1, 0, 4])
complex_mask = (data == 5) | ~ (data < 5)
complex_mask
data[complex_mask]
Output: array([8, 7, 6])
new_data = np.arange (0, 20)
new_data
Output: array([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
 17, 18, 19])

<!-- Slide number: 4 -->
# Boolean Indexing (Masking) (3 of 3)
# Set all odd numbers to -1
new_data[new_data % 2 != 0] = -1
new_data
Output: array([ 0, -1,  2, -1,  4, -1,  6, -1,  8, -1, 10, -1, 12, -1, 14, -1, 16,
       -1, 18, -1])
# count of negative values
count = np.sum(new_data < 0)
print(f"Number of Elements grater than 0: {count}")
Output: Number of Elements grater than 0: 10
complex_mask = (data == 5) | (data < 5)
complex_mask
data[complex_mask]
Output: array([3, 2, 1, 0, 4])
complex_mask = (data == 5) | ~ (data < 5)
complex_mask
data[complex_mask]
Output: array([8, 7, 6])
new_data = np.arange (0, 20)
new_data
Output: array([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
 17, 18, 19])

<!-- Slide number: 5 -->
# Manipulating and Reshaping Arrays
These operations are fundamental for data preparation, aligning data for various algorithms, and preparing data for visualization.
We will explore how to change an array's dimensions, permute its axes, and combine or split arrays into new configurations
To change the shape of an array without altering the data it contains, NumPy provides several functions:
Reshape
Ravel
flatten

<!-- Slide number: 6 -->
# Reshape Function
The reshape() function gives a new shape to an array
 It returns a new array object with the specified dimensions.
Important: New shape must be compatible with the original, meaning it must contain the same total number of elements. If the sizes are incompatible, a ValueError is raised. 2
The reshape operation returns a view of the original array whenever the data layout in memory allows; otherwise, it returns a copy.3
A powerful feature of reshape is the ability to pass -1 for one of the dimensions. This instructs NumPy to automatically calculate the correct size for that dimension based on the total number of elements in the array.

<!-- Slide number: 7 -->
# Ravel vs Flatten
Both of them are used to convert a multi-dimensional array into a one-dimensional (flattened) array.
The distinction is in their memory handling. This distinction reinforces the view vs. copy concept.
Ravel:
It does not allocate memory and uses view if it is possible (It copies only if the data is not contiguous.)
Flatten:
It always returns a copy of the original array.

<!-- Slide number: 8 -->
# Transposing and Swapping Axes
Transposing is a fundamental operation that permutes the dimensions of a matrix. It means that swapping its rows and columns.
.T Attribute and numpy.transpose()
For higher-dimensional arrays, the numpy.transpose() function offers more control. It can accept a tuple that is a new order of the axes.
For example:  an array with shape (d1, d2, d3), transposing with axes=(2, 0, 1) would result in a new array with shape (d3, d1, d2).3

<!-- Slide number: 9 -->
# Combining Arrays
Functions joining multiple arrays into a single, larger array
numpy.concatenate()
general-purpose function for joining a sequence of arrays.
It takes a tuple of arrays to be joined and an axis argument that specifies the dimension along which the concatenation should occur.
The arrays must have the same shape, except in the dimension corresponding to the concatenation axis.
numpy.vstack() (vertical stack): Stacks arrays in sequence vertically (row-wise). This is equivalent to concatenate along axis=0.
numpy.hstack() (horizontal stack): Stacks arrays in sequence horizontally (column-wise). This is equivalent to concatenate along axis=1.

<!-- Slide number: 10 -->
# Splitting Arrays
This is an inverse operation of joining
numpy.split()
general-purpose function for splitting
It takes the array to be split, an indicator of how to split it, and the axis along which to perform the split
The indicator can be an integer, N, which splits the array into N equal-sized sub-arrays.
If the array cannot be divided equally, a ValueError is raised.
The indicator can be a 1D array of indices specifying the points to divide the array.

<!-- Slide number: 11 -->
# Computational core of NumPy: Ufuncs and Broadcasting
A Universal Function, or ufunc, is a function that operates on NumPy ndarray objects in an element-by-element fashion. It provides the engine for high performance computation for element-wise operations.
Broadcasting provides rules for applying those operations to different arrays with different shapes efficiently.

<!-- Slide number: 12 -->
# Universal Functions (Ufuncs	)
They are vectorized wrappers to execute repeated operations on array elements without loops
NumPy overloads arithmetic operators according to the corresponding ufunc. (For example: ndarray a or b, a+b triggers np.add(a,b) internally)
Wide range of ufuncs exists with many  categories

<!-- Slide number: 13 -->
# Ufunc Categories
| Category | Example Functions | Description |
| --- | --- | --- |
| Arithmetic | np.add, np.subtract, np.multiply, np.divide, np.power | Perform standard element-wise arithmetic operations. |
| Mathematical | np.sqrt, np.exp, np.log, np.abs | Apply common mathematical functions to each element. |
| Trigonometric | np.sin, np.cos, np.tan, np.arcsin | Compute trigonometric values for each element (in radians). |
| Comparison | np.greater, np.less, np.equal, np.not\_equal | Perform element-wise comparisons, returning a boolean array. |
| Logical/Bitwise | np.logical\_and, np.bitwise\_or (`), np.bitwise\_not (~`) | perform element-wise logical operations |

<!-- Slide number: 14 -->
# Broadcasting (1 of 3)
It is one of NumPy's most powerful features.
Conceptually, broadcasting "stretches" or "duplicates" the smaller array's values across the larger array so that they have compatible shapes for the element-wise operation. Crucially, this stretching does not actually create copies in memory, making it a highly efficient mechanism.6
The simplest case of broadcasting is an operation between an array and a scalar. The scalar is effectively stretched to match the shape of the array.6

<!-- Slide number: 15 -->
# Broadcasting (2 of 3 )
For operations between two arrays, NumPy compares their shapes dimension by dimension, starting from the trailing (rightmost) dimensions. The broadcasting rules are as follows:
Rule 1: If the two arrays differ in their number of dimensions, the shape of the one with fewer dimensions is padded with ones on its leading (left) side. For example, if a matrix of shape (3, 4) is operated on with a vector of shape (4,), the vector's shape is treated as (1, 4).
Rule 2: If the shape of the two arrays does not match in any dimension, the array with a shape equal to 1 in that dimension is stretched to match the other shape.
Rule 3: If in any dimension the sizes disagree and neither is equal to 1, a ValueError is raised, as the arrays are incompatible for broadcasting.

<!-- Slide number: 16 -->
# Broadcasting (3 of 3)
matrix = np.ones((3, 4)) # Shape (3, 4)vector = np.arange(4)     # Shape (4,)# Shapes:# matrix: (3, 4)# vector:    (4,)# Rule 1: Pad vector's shape to (1, 4)# matrix: (3, 4)# vector: (1, 4)# Rule 2: Compare dimensions# - Trailing dim: 4 and 4 match.# - Leading dim: 3 and 1. Stretch vector's first dimension to 3.result = matrix + vectorprint(result)# Output:# [[1. 2. 3. 4.]#  [1. 2. 3. 4.]#  [1. 2. 3. 4.]]

<!-- Slide number: 17 -->
# Aggregation Functions
These functions perform a summary computation on an array
Common aggregation functions
np.sum(): Sum of elements.
np.mean(): Mean of elements.
np.std(): Standard deviation of elements.
np.min() / np.amin(): Minimum value.
np.max() / np.amax(): Maximum value.
np.prod(): Product of elements.
By default, these functions operate on the entire (flattened) array and return a single scalar value.

<!-- Slide number: 18 -->
# the axis Parameter
The axis parameter is used to control the dimension along which the aggregation is performed.
axis=0: The aggregation is performed along the rows, effectively collapsing them and computing the result for each column.
axis=1: The aggregation is performed along the columns, effectively collapsing them and computing the result for each row.

<!-- Slide number: 19 -->
# References
Boolean masking (NumPy) in Python | Medium Blog Post, https://medium.com/@24littledino/boolean-masking-numpy-in-python-3aff46eb6c1c
NumPy quickstart — NumPy v2.4.dev0 Manual, https://numpy.org/devdocs/user/quickstart.html
NumPy Array Manipulation. A medium blog, https://medium.com/@aamernabi/numpy-array-manipulation-5f83fb111958
Universal functions (ufunc) — NumPy v2.3 Manual, 2025 https://numpy.org/doc/stable/reference/ufuncs.html
Computation on Arrays: Broadcasting | Python Data Science Handbook, 2025, https://jakevdp.github.io/PythonDataScienceHandbook/02.05-computation-on-arrays-broadcasting.html
Broadcasting — NumPy v2.3 Manual, 2025, https://numpy.org/doc/stable/user/basics.broadcasting.html
