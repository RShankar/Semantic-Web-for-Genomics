Chapter 3 of Cristianini and Hahn's book uses the example of a master regulatory gene called *eyeless*. A master regulatory gene produces proteins that control large cascades of other genes that produce a complex feature (in this case: an eye). *Eyeless* controls 2000+ genes. In 1994, Gehring turned it on in different parts of the body of a fruitfly and non-functioning eyes sprouted in those areas. These master regulatory genes appear in different species (e.g., mice and humans) for the same purpose. The human version (*aniridia*) is identical to the fruitfly *eyeless* gene in certain key segments. One key part: *PAX* (paired-box) domain - 128 AA (amino acid) long, which binds specific sequences of DNA. Conserved for 600 My (Million years). Another common element - the *HOX* (homeobox) domain - 60 AA long and is found in 0.2%+ of vertebrate genes. Such a situation is typical, with genes shared across distantly related species. 

For more on HOX and PAX, with help from GO ontology, go [here](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Tools/Tools.md)

Use of BLAST to find orthologs: Go the NCBI Sequence Identifiers [web page](https://www.ncbi.nlm.nih.gov/genbank/sequenceids/) and enter *Pax3*  which appears for the house mouse species (see the Tools.md file). Choose 'Protein' in the drop down menu to the left of the search window. A total of 1816 entries appear, from different species (see Taxon on the right hand side). Screen capture is given below:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/Sequence%20Alignment/Screenshot_2018-11-15%20Pax3%20-%20Protein%20-%20NCBI.png "PAX3 Sequence Finder on NCBI")

Clicking on 'Mus musculus' on the right hand side gives only for the house mouse. Note the change in 'search Details' to: "Pax3[All Fields] AND "Mus musculus"[porgn]".  Click on FASTA for the first entry. The following 479 AA protein sequence is displayed:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/Sequence%20Alignment/Screenshot_2018-11-15%20Pax3%20protein%20%5BMus%20musculus%5D%20-%20Protein%20-%20NCBI.png "Mouse PAX3 protein sequence")

Backtrace (click the back button for the browser) to see the web page with the first 20 of 1816 entries. Now, click on Homo Sapiens in the species/Taxon box on the right hand side top. Note the search details: "Pax3[All Fields] AND "Homo sapiens"[porgn]". Click on FASTA for the third entry. The following 479 AA protein sequence is displayed:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/Sequence%20Alignment/Screenshot_2018-11-15%20paired%20box%20protein%20Pax-3%20isoform%20PAX3%20%5BHomo%20sapiens%5D%20-%20Protein%20-%20NCBI.png "Human PAX3 protein sequence")

Go to the BLAST site and choose the [blastp](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins) tab (for protein sequence alignment). Click on the "Align two or more sequences." Copy the two protein sequences from above (including the comment line that starts with ">" at the start of the sequence). Here is the screen at that moment:

![alt text]()
