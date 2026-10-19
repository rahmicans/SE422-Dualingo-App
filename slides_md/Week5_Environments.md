<!-- Slide number: 1 -->
# Environments
Anaconda Navigator, Jupyter Notebooks and Google Colab: Simplifying Python Environments and Tool Management

Dr. Göken Tonbul

<!-- Slide number: 2 -->
# Anaconda Navigator (1 of 6 )
What is Anaconda?
A free, open source distribution for Python and R programming languages provided by Anaconda Foundation.
Designed for data science, machine learning and scientific computing
It has a package manager named conda that bundles Python with a huge collection of pre installed scientific libraries like NumPy, Pandas, Matplotlib and more.
Provides complete toolkit without much hassle

<!-- Slide number: 3 -->
# Anaconda Navigator (2 of 6)
It is the graphical user interface (GUI) included with the Anaconda Distribution.
It reduces the dependency on command line while managing the complexity of rich set of features provided by different libraries.

<!-- Slide number: 4 -->
# Anaconda Navigator (3 of 6)
Key Features of Navigator
Application Launcher: A central hub to launch popular IDEs and tools with one click.
Jupyter Notebook, JupyterLab, Spyder, VS Code, Rstudio
Environment Management:
Visually create, clone, and delete separate "environments."
What's an environment? An isolated space to install specific versions of packages for a specific project. (e.g., "Project_A" uses Python 3.8, "Project_B" uses Python 3.10). This prevents package conflicts.
Package Management
Search, install, update, and remove thousands of Python packages (libraries) within a specific environment.
Easily see which packages are installed, not installed, or have updates available.

<!-- Slide number: 5 -->
# Anaconda Navigator (4 of 6)
Step 1: Go to the official Anaconda website (anaconda.com/download).
Step 2: Download the Anaconda Distribution installer for your operating system (Windows, macOS, or Linux).
Step 3: Run the installer and follow the on-screen instructions. (Note: The installation can be large, as it includes many packages).
Step 4: Once installed, find and open "Anaconda Navigator" from your computer's applications menu.
That's it! No separate installation for Navigator is needed; it's included in the main distribution.

<!-- Slide number: 6 -->
# Anaconda Navigator: A Quick Demo (5 of 6)
1. Launching an Application (Jupyter):
Go to the Home tab.
Find the "Jupyter Notebook" tile.
Click the
2. Creating a New Environment:
Go to the Environments tab on the left.
Click the Create button at the bottom.
Give your environment a name (e.g., my-new-project).
Select the Python version.
Click Create.
Launch button.
Installing a Package:
On the Environments tab, select the environment you just created.
In the package list on the right, change the filter from "Installed" to "Not Installed."
Search for a package (e.g., seaborn).
Check the box next to it and click Apply to install.

<!-- Slide number: 7 -->
# Anaconda Navigator: Summary (6 of 6)
Conda is the core of Anaconda Distribution. It is the command-line package manager that organizes the toolbox. You can build your own environments with it.
Anaconda is the all-in-one distribution that makes the overall process easier.
Anaconda Navigator is the GUI for that toolbox).
Navigator is the most user-friendly way to start managing data science tools and environments, especially for beginners.

<!-- Slide number: 8 -->
# Jupyter Notebooks (1 of 6)
It is an interactive data storytelling tool
It combines live code, visualizations, and narrative in one document
It is an open-source web application that allows you to create and share documents (called "notebooks") that contain:
Runnable codes (its core supported languages: Julia, Python, and R.)
Explanatory text (using Markdown)
Equations
Visualizations (chartsd, graphs)
Any other rich media sources
Provides a complete digital notebook solution to data scientists. . It allows you to not only write code but also explain your thought process right alongside the results.

<!-- Slide number: 9 -->
# Jupyter Notebooks (2 of 6)
Code Cells:
This is where you write and execute your code (e.g., Python).
You run a cell by pressing Shift + Enter.
The output (text, graphs, tables) appears directly below the cell.
Markdown Cells:
This is where you write your narrative text.
Uses Markdown for formatting (e.g., # Headings, **bold**, *italics*, lists).
When you run the cell, it renders as clean, formatted text.

<!-- Slide number: 10 -->
# Jupyter Notebooks: Features (3 of 6)
Interactive Workflow: Run small chunks of code one at a time, see the results, and make adjustments. Perfect for exploratory data analysis (EDA).
Storytelling & Sharing: You can build a complete data story—from data loading and cleaning to analysis and conclusion—all in one document. Easy to share with colleagues.
Reproducibility: The notebook contains the code, the output, and the explanation, making it easier for others (or your future self) to understand and reproduce your work.
Language Agnostic: While most popular for Python, it supports over 40 languages through different "kernels" (the computational engine behind the scenes).

<!-- Slide number: 11 -->
# Jupyter Notebooks: Setup (4 of 6)
Method 1: The Easy Way (Recommended)
Install the Anaconda Distribution.
Jupyter Notebook is already included.
You can launch it directly from Anaconda Navigator (just click "Launch").
Method 2: The Minimalist Way (using pip)
If you have Python installed but not Anaconda:
Open your command line (Terminal or Command Prompt).
Type: pip install notebook
To run it, type: jupyter notebook in your command line.

<!-- Slide number: 12 -->
# Jupyter Notebooks: Quick Demo (5 of 6)
1. Launching:
Open Anaconda Navigator and click Launch on the Jupyter Notebook tile.
This will open a new tab in your web browser showing the "Jupyter Dashboard" (a file browser).
2. Creating a New Notebook:
In the dashboard, navigate to the folder where you want to save your work.
Click the New button (top right) and select Python 3 (or your kernel of choice).
3. Working with Cells:
A new notebook opens with one empty Code Cell.
Type Python code: print("Hello, World!")Press Shift + Enter to run the cell.
4. Changing Cell Type:
Click on a cell.
Go to the toolbar at the top and change the dropdown from "Code" to "Markdown."
Type: # My First Analysis
Press Shift + Enter to render the text as a heading.
5. Saving:
Click the title ("Untitled") at the top to rename it.
The notebook saves automatically (or press Ctrl + S). The file will have an .ipynb extension.

<!-- Slide number: 13 -->
# Jupyter Notebooks (6 of 6)
Jupyter Notebook is an interactive web app for creating .ipynb documents.
It blends live code, text, and visualizations.
It's the industry standard for exploratory data analysis, data storytelling, and sharing reproducible research.
Easiest way to get it is by installing Anaconda.

<!-- Slide number: 14 -->
# Google Colab (1 of 6)
Google Colaboratory is a cloud-based, free-to-use Jupyter Notebook environment that requires no setup and provides powerful hardware.
Powerful Data Science with Zero Setup and Free GPUs
Key Features:
Zero Setup: No installation needed. Runs entirely in your web browser.
Cloud-Based: Notebooks are saved directly to your Google Drive.
Free Hardware: Provides free access to powerful computing resources, including GPUs (Graphics Processing Units) and TPUs (Tensor Processing Units), which are essential for deep learning.

<!-- Slide number: 15 -->
# Google Colab (2 of 6)
1. No Installation: All you need is a Google Account and a web browser. You can start coding in seconds.
2. Free GPU/TPU Access:  This is the killer feature. Training deep learning models can take days on a normal laptop. With a Colab GPU, it can take minutes or hours. This democratizes access to high-performance computing.
3. Easy Collaboration: Since notebooks are stored in Google Drive, you can share and collaborate on them just like a Google Doc.
Multiple users can comment on or even edit the same notebook simultaneously.
4. Pre-installed Libraries: Most common data science and machine learning libraries (TensorFlow, PyTorch, pandas) are already installed. You can install others using !pip install <package_name> directly in a code cell.

<!-- Slide number: 16 -->
# Google Colab (3 of 6)
1. Internet Connection Required: It's a cloud service, so you cannot work offline.
2. Resource Limits (Free Tier): Runtimes are not permanent. Your session will disconnect after a period of inactivity (e.g., 90 minutes) or after a maximum lifetime (e.g., 12 hours).
All your installed packages and files (except on Google Drive) will be deleted!
Access to the best GPUs (like V100s or A100s) is not guaranteed; you get what's available.
3. Data Storage: You must save your data to Google Drive (by "mounting" it) or upload it at the start of each session. Files uploaded directly to the Colab runtime are temporary.

<!-- Slide number: 17 -->
# Google Colab (4 of 6)
Step 1: Go to colab.research.google.com.
Step 2: Sign in with your Google Account.
Step 3: A pop-up will appear. Click "New notebook" at the bottom.
You are now in a fully functional Jupyter Notebook environment.
To Enable a GPU:
Go to the menu: Runtime -> Change runtime type.
Under "Hardware accelerator," select GPU (or TPU).
Click Save.

<!-- Slide number: 18 -->
# Google Colab (5 of 6)
Interface: The interface is nearly identical to a standard Jupyter Notebook (Code cells, Markdown cells, Shift + Enter to run).
Running a Shell Command:
You can run command-line commands by prefixing them with an exclamation mark !.
Example (installing a package): !pip install scikit-learn
Example (checking GPU): !nvidia-smi (This will show you what GPU you've been assigned).

<!-- Slide number: 19 -->
# Google Colab (6 of 6)
When you need powerful hardware (GPU/TPU) for free (e.g., Deep Learning).
When you want to collaborate easily with others.
When you want to get started quickly with zero setup.
When you're okay with the session time limits and being online.
