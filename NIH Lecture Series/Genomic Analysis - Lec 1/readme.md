Slides and my web exploration are included.

Note: This series, entitled "Current Topics in Genome Analysis 2016"  were recorded at NIH in 2016. Here is the [link](https://www.genome.gov/12514288/current-topics-in-genome-analysis-2016-course-syllabus-handouts-and-videos/).

* Biological Sequence Analysis, Part 1, Lec 1: 

Lecture 1 uses databases for illustrative purposes. The htm page for that is included in this folder. 

I know there is a way to view html files within Github. But for now, just download the htm/html file along with the other folder (not the PDF file) and open the htm/html file with Mozilla Firefox. You should see a database page as shown below:

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/NIH%20Lecture%20Series/Genomic%20Analysis%20-%20Lec%201/DBs%20used%20in%20Lec%201%20NIH.png)

Summary of the lecture:

Sequence Similarity and Homology. To derive biological inferences with regard to: structural, functional, and evolutionary relationships. Local sequence alignment performed, using scoring matrices that depend upon  physicochemicla and biological characteristics (charge, size, and hyrophobicity, and frequency among all proteins) of nucleotides and amino acids. Blosum 60 default filter. Try a higher and a lower one. Intro to BLAST. Many papers have misinterpreted the results. Guidelines provided on avoiding such situations: Calculate E, a statistical measure that depends on the # of letters in query and database, and normalized score. It represents the number of High-scoring segment pairs (HSPs) found purely by chance. so, lower values signify higher similarity. Good: E < 10<sup>-6</sup> for nucleotides; and < 10<sup>-3</sup> for proteins. Sequences used in examples are [here](https://research.nhgri.nih.gov/teaching/seq_analysis.shtml). 

First Sequence: 
BLASTP

>Query sequence
MSSAAAAAAGAAGGGALFQPQSVSTANSSSSNNNNSSTPAALATHSPTSNSPVSGASSASSLLTAAFGNL
FGGSSAKMLNELFGRQMKQAQDATSGLPQSLDNAMLAAAMETATSAELLIGSLNSTSKLLQQQHNNNSIA
PANSTPMSNGTNASISPGSAHSSSHSHQGVSPKGSRRVSACSDRSLEAAAADVAGGSPPRAASVSSLNGG
ASSGEQHQSQLQHDLVAHHMLRNILQGKKELMQLDQELRTAMQQQQQQLQEKEQLHSKLNNNNNNNIAAT
ANNNNNTTMESINLIDDSEMADIKIKSEPQTAPQPQQSPHGSSHSSRSGSGSGSHSSMASDGSLRRKSSD
SLDSHGAQDDAQDEEDAAPTGQRSESRAPEEPQLPTKKESVDDMLDEVELLGLHSRGSDMDSLASPSHSD
MMLLDKDDVLDEDDDDDCVEQKTSGSGCLKKPGMDLKRARVENIVSGMRCSPSSGLAQAGQLQVNGCKKR
KLYQPQQHAMERYVAAAAGLNFGLNLQSMMLDQEDSESNELESPQIQQKRVEKNALKSQLRSMQEQLAEM
QQKYVQLCSRMEQESECQELDQDQDVEQEQEPDNGSSDHIELSPSPTLTGDGDVSPNHKEETGQERPGSS
SPSPSPLKPKTSLGESSDSGANMLSQMMSKMMSGKLHNPLVGVGHPALPQGFPPLLQHMGDMSHAAAMYQ
QFFFEQEARMAKEAAEQQQQQQQQQQQQQQQQQQEQQRRFEQEQQEQQRRKEEQQQQIQRQQQHLQQLQQ
QQMEQQHVATAAPRPQMHHPAPARLPTRMGGAAGHTALKSELSEKFQMLRANNNSSMMRMSGTDLEGLAD
VLKSEITTSLSALVDTIVTRFVHQRRLFSKQADSVTAAAEQLNKDLLLASQILDRKSPRTKVADRPQNGP
TPATQSAAAMFQAPKTPQGMNPVAAAALYNSMTGPFCLPPDQQQQQQTAQQQQSAQQQQQSSQQTQQQLE
QNEALSLVVTPKKKRHKVTDTRITPRTVSRILAQDGVVPPTGGPPSTPQQQQQQQQQQQQQQQQQQQQAS
NGGNSNATPAQSPTRSSGGAAYHPQPPPPPPPMMPVSLPTSVAIPNPSLHESKVFSPYSPFFNPHAAAGQ
ATAAQLHQHHQQHHPHHQSMQLSSSPPGSLGALMDSRDSPPLPHPPSMLHPALLAAAHHGGSPDYKTCLR
AVMDAQDRQSECNSADMQFDGMAPTISFYKQMQLKTEHQESLMAKHCESLTPLHSSTLTPMHLRKAKLMF
FWVRYPSSAVLKMYFPDIKFNKNNTAQLVKWFSNFREFYYIQMEKYARQAVTEGIKTPDDLLIAGDSELY
RVLNLHYNRNNHIEVPQNFRFVVESTLREFFRAIQGGKDTEQSWKKSIYKIISRMDDPVPEYFKSPNFLE
QLE

Start at the  [NCBI site](https://blast.ncbi.nlm.nih.gov/Blast.cgi) to follow the example. Could use RefSeq in GenBank to get an unique seq (not multiple similar sequences). But the slide uses the option of 'Non-redundant protein sequences.' RefSeq Accession number prefixes: NT for genomic contigs, NM for mRNA, NP for proteins, NR for non-coding transcripts; and XM and XP for model mRNA and model proteins from genome annotation. Look for Identities matches in detailed sequence comparisons to be >= 25% for proteins; and >= 70% for nucleotides. But do not ignore biology! For the example sequence chosen in the slides, there is 100% match with Prospero, isoform L (Drosophilia melanogaster ref NP_788636.3). It is NOT the top one in our Year 2018 search. There are 12 others with higher Total scores. Low complexity regions (e.g., introns or repeats) are shown in lc letters (they represent biased compositions). Gap (indels) seen in the lecture slide for 1197 to 1256 can be seen here too. 

Now, on to comparison of two sequences using BLAST2:
BLAST 2 Sequences

>NP_008872.1 SOX-10 [Homo sapiens]
MAEEQDLSEVELSPVGSEEPRCLSPGSAPSLGPDGGGGGSGLRASPGPGELGKVKKEQQDGEADDDKFPV
CIREAVSQVLSGYDWTLVPMPVRVNGASKSKPHVKRPMNAFMVWAQAARRKLADQYPHLHNAELSKTLGK
LWRLLNESDKRPFIEEAERLRMQHKKDHPDYKYQPRRRKNGKAAQGEAECPGGEAEQGGTAAIQAHYKSA
HLDHRHPGEGSPMSDGNPEHPSGQSHGPPTPPTTPKTELQSGKADPKRDGRSMGEGGKPHIDFGNVDIGE
ISHEVMSNMETFDVAELDQYLPPNGHPGHVSSYSAAGYGLGSALAVASGHSAWISKPPGVALPTVSPPGV
DAKAQVKTETAGPQGPPHYTDQPSTSQIAYTSLSLPHYGSAFPSISRPQFDYSDHQPSGPYYGHSGQASG
LYSAFSYMGPSQRPLYTAISDPSPSGPQSHSPTHWEQPVYTTLSRP

>NP_003131.1 sex determining region Y [Homo sapiens]
MQSYASAMLSVFNSDDYSPAVQENIPALRRSSSFLCTESCNSKYQCETGENSKGNVQDRVKRPMNAFIVW
SRDQRRKMALENPRMRNSEISKQLGYQWKMLTEAEKWPFFQEAQKLQAMHREKYPNYKYRPRRKAKMLPK
NCSLLPADPASVLCSEVQLDNRLYRDDCTKATHSRMEHQLGHLPPINAASSPQQRDRYSHWTKL

The E value is seen to be 6 e<sup>-27</sup>, a bit better than the value in the 2016 slide. For context, SOX-10, chosen here for comparison, is at 22q13.1. It is compared here with a region in Chr Y. For more info, visit this [page](https://ghr.nlm.nih.gov/gene/SOX10#conditions). It may be a sensitive indicator for metastatic melanoma. see this [ref](https://www.ncbi.nlm.nih.gov/pubmed/25356946). Here is the  UCSC [gene browser page](https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=chr22%3A37972312%2D37984532&hgsid=704632061_gdJ4J0j8e8FjSLKeVepxXyYyGjLJ) for SOX-10. The browser page shows gene expressions in 53 different tissues (in the middle of the page). At the bottom, it shows sequence similarity with other species ('Multiz Alignments'). Click on any of them to see a detailed sequence match. The brower page also shows that there are 151 common (found in >= 1% of the samples) SNPs. 

BLAT - BLAST-like alignment tool at the UCSC browser. Somewhat similar to MegaBLAST. Method of choice when looking for exact matches in N databases. 500 times faster Vs BLAST. May miss divergent divergent or shorter seq alignments. BLASTP is more efficient for proteins. To access BLAT, go to the home page [here](https://genome.ucsc.edu/index.html) and click on the link for BLAT. Enter this sequence:
>CB312814 NICHD_Rh_Ov1 Macaca mulatta cDNA clone
GGGGGTGGAGCTGCCAGAGTAAAGCAAAGAGCAAGGAAGCAGGCTCGTTGGAAGGGGTTGTGACAGCCCC
AGCAATGTGGAGAAGTCTGGGGCTTGCCCTGGCTCTCTGTCTCCTTCCATCGGGAGGAACAGAGAGCCAG
GACCAAAGCTCCTTCTGTAAGCAACCCCCAGCCTGGAGCATAAGAGATCAAGATCCAATGCTAGACTCCA
ATGGTTCAGTGACTGTGGTCGCTCTTCTTCAAGCCAGCTGATACCTGTGCATACTGCANGCATCTAAATT
GGAAGAACTGCGAGTAAAACTGGAGAAAGAAGGATATTCTAAATATTCCTATATTGGTGGTAATCATCAA
GGGATCTCTTCTCGATTAAAATACACACATCTTTAGAAAAAAGGTTTCAGAGCATATTCCTGTATATTCA
CCAGAAGAAAACCCAACCGATGTCTGGACTCTTTTAATGGAAACCAAGAAGACCTCCTCATATATGACGG
ATGTGGCCTTCCTGGAAAACACCCTGGTTGGCCTTTTTCCTTCCCAACCTTGGCGAATGGTAAAAAAACC
CCTTTAAATGGTTTTCCGGGAAAAAAAAAGTGGGAAATTGGTCTCCTCCCAAATCTCAAAAAAGAAAAAA
TTTTTGTAAAAAGGGATCTTTTTGGGCACCGGGGGGAAAAAAAAATTTGAAAACTTCCCCCACCCCCCTT
TTTCCCTCTTTGGGGACTCCTTCCCAAATTCCGGGGACATCCCCCCT

Change to 'Rhesus' from 'Human' at the top left. Result is a web page with stats on score, start, end, identity score, chromosome #, and span (length of the match). There will be two action buttons: Browser and Details. 

Click on the link for browser for the high score match (the first one). It will take you to the UCSC browser page.
Click on 'Other RefSeq (near the top) to expand. You will see about 12 matches. The first one is: Homo sapiens selenoprotein P (SELENOP), transcript variant 2, mRNA, with RefSeq # of NM_001085486.2. Click on it to find details: It has 96.4% identity and is found in Chr 6.  You can also click on the details link from the BLAT results page. You will get a traditional BLAST like base pair alighnment page. Matches are uc and blue; uc light blue - splice (indel) sites. Note: Match is with Genomic chr6 (reverse strand) at fairly distant places. 
