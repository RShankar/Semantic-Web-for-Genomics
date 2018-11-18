Figure 2 in Chapter 3 of the GO book is used as the starting point for this discussion. The Go identifier to track is: GO:0003993. Here is the screenshot within Protege, with appropriate tools and windows used:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Protege%20GO:0003993Annot.png "Protege with Go.owl and Annotations for a GO term")

A regulator example is shown in Protege for GO:0003991 here:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Regulator%20Example%20GO:0003991.png "Regulator pathways in OntoGraph in Protege")

The same is obtained via AmiGO2 and QuickGO tools as follows:

Start at AmiGo2 [home page](http://amigo.geneontology.org/amigo/dd_browse). Type in GO:0003993 in the Quick Search box. Choose the first entry there. We will get a list of annotations (see below screens for all species and just for humans). Annotation is the process of assigning GO terms to gene products.
 
![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/AmiGO%202%20Term%20Details%20for%20acid%20phosphatase%20activity%20(GO%200003993).png "All species annotations for GO:0003993")

The screen below shows annotations for GO:0003993 just for humans. Note the filter entry on the left hand side:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/AmiGO%202%20Term%20Details%20for%20Human%20acid%20phosphatase%20activity%20(GO%200003993).png "Homo Sapiens annotations for GO:0003993")

To match up with the book's Fig. 2 in Ch. 3, I filtered by the 'contributor' (UniProtKB in this case). Result is this list of annotations (note that PHO3 in Fig. 2 is not listed here - because of the NOT identifier in column 4 of GAF (shown as row #4)) ; but there are two other PHO proteins -annotations for them would not have asserted the NOT identifier):

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/UniProt%20Contributor%20list_Pho3%20not%20there.png "UniProtKB contibutions to annotations for GO:0003993")

**QuickGO term history information**: Instead of following up on GO:0003993, let us follow this for GO:0000346, from where evidence for GO: 0003993 was obtained. For this, start at AmiGO2 home page again. On the search results page, on the left hand side, near the top, see this entry: History - See term history for GO:0000346 at QuickGO. Click on the QuickGo link to get this screen:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/GO%20Ontology/Ancestor%20Chart%20QuickGO%20Term%20GO%200000346.png "Ancestor chart at QuickGo for GO:0000346")
