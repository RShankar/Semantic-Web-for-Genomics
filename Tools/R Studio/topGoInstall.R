# Initial installation steps
if (!requireNamespace("BiocManager", quietly=TRUE)) install.packages("BiocManager")
BiocManager::install()
if (!requireNamespace("BiocManager", quietly=TRUE))
  +     install.packages("BiocManager")
BiocManager::install("topGO")

# Run and explore the package
setwd("/home/shankar/Desktop/GO_with_R")
getwd()

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

# Ready to start topGO exploration



library(topGO) # creates 3 GO environments (for BP, MF, and CC), from GO.db
# Explore
BPterms <- ls(GOBPTerm)
head(BPterms)

library(ALL)
data(ALL)
data(geneList)


library(genefilter)
affyLib <- paste(annotation(ALL), "db", sep = ".")
library(package=affyLib, character.only = TRUE)

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