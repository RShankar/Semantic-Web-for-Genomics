See install.md for instructions to install R, R Studio, and Bioconductor. 
I have included GoFunction information; not used in topGo, but will read it later and apply.

topGo uses org.Hs.eg.db - which is "Genome wide annotation for Human, primarily based on mapping using Entrez Gene identifiers."

topGo's tutorial in PDF and my R code for the 'Quick Start' are enclosed. The tutorial is based on an article (enclosed) which identified differential gene profiles for ALL patients that may help personalize therapy to improve survival. 

Biobase of the Bioconductor project contains standardized data structures to represent genomic data. The *Expression Set* class "is designed to combine several different sources of information into a single convenient structure. An ExpressionSet can be manipulated (e.g., subsetted, copied) conveniently, and is the input or output from many Bioconductor functions." (From the attached PDF on ExpressionSet class). 

I have developed a Json tutorial that might be useful here. [Link](https://github.com/shankar4/Functional-Genomics/blob/master/bioistar%20handbook/JSONTutorial.R).

The ALL data is normalized which helps in providing differential gene profiles. it uses the rma() function. More [here](http://felixfan.github.io/RMA-Normalization-Microarray/). There are tradeoffs. Will discuss in class. 

Note: There is an omission in the tutorial. The function colMap() is not provided. It was available here: https://rpubs.com/aemoore62/TopGo_colMap_Func_Troubleshoot. My code has that included. I tried to communicate this to the author, but the web address given is incorrect. 
