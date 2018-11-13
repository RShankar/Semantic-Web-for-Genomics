AmiGO 2 is available [here](http://amigo.geneontology.org/amigo) for general use. I will explore in the context of the *eyeless* master regulatory gene discussed in Chapter 3 of Cristianini and Hahn's book. Parts of this gene are conserved and have appeared in different distant species such as fruit fly, human and mice.

Click on 'Advanced Search' and select "Annotations' from the drop down menu. Enter 'eyeless' in the Filter box on the left hand side. A total of 48 annotations (as of Novembere 2018) are listed, several of them redundant. Next try the Search box on the home page with "PAX". It will list 51  ontology terms (seems like a string match), 273 genes and gene products (semantic match, across multiple organisms), and 4355 entries for Annotatations (it covers all the three major sub-ontologies). Click on Annotations. Chose user filters for Drosophili M (under organisms), regulates - biological regulation and bilogical process (under Go Class), and Regulation of autophagy (under Go class (Direct)). One entry is shown. 

Click on the Tools and Resources tab on the home page. Scroll down and click on 'Term enrishment services.' It takes to a new page (PANTHER Classification System). Enter PAX and HOX in the upper box. Choose human and fruitfly as the species (I chose another one too, for variety). Under analysis, choose:  Functional classification viewed in gene list. Click on the next page: PAX orthologs. It gives a long list that includes all species (not sure why). It is a growth factor (in common). 

Now Try REVIGO [here](http://revigo.irb.hr/). Click on GoTermFinder on the right hand side. Entered PAX and HOX on two separate lines with <Enter>, and choose Fruit fly. The two genes were shown to appear together at p < 0.01 in three GO terms as listed here (Out of 37 found). The complete list is [here]()

Table and Tree views from the site are provided below

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Tools/Images/Table%20HOX%20PAX%203%20GO%20terms.png "Table for HOX and PAX GO term linkages")

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Tools/Images/Tree%20HOX%20PAX%203%20GO%20Terms.png "Tree for HOX and PAX Go term linkages")




Also read the help documentation (see the iink for 'help document'). I also tried the example they have, with 11 entries. For yeast, it gives an output that shows matches for all 11 of 11. I tried with Human, no results (to be expected, I guess, if the naming is specific). 

Additional information: AmiGO 2 also provides desktop/personal web-based set of tools for searching, browsing, and curating the Gene Ontology database. It has been implemented in Node, the server backend for JavaScript. Detailed installation instructions are provided for Ubuntu installation [here](http://wiki.geneontology.org/index.php/AmiGO_2_Manual:_Installation_(2.4.x)). For a specific curation objective (as an example), click on 'overview documentation' link on the About tab on the Amigo 2 [home](http://amigo.geneontology.org/amigo) page. Click on a link on the left hand side: 'Phylogenetic Annotation.'  The tool is described in this [paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3178059/pdf/bbr042.pdf). It can be downloaded and installed from [here](http://paintcuration.usc.edu/), if you wish to be a curator. 
