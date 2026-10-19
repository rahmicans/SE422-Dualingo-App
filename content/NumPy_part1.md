<!-- Slide number: 1 -->
# NumPy for Data Science
Dr. Gökçen Tonbul

<!-- Slide number: 2 -->
# Why we do not just use Python List?
Python List is a flexible container that can hold heterogeneous data types (integers, strings, objects, etc.).
Internally, it does not store the data itself but rather an array of pointers to Python objects scattered across various locations in memory.
For loop with lists: Python must first dereference a pointer to find the object and then determine its type before the operation can proceed. This process will be repeated for every element in a loop.
overhead for numerical computations.
computationally expensive
Reference: [3]

<!-- Slide number: 3 -->
# Why NumPy is an important tool in the data science ecosystem?
In data science the expectation is:
An optimized data structure.
Memory architecture of Python List is not optimized for large scale and repetitive numerical operations
NumPy was created to fill this gap, providing an array object that is significantly faster and more memory-efficient for these tasks.

<!-- Slide number: 4 -->
# Difference of NumPy
Provides an optimized data structure: a NumPy array, or ndarray.
This data structure is a homogeneous data container stored in a single, contiguous block of memory.
All elements in the array must be of the same data type, meaning each element occupies the same amount of memory.
This dense, uniform memory layout is the key to NumPy's performance.
It eliminates the overhead of pointer chasing and type checking inherent in Python lists.
More importantly, this contiguous memory model allows NumPy to delegate computations to highly optimized, pre-compiled code written in C or Fortran.

<!-- Slide number: 5 -->
# NumPy: Vectorization
Vectorization: is this contiguous memory model that enables NumPy to hand off calculations to highly optimized, pre-compiled code, often written in C.
Instead of writing explicit for loops in Python to iterate over elements one by one, NumPy allows operations to be expressed directly on entire arrays.
For example, to add two arrays, one simply uses the + operator.
This vectorized code is not merely a syntactic convenience; it is a trigger for NumPy to execute the operation using its fast, compiled backend.
This backend can leverage modern CPU architecture features like SIMD (Single Instruction, Multiple Data), which allows a single instruction to be applied to multiple data elements simultaneously in parallel.
The result: a dramatic reduction in the overhead from Python's interpreter and a massive increase in computational speed.

<!-- Slide number: 6 -->
# NumPy: Not just performance
The benefits beyond raw performance:
Vectorization often closely resembles standard mathematical notation.
Vectorized code is more concise and easier to read.
This clarity generally leads to fewer lines of code, which in turn means fewer opportunities for bugs.

<!-- Slide number: 7 -->
# NumPy: Benchmark (illustrative, it may vary.)
To quantify this difference, consider a benchmark comparing element-wise operations on a large dataset of 10 million numbers.

![](Picture4.jpg)
Reference: [4]

<!-- Slide number: 8 -->
# NumPy: a foundational package
NumPy is not just slightly faster—it is orders of magnitude faster.
Dramatic performance gain makes it a foundational package.
Not just Pandas, Scikit-learn, entire scientific Python ecosystem uses NumPy as a foundational package.
Best Practice: Use NumPy to replace explicit loops over large datasets
Do not use always NumPy: It is not always the fastest solution
on single scalar values
very small lists
the overhead of creating NumPy arrays can make it slower than the equivalent operation in pure Python.

<!-- Slide number: 9 -->
# NumPy: N-dimensional array (or ndarray)
The fundamental object in NumPy is the N-dimensional array, often called the ndarray.
ndarray:
is a table of elements, typically numbers.
same data type for all elements
is indexed by a tuple of non-negative integers.
In NumPy's terminology, the dimensions of an array are referred to as axes.
For example, a 2D array (or matrix) has two axes: axis 0 (representing the rows) and axis 1 (representing the columns).

<!-- Slide number: 10 -->
# NumPy: Constraints of the ndarray
homogeneity
fixed size
rectangular shape
Limitations?:
However these are fundamental design choices to achieve high performance
Contiguous block of memory means the size of each element must be known and identical
 To reach that goal you need a single, uniform data type (homogeneity).
More architectural decision to preserve contiguous block:
the total size of the array must be fixed at the time of creation
Dynamically resizing the array just like python lists (list.append) would require new memory allocation and NumPy is designed to avoid such overheads

