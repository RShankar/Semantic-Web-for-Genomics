I will document here the installation of R Studio and R on Linux, and R packages useful for GO. 

#### R installation:

sudo apt install r-base-core
> enter password; installs>

R -version
> R version 3.4.4 ...

R
> *in interactive mode: try 2+2, get the result of 4*

q() 
> *quit*

This R version was 3.4.4. TopGo is a Bioconductor package. However, Bioconductor needs 3.5+

Steps for updating R (for Ubuntu 18.0.4) are at this [link](https://www.digitalocean.com/community/tutorials/how-to-install-r-on-ubuntu-18-04). I followed that and updated R. 

Now I have version 3.5.2 - can install bioconductor.


#### R Studio installation:
Download site: https://www.rstudio.com/products/rstudio/download/#download

Download option: RStudio 1.1.463 - Ubuntu 16.04+/Debian 9+ (64-bit)

Save, click to install, provide password. 

R Studio is installed. It, however, still pointed to the old R version, so Bioconductor would not load. I restarted the computer. That took care of that. However, if there is a need to link the latest R version and it is not /usr/bin/R, but in /usr/local/bin/R, then that needs to be explicitly indicated in a ~/.profile file with an environment variable declaration as such: export RSTUDIO_WHICH_R=/usr/local/bin/R . More on this is [here](https://support.rstudio.com/hc/en-us/articles/200486138-Changing-R-versions-for-RStudio-desktop).

**Bioconductor**: From the topGo.pdf, execute this R code from RStudio:

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

```R
BiocManager::install("ALL", version = "3.8")

```

