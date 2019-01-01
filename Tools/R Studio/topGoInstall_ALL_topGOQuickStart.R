# The initial and final parts are the same as with topGoInstall.R
# In the middle, I explored the ALL dataset with the help of the bioconductor PDFs

# Set up your own home directory. 
setwd("/home/shankar/Desktop/GO_with_R")
getwd()

##### Start of Block A: Execute only once

# Initial installation steps
if (!requireNamespace("BiocManager", quietly=TRUE)) install.packages("BiocManager")
BiocManager::install()
if (!requireNamespace("BiocManager", quietly=TRUE))
  +     install.packages("BiocManager")
BiocManager::install("topGO")

# Install required packages from Bioconductor
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

# Install from CRAN these: cluster, manipulateWidget, foreign, SparseM, lattice, and xtable
# The installation process indicated that the first three are not writeable
# They may have been installed earlier with admin rights. So, I reinstalled them again.
# should solve that problem.

##### End of Block A: Execute only once

##### Explore ALL  

# repeated, so I can skip the above steps for the Quick Start. 
setwd("/home/shankar/Desktop/GO_with_R")
getwd()

library(ALL)
data(ALL)
# The above looks redundant; needed if there was more than one set, 
# another intuitive way: data ("ALL", package = "ALL)

# view documentataion on ALL
browseVignettes("ALL")
# ALLIntro.pdf and ALL.pdf can also be accessed at the bioconductor site
# Following steps are from the Vignette
show(ALL)
ALL[[1]] # lists the 128 IDs (variable name: cod in the dataframe) or ALL$cod
ALL[1]$diagnosis # to get the second entry of date of diagnosis. Can also use ALL[[2]]
ALL[1]$mol.biol # assigned mol biol of the cancer, mainly for B-cell ALL
# Details in ALL.pdf
# More organized access through Biomase package functions for phenoData
# for experimental phenotypes recorded in eSet and ExpressionSet-derived classes.
help('phenoData') 
# pData(ALL) return a data frame with samples as rows, vars as columns
p.df <- pData(ALL)
dim(p.df) # 128 x 21
names(p.df) # column names or variable names
summary(p.df)
phenoData(ALL) # meta info - class of 'AnnotatedDataFrame' 
varLabels(ALL) # lists names of the 21 variables

help('exprs') # Another Biobase function; retrieve expression data from eSets. 
p.expr <- exprs(ALL) # large matrix 1616000 elements, 13.2 Mb
# This exprs matrix is contained in the assayData slot. 
# 'lockedEnvironment' feature allows only safe operations to occur. Not sure where I saw it...
# calculate coefficient of variation normalized to the variable mean value
cvv <- apply(p.expr, 1, function(x){sd(x)/mean(x)}) # calculate sd/mean for the expr data with apply()
hist(cvv)# left side: expressed equally in case and control samples. 
# Distinguish the two groups
ok <- (cvv > 0.08) & (cvv < 0.18) # subset those with low to moderate expr, but with large variation (sd)
fALL <- ALL[ok,] # subset the eSet
show(fALL) # only 3841 out of 12625 are chosen
allx2 <- data.frame(t(exprs(fALL)), class=ALL$BT)
library(rpart)
rp1 <- rpart(class~.,data=allx2) # Note the ~. designation. Some S3 class related concept.
# yet to understand - 1/1/19
plot(rp1)
text(rp1)# A decision tree
names(rp1)
rp1$y # dependent variable

# Compare the original set and subset subsequent to filtering
p.expr[1,] # gives the data for different cods, the first one being 01005
allx2$X1005_at # The X1005 seems to be the Affymetric chip coordinates; confusing since cods are similar
# They are the only ones similara. Others are quite distinctly different. 


#### Explore topGO

library(topGO) # creates 3 GO environments (for BP, MF, and CC), from GO.db
# Explore
BPterms <- ls(GOBPTerm)
head(BPterms)

# geneList is a list of gene IDs and their p values - a toy function of topGO
data(geneList)

library(genefilter)
browseVignettes("genefilter")

affyLib <- paste(annotation(ALL), "db", sep = ".")
library(package=affyLib, character.only = TRUE) # data is interpreted w.r.t this chip annotataion

# explore geneList
sum(topDiffGenes(geneList)) # 50 genes have P < 0.01
# Pick Go terms with more than 10 annotated genes
sampleGOdata <- new("topGOdata",description = "Simple session", ontology = "BP", 
                    allGenes = geneList, geneSel = topDiffGenes, nodeSize = 10,
                    annot = annFUN.db, affyLib = affyLib)
sampleGOdata
# Perform Enrichment tests
# Method - classic; statistic - Fisher
resultFisher <- runTest(sampleGOdata, algorithm = "classic", statistic = "fisher")
resultFisher

# Method - classic; statistic - Kolmogorov-Smirnov
resultKS <- runTest(sampleGOdata, algorithm = "classic", statistic = "ks")
# Method - elim; statistic - K-S
resultKS.elim <- runTest(sampleGOdata, algorithm = "elim", statistic = "ks")
# Interpret results
allRes <- GenTable(sampleGOdata, classicFisher = resultFisher, classicKS = resultKS, 
                   elimKS = resultKS.elim, orderBy = "elimKS", ranksOf = "classicFisher",
                   topNodes = 10)

# Visually compare the p values from the classic and elim methods
#colMap function was missing; added from this link:
# https://rpubs.com/aemoore62/TopGo_colMap_Func_Troubleshoot
colMap <- function(x) {
  .col <- rep(rev(heat.colors(length(unique(x)))), time = table(x))
  return(.col[match(1:length(x), order(x))])
}

pValue.classic <- score(resultKS)
pValue.elim <- score(resultKS.elim)[names(pValue.classic)]
gstat <- termStat(sampleGOdata, names(pValue.classic))
gSize <- gstat$Annotated / max(gstat$Annotated) * 4
gCol <- colMap(gstat$Significant)
plot(pValue.classic, pValue.elim, xlab = "p-value classic", ylab = "p-value elim", 
     pch = 19, cex = gSize, col = gCol)

# Find Go Terms with less conservative p values for elim vs classic
sel.go <- names(pValue.classic)[pValue.elim < pValue.classic]
cbind(termStat(sampleGOdata, sel.go), elim = pValue.elim[sel.go], 
        classic = pValue.classic[sel.go])

showSigOfNodes(sampleGOdata, score(resultKS.elim), firstSigNodes = 5, useInfo = 'all')
# Filter probes/genes with low expression values and 
# also with very small variability across samples
# Start section 4 of topGo next