Figure 2 in Chapter 3 of the GO book is used as the starting point for this discussion. The Go identifier to track is: GO:0003993. On my Linux system with 16GB RAM, there was no problem in loading GO.owl; but on my HP PC with 12 GB, I made this change to get it to work: Protege.l4j is the config file you will find in the downloaded Protege folder. Opened in Notepad and changed '-Xmx500M' to '-Xmx1024M'.  

Here is the screenshot within Protege, with appropriate tools and windows used:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Protege%20GO:0003993Annot.png "Protege with Go.owl and Annotations for a GO term")

A regulator example is shown in Protege for GO:0003991 here:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Regulator%20Example%20GO:0003991.png "Regulator pathways in OntoGraph in Protege")

The same is obtained via AmiGO2 and QuickGO tools as follows:

*Note:* AmiGo2 and QuickGo have been updated since the time I documented here! The information is the same, but presented in a much more intuitive way. Will demo in the class!

Start at AmiGo2 [home page](http://amigo.geneontology.org/amigo/dd_browse). Type in GO:0003993 in the Quick Search box. Choose the first entry there. We will get a list of annotations (see below screens for all species and just for humans). Annotation is the process of assigning GO terms to gene products.
 
![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/AmiGO%202%20Term%20Details%20for%20acid%20phosphatase%20activity%20(GO%200003993).png "All species annotations for GO:0003993")

The screen below shows annotations for GO:0003993 just for humans. Note the filter entry on the left hand side:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/AmiGO%202%20Term%20Details%20for%20Human%20acid%20phosphatase%20activity%20(GO%200003993).png "Homo Sapiens annotations for GO:0003993")

To match up with the book's Fig. 2 in Ch. 3, I filtered by the 'contributor' (UniProtKB in this case). Result is this list of annotations (note that PHO3 in Fig. 2 is not listed here - because of the NOT identifier in Field 4 of GAF) ; but there are two other PHO proteins -annotations for them would not have asserted the NOT identifier):

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/UniProt%20Contributor%20list_Pho3%20not%20there.png "UniProtKB contibutions to annotations for GO:0003993")

Field 11 (Fig. 2/Text book) provides a synonym for the identifier in column 2 (P00519, for PH03) as YBR092C. This can be seen at the UniProtKB database page for [PH03](https://www.uniprot.org/uniprot/P24031)

Field 13(Fig 2/Text book) identifies the taxon as [4932](https://www.ncbi.nlm.nih.gov/taxonomy/4932), the NCBI Id for the organism (Yeast, in this case) in which this gene is found. 

Fields 6,7, and 8 in the GAF file describe the evidence used to assert the annotation. Field 7 indicates the evidence code as IMP (Inferred from Mutant Phenotype). This is one of the 5 EXP codes (IDA, IPI, IMIP, IGI, and IEP) that are held in high regard by the community, as they are based on **experimental evidence**. Prefer them in enrichment analysis, gene mapping to specific functions, or its involvement in a specific biological pathway. Use them also for setting up trustworthy training sets in machine learning.  Figure 3/Text Book in Ch. 3 (pp. 32) lists also curated non-experimental annotation codes (14) and automatically assigned annotations (IEA). For IEA, there is an online reference to learn more. 

**QuickGO term history information**: Instead of following up on GO:0003993, let us follow this for GO:0000346, from where evidence for GO: 0003993 was obtained. For this, start at AmiGO2 home page again. On the search results page, on the left hand side, near the top, see this entry: History - See term history for GO:0000346 at QuickGO. (If this link is not found, go [here](https://www.ebi.ac.uk/QuickGO/search/GO:0000346) directly). Click on the QuickGo link to get this screen:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Ancestor%20Chart%20QuickGO%20Term%20GO%200000346.png "Ancestor chart at QuickGo for GO:0000346")
