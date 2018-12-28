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

This R version was 3.4.4. However, Bioconductor needs 3.5+
Here is the link for that (for Ubuntu 18.0.4):https://www.digitalocean.com/community/tutorials/how-to-install-r-on-ubuntu-18-04

Now I have version 3.5.2 - can install bioconductor now. 


#### R Studio installation:
Download site: https://www.rstudio.com/products/rstudio/download/#download

Download option: RStudio 1.1.463 - Ubuntu 16.04+/Debian 9+ (64-bit)

Save, click to install, provide password. 

R Studio is installed. It, however, still pointed to the old R version, so Bioconductor would not load. I restarted the computer. That took care of that. However, if there is a need to link the latest R version and it is not /usr/bin/R, but in /usr/local/bin/R, then that needs to be explicitly indicated in a ~/.profile file with an environment variable declaration as such: export RSTUDIO_WHICH_R=/usr/local/bin/R . More on this is [here](https://support.rstudio.com/hc/en-us/articles/200486138-Changing-R-versions-for-RStudio-desktop).