<!-- Slide number: 11 -->
# NumPy: Memory Layout Attributes of ndarray
Must know Attributes of ndarray to understand its structure:
ndarray.ndim: The number of axes (dimensions) of the array. A vector has ndim of 1, a matrix has ndim of 2, and so on.2
ndarray.shape: A tuple of integers indicating the size of the array along each dimension. For a matrix with n rows and m columns, its shape will be (n, m). The length of the shape tuple is equal to ndim.2
ndarray.size: The total number of elements in the array. This is always equal to the product of the elements of the shape tuple.2

<!-- Slide number: 12 -->
# NumPy: More attributes
ndarray.dtype: An object describing the data type of the elements in the array. NumPy supports a wide range of numerical types, such as numpy.int32, numpy.int64, numpy.float32, and numpy.float64, which provide more fine-grained control over memory and precision than standard Python types.2
ndarray.itemsize: The size in bytes of each element of the array. For an array with dtype of numpy.float64, the itemsize will be 8 (since 64 bits = 8 bytes).2

<!-- Slide number: 13 -->
# NumPy: Sample Usage of attributes (Layout of ndarray)
1. Import NumPy:
	import numpy as np
2. # Create a 2D array (matrix) from a nested Python list

![](Picture4.jpg)

![](Picture6.jpg)

<!-- Slide number: 14 -->
# NumPy: Creating NumPy Arrays (1 of 4)
There are versatile set of functions for creating ndarray objects depending on whether the array is being created from existing data, as a placeholder of a specific size, or as a numerical sequence.
1. Creating Arrays from Existing Data
The most common way to create an array:
Converting a Python list or tuple using the numpy.array() function.
The function automatically infers the most appropriate data type from the input elements
 Data type can be explicitly specified using the dtype argument.

![](Picture10.jpg)

![](Picture4.jpg)

![](Picture6.jpg)

<!-- Slide number: 15 -->
# NumPy: Creating NumPy Arrays (2 of 4)

![](Picture8.jpg)

![](Picture6.jpg)
2. Creating Arrays with Placeholder Content
When the size of an array is known in advance but its content is not, it is more efficient to create a placeholder array rather than dynamically growing one. NumPy provides several functions for this purpose.2
numpy.zeros(shape): Creates an array of the given shape, filled entirely with zeros. By default, the dtype is float64.2
numpy.ones(shape): Creates an array of the given shape, filled entirely with ones. The default dtype is also float64.2
numpy.empty(shape): Creates an array of the given shape without initializing its entries. The initial content is arbitrary and depends on the state of the memory at that time. This function is slightly faster than zeros or ones as it avoids the step of setting values, but it should be used with caution, ensuring that every element is subsequently assigned a value.2

![](Picture10.jpg)

![](Picture12.jpg)

<!-- Slide number: 16 -->
# NumPy: Creating NumPy Arrays (3 of 4 )

![](Picture4.jpg)
3. Creating Numerical Sequences
NumPy offers specialized functions for creating arrays that represent numerical sequences, which are particularly useful for generating data for plotting or simulations.
numpy.arange(start, stop, step): This function is analogous to Python's built-in range but returns a NumPy array instead of a list iterator. It can also accept floating-point arguments.2
numpy.linspace(start, stop, num): This function creates an array with a specified number (num) of evenly spaced values over a specified interval [start, stop]. Both start and stop are included in the array. This function is often preferred over arange when working with floating-point numbers, as it provides direct control over the number of output points and avoids potential floating-point precision issues that can arise when specifying a step.2

<!-- Slide number: 17 -->
# NumPy: Creating NumPy Arrays (4 of 4)
| Function | Description | Example Usage |
| --- | --- | --- |
| np.array(object) | Creates an array from a Python list or tuple. | np.array() |
| np.arange(start, stop, step) | Creates an array with regularly spaced values within a given interval. | np.arange(0, 10, 2) |
| np.linspace(start, stop, num) | Creates an array with a specified number of evenly spaced values. | np.linspace(0, 1, 5) |
| np.zeros(shape) | Creates an array of a given shape filled with zeros. | np.zeros((2, 3)) |
| np.ones(shape) | Creates an array of a given shape filled with ones. | np.ones((3, 3)) |
| np.empty(shape) | Creates an uninitialized array of a given shape. | np.empty((2, 2)) |

