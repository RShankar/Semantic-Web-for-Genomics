I will document here the installation of Python on Linux and a set of Python packages useful for GO.
The GO consortium has a list of software libraries here: ftp://ftp.geneontology.org/pub/go/www/GO.tools_by_type. software.shtml

This Python tutorial is based on Chapter 16 in the GO Handbook. There is an interactive version of the tutorial, including solutions, at this site: http://gohandbook.org . GAF format info is [here](http://geneontology.org/page/go-annotation-file-gaf-format-21)

I will document the steps here: I already had miniconda and Python 3.6.3 on my Linux system. I will assume that you can install those.

Some comments from Stackoverflow and oher online community sites:

First, build the Python interactive environment on your PC: Install Jupyter, an  interactive data science and scientific computing environment across all programming languages (Python, R, etc). https://jupyter.org/install . I have had miniconda3. Jupyter recommends Anaconda. Difference?

The difference is that miniconda is just shipping the repository management system. So when you install it there is just the management system without packages. Whereas with Anaconda, it is like a distribution with some built in packages.

Like with any Linux distribution, there are some releases which bundles lots of updates for the included packages. That is why there is a difference in version numbering. If you only decide to upgrade Anaconda, you are updating a whole system.

I use Miniconda myself. Anaconda is bloated. Many of the packages are never used and could still be easily installed if and when needed.

Note that Conda is the package manager (e.g. conda list displays all installed packages in the environment), whereas Anaconda and Miniconda are distributions. A software distribution is a pre-build and pre-configured collection of packages that can be installed and used on a system, while a package manager is a tool that automates the process of installing, updating, and removing packages.

Open a terminal and type:
conda list

response in my case:
```
$ conda list
# packages in environment at /home/shankar/miniconda3:
#
asn1crypto 0.22.0 py36h265ca7c_1
ca-certificates 2017.08.26 h1d4fec5_0
certifi 2017.7.27.1 py36h8b7b77e_0
cffi 1.10.0 py36had8d393_1
chardet 3.0.4 py36h0f667ec_1
conda 4.3.30 py36h5d9f9f4_0
conda-env 2.6.0 h36134e3_1
cryptography 2.0.3 py36ha225213_1
idna 2.6 py36h82fb2a8_1
libedit 3.1 heed3624_0
libffi 3.2.1 h4deb6c0_3
libgcc-ng 7.2.0 h7cc24e2_2
libstdcxx-ng 7.2.0 h7a57d05_2
ncurses 6.0 h06874d7_1
openssl 1.0.2l h077ae2c_5
pip 9.0.1 py36h8ec8b28_3
pycosat 0.6.2 py36h1a0ea17_1
pycparser 2.18 py36hf9f622e_1
pyopenssl 17.2.0 py36h5cc804b_0
pysocks 1.6.7 py36hd97a5b1_1
python 3.6.3 hc9025b9_1
readline 7.0 hac23ff0_3
requests 2.18.4 py36he2e5f8d_1
ruamel_yaml 0.11.14 py36ha2fb22d_2
setuptools 36.5.0 py36he42e2e1_0
six 1.10.0 py36hcac75e4_1
sqlite 3.20.1 h6d8b0f3_1
tk 8.6.7 h5979e9b_1
urllib3 1.22 py36hbe7ace6_0
wheel 0.29.0 py36he7f4e38_1
xz 5.2.3 h2bcbf08_1
yaml 0.1.7 h96e3832_1
zlib 1.2.11 hfbfcf68_1
```

Python 3.6 is there, but Jupyter is not there. So, I will install it:

```
python3 -m pip install --upgrade pip
python3 -m pip install jupyter
$ pwd
/home/shankar
$ mkdir JupyterNotebook
jupyter notebook
```
An empgy interactive browser page for Jupyter opens up in a browser (To quit: close the browser page and use <ctrl>c in the terminal)

More on running the Jupyter notebook is here: https://jupyter.readthedocs.io/en/latest/running.html#running 

Download the Notebook from this site: https://nbviewer.jupyter.org/urls/dessimozlab.github.io/go-handbook/GO%20Tutorial%20in%20Python%20-%20Solutions.ipynb . Copy into JupyterNotebook folder.

Open (in the browser page of jupyter) this notebook. Import errors: Module not found. May need to set python path etc.

So, I will try first in the interactive mode in a terminal.

```
$ python
```

```python
Python 3.6.3 |Anaconda, Inc.| (default, Oct 13 2017, 12:02:49) 
[GCC 7.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
>>> 2 +2
4
>>> from goatools import obo_parser
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'goatools'
>>> quit()
```
So, I installed goatools and a package for visualization
```python
$ pip install goatools
$ pip install visualisedictionary
```
the visualization package did not install. 

Error message:
Trying pkg-config
    Package libcgraph was not found in the pkg-config search path.
    Perhaps you should add the directory containing `libcgraph.pc'
    to the PKG_CONFIG_PATH environment variable
    No package 'libcgraph' found
I tried to insall 'libcgraph'. To find out a solution...
From Stackoverflow and Ask Ubuntu, this seems to be the way:
```
sudo apt install python-pydot python-pydot-ng graphviz
```
It did not help. Error messages about pygraphviz. More installs....  
```
sudo apt-get install python-dev graphviz libgraphviz-dev pkg-config
pip install pygraphviz
pip install visualisedictionary
```
It installed successfully.
Next: ModuleNotFoundError: No module named 'future'. 
If you already have Python 3 code, you can instead use future to offer Python 2 compatibility with almost no extra work.
Here are the steps:
```
from future.standard_library import install_aliases
install_aliases()
from urllib.request import urlopen
import xmltodict`
```
No module named 'xmltodict' error
sudo pip install xmltodict```
```

