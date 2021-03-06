I will document here the installation of R Studio and R on Linux, and R packages useful for GO. 

#### Install R:
In a terminal window: 
* sudo apt install r-base-core
  > enter password; installs>
* R -version
  > R version 3.4.4 ...
* R
  > in interactive mode: try 2+2, get the result of 4
* q() 
  > quit

This R version was 3.4.4. TopGo is a Bioconductor package. Bioconductor needs 3.5+

#### Update R:
Steps for updating R (for Ubuntu 18.0.4) are at this [link](https://www.digitalocean.com/community/tutorials/how-to-install-r-on-ubuntu-18-04). I followed that and updated R. Now I have version 3.5.2 - can install bioconductor.

#### Install R Studio:
Download site: https://www.rstudio.com/products/rstudio/download/#download
Download option: RStudio 1.1.463 - Ubuntu 16.04+/Debian 9+ (64-bit)
Save, click to install, provide password. 

R Studio is installed. It, however, still pointed to the old R version, so Bioconductor would not load. I restarted the computer. That took care of that. If there is a need to link the latest R version and it is not /usr/bin/R, but in /usr/local/bin/R, then that needs to be explicitly indicated in a ~/.profile file with an environment variable declaration as such: export RSTUDIO_WHICH_R=/usr/local/bin/R . More on this is [here](https://support.rstudio.com/hc/en-us/articles/200486138-Changing-R-versions-for-RStudio-desktop).

#### Install Bioconductor: 
From the topGo.pdf, execute this R code from RStudio:

```R
# Initial installation steps
if (!requireNamespace("BiocManager", quietly=TRUE)) install.packages("BiocManager")
BiocManager::install()
if (!requireNamespace("BiocManager", quietly=TRUE))
  +     install.packages("BiocManager")
BiocManager::install("topGO")
```

More on BiocManager is found [here](https://cran.r-project.org/web/packages/BiocManager/vignettes/BiocManager.html)
Complete package list for Bioconductor is found [here](https://bioconductor.org/packages/release/bioc/)
The tutorial requires ALL Affymetrix data. Package vignette is found [here](https://bioconductor.org/packages/release/data/experiment/html/ALL.html). The topGO.pdf indicates that several packages are loaded via a namespace and not attached. Meaning of that is given [here](https://stackoverflow.com/questions/14988722/in-r-what-does-loaded-via-a-namespace-and-not-attached-mean). 
Now, continuing with the installation of all the packages listed on the last page of the topGo tutorial. 

Note: Multiple packages can be loaded with the c() function for combining multiple names; however, I am doing one at a time, just as a precaution, to see whether any dependency problem arise. You should be able to combine them as follows, as an example, for the first three: c("ALL", "AnnotationDbi", "Biobase"), instead of their individual declarations as given below.

Note: All software packages are accessed from [here](https://bioconductor.org/packages/3.8/bioc/); All annotation/database packages are accessed from [here](https://bioconductor.org/packages/3.8/data/annotation/)


```R
BiocManager::install("ALL", version = "3.8")
BiocManager::install("AnnotationDbi", version = "3.8")
BiocManager::install("Biobase", version = "3.8")
BiocManager::install("BiocGenerics", version = "3.8")
BiocManager::install("GO.db", version = "3.8")
BiocManager::install("IRanges", version = "3.8")
BiocManager::install("Rgraphviz", version = "3.8")
BiocManager::install("S4Vectors", version = "3.8")
BiocManager::install("genefilter", version = "3.8")
BiocManager::install("graph", version = "3.8")
BiocManager::install("hgu95av2.db", version = "3.8")
BiocManager::install("multtest", version = "3.8")
BiocManager::install("org.Hs.eg.db", version = "3.8")


```
There was a warning that the following packages could not be updated: cluster, manipulateWidget, and foreign. These are packages from CRAN repository. They are updated thus: In R Studio, go to Tools --> Install Packages. It will point to CRAN. Choose these packages from the long list there. Another package, listed in the topGo documentation, is 'SparseM' which is a CRAN package. It has many dependencies. R Stuio will ask whether you wish to start R on your own. Answer: "No." All of these were installed with no issues.  

I then went back to bioconductor insall of the next one ('S4Vectors'). This message still appeared: "installation path not writeable, unable to update packages: manipulateWidget, cluster, foreign." According to Bioconductor forum, this is not an error; points to the fact that those packages were installed earlier with admin rights. I just updated from CRAN. So, hopefully, I have taken care of the problem. If you need to resolve this issue later on, [read this]( https://stackoverflow.com/questions/41839214/installation-path-not-writable-r-unable-to-update-packages). 

Two other packages: lattice and xtable are from the CRAN repository. Update from there. 