<!-- Slide number: 18 -->
# Exercises
1. Create a Sequence: Create a 1D NumPy array containing all the integers from 10 to 50, inclusive.
2. Zero Matrix: Create a 3x3 NumPy array where all elements are zero. Print its shape and data type.
3. Identity Matrix: Create a 5x5 identity matrix (an array with ones on the main diagonal and zeros elsewhere). (Hint: Find a specific function).
4. Linspace Array: Use np.linspace to create a 1D array containing exactly 10 floating-point numbers that are evenly spaced between 0 and 1.
5. List to Array Conversion: Given the Python list data = [, ], convert it into a NumPy array. Then, print the array's shape, ndim, and dtype.
6. Random Array: Create a 4x4 array filled with random floating-point numbers between 0 and 1. (Hint: random.rand() for NumPy).

<!-- Slide number: 19 -->
# NumPy: Array Indexing, Slicing, and More
This part of lecture is abouty accessing and manipulating subsets of data within a NumPy ndarray.
These techniques is fundamental for data filtering, feature engineering, and data manipulation.
There is a crucial distinction between "views" and "copies" of array data(a common source of bugs but is essential for writing efficient, memory-aware code.)

<!-- Slide number: 20 -->
# NumPy: Basic Indexing and Slicing (1 of )

![](Picture6.jpg)
NumPy basically extends Python's familiar indexing and slicing syntax to work seamlessly with N-dimensional arrays.
As with Python lists, NumPy arrays are 0-indexed, meaning the first element is accessed at index 0.2
For one-dimensional arrays, the syntax is identical to that of lists:

![](Picture8.jpg)

<!-- Slide number: 21 -->
# NumPy: Multi-dimensional arrays
The power of NumPy's indexing becomes apparent with multi-dimensional arrays.
Subsets of data are accessed by providing a tuple of indices or slices, separated by commas, within a single pair of square brackets: array[row_spec, column_spec,...].2

<!-- Slide number: 22 -->
# NumPy: 2d arrays

![](ContentPlaceholder4.jpg)

<!-- Slide number: 23 -->
# NumPy: Reshape function

![](ContentPlaceholder4.jpg)

<!-- Slide number: 24 -->
# NumPy: Slice using 3d array

![](Picture4.jpg)

<!-- Slide number: 25 -->
# NumPy: Views vs. Copies: A Critical Distinction
When you slice a standard Python list, you get a new list containing a copy of the requested elements. Modifying this new list has no effect on the original.
In NumPy, the behavior is different: basic slicing creates a view of the original array, not a copy.2
A view is an object that looks at the same underlying data buffer as the original array. It does not have its own data. This means that if you modify a view, the changes will be reflected in the original array.

<!-- Slide number: 26 -->
# NumPy: Modifying a view

![](Picture8.jpg)

<!-- Slide number: 27 -->
# NumPy: View is an architectural choice
This "view" behavior is a performance optimization.
Data science and scientific computing often involve working with arrays that can be gigabytes in size.
If every slicing operation created a full copy of the data, memory usage would explode, and performance would plummet due to the immense overhead of memory allocation and data copying.
By returning a view, NumPy allows for highly memory-efficient access to and modification of sub-parts of an array without duplicating the entire dataset. This design choice prioritizes the performance and memory efficiency paramount in numerical computing over the safer (but slower) "copy-by-default" behavior of standard Python lists.
If the goal is to create a new array that is a completely independent duplicate of the original data, the .copy() method must be used explicitly. This is known as a deep copy.2

<!-- Slide number: 28 -->
# NumPy: Deep copy

![](ContentPlaceholder4.jpg)

### Notes:

<!-- Slide number: 29 -->
# Reference
NumPy User Guide, Release 2.2.0,https://numpy.org/doc/2.2/numpy-user.pdf
NumPy: the absolute basics for beginners, https://numpy.org/doc/stable/user/absolute_beginners.html
NumPy's SIMD-Friendly Design Boosts Performance Over Python Lists | by Harshil Jani,2.7.2025, https://python.plainenglish.io/numpys-simd-friendly-design-boosts-performance-over-python-lists-0496e5e170eb
Stop Using Python Lists and Start Using These Instead | DATAQUEST, 02.07.2025 https://support.dataquest.io/en/articles/811-stop-using-python-lists-and-start-using-these-instead
