Continuation of Lecture 1.

How to effectively and efficiently analyze biological sequence data. Instead of one-to-one homology searches with BLAST, we will now do protein family comparisons. Goals: Find new/distant proteins and domain characteristics. One-against-many and many-against-one with pfam. A [superfamily](https://en.wikipedia.org/wiki/Protein_superfamily):  the largest grouping of homologous proteins. 

Profile: numerical representation of multiple sequence alignments. Conserved residues are identified and used. Good example: [Homeodomain protein](https://ghr.nlm.nih.gov/primer/genefamily/homeoboxes) - 60 AA with very few conserved domains. Because of that BLAST might not find all the sequences in the family. From the NIH site: homeobox genes have so many important functions, mutations in these genes are responsible for a variety of developmental disorders. For example, mutations in the HOX group of homeobox genes typically cause limb malformations. Examples of genes in this gene family: ALX4, ARX, HOXA13, HOXB13, OTX2, PAX3, PAX6, POU3F4, SHOX, SIX3.

First aspect is profile construction. Example: has 12 sequences 10 base long. There is substantial conservation in the last 3 positions with a consensus of TPG, with P occasionally changed to a T. In the position-specific scoring table, G to G match would be given a score of 150 (similarly for T to T). For the P position, lower score of 89 for P to P. for 2nd position, consensus is P, but with a score of 23, still positive. 

A second aspect is the pattern matching. Example in the slides: [FY]-x-C-x(2)-{VA}-x-H(3). []- one of the specified AAs; x is any; {} - not any of those; (n) - n of those. 

**Pfam**: protein domains with structural, functional, or evolutionary importance. Db: Pfam A. Experts at EBI maintain this. Program: HMMER. A hit is highly likely to be positive. Go to Pfam [site](http://pfam.xfam.org/). View a Clan - to find superfamilies. Click on Sequence Search. 
  * On the new page, click on 'here' to select options. In practice change E to 0.001, but for now left at 1 to see what we get. Submit - result page shows it is for Cytochrome P450. Match is from position 41 to 500. Click on the green at the top with the label of 'p450'. You will see details on p450 and its superfamily. 
  * Go back to the result page and click on the Show/hide button. SEQ is the submitted sequence. The HMM sequences is the consensus seq that matches SEQ. letter- exact match; + - conservative substitution; PP- posteriori probability matching pecentage: * - 100%, 1- 5 to 15%, higher the better; See the heatmap - green is good. 
  * Click on Family link - go to the P450 page and click on the pfam link at the top to find more info. Interpro has similar info. Also, on the P450 page, at the top, it says: 1285 architectures and 132K sequences. 
  * Clicking on 'Domain Organization' on the LHS gives you more info on the architectures with 1, 2, or 4, or fraction of the P450 sequences. similar domain architectures might help understand the functionality of a new protein. 
  * Click on the Alignments option on the LHS of the P450 page. Click on HTML x Seed to see colored map. of seed seq alignment. The color code is in the slides, not sure where to find at Pfam. H in red - alpha helix, E- Hydrogen bond, etc. -- so, they help visualize the 3-D structure also.  Sequence + Structure --> better appreciation of functionality. Eg., Gaps near alpha helixes will break the bond. 
  * Click on species on the P450 page. Eukaryotes are in purple color. Valuable resource for comparative genomics
  * Click on External database link on the P450 page --> pfam and choose [Prosite](https://prosite.expasy.org/cgi-bin/prosite/prosite-search-ac?PDOC00081).  Link to expert; consensus pattern. 

**[Conserved Domain Database (CDD)](https://www.ncbi.nlm.nih.gov/Structure/index.shtml)**: uses pfam and 4 other dbs. uses RPS-BLAST. From NCBI: CDD is a protein annotation resource that consists of a collection of well-annotated multiple sequence alignment models for ancient domains and full-length proteins. These are available as position-specific score matrices (PSSMs) for fast identification of conserved domains in protein sequences via RPS-BLAST.

Use both pfam and cdd for your analysis.  Use Conserved Domain --> CD Search. [Link](https://www.ncbi.nlm.nih.gov/Structure/cdd/wrpsb.cgi). Paste the following. 

For CDD, dataset to use:

>NP_005206.1 deleted in colorectal carcinoma [Homo sapiens]
MENSLRCVWVPKLAFVLFGASLLSAHLQVTGFQIKAFTALRFLSEPSDAVTMRGGNVLLDCSAESDRGVP
VIKWKKDGIHLALGMDERKQQLSNGSLLIQNILHSRHHKPDEGLYQCEASLGDSGSIISRTAKVAVAGPL
RFLSQTESVTAFMGDTVLLKCEVIGEPMPTIHWQKNQQDLTPIPGDSRVVVLPSGALQISRLQPGDIGIY
RCSARNPASSRTGNEAEVRILSDPGLHRQLYFLQRPSNVVAIEGKDAVLECCVSGYPPPSFTWLRGEEVI
QLRSKKYSLLGGSNLLISNVTDDDSGMYTCVVTYKNENISASAELTVLVPPWFLNHPSNLYAYESMDIEF
ECTVSGKPVPTVNWMKNGDVVIPSDYFQIVGGSNLRILGVVKSDEGFYQCVAENEAGNAQTSAQLIVPKP
AIPSSSVLPSAPRDVVPVLVSSRFVRLSWRPPAEAKGNIQTFTVFFSREGDNRERALNTTQPGSLQLTVG
NLKPEAMYTFRVVAYNEWGPGESSQPIKVATQPELQVPGPVENLQAVSTSPTSILITWEPPAYANGPVQG
YRLFCTEVSTGKEQNIEVDGLSYKLEGLKKFTEYSLRFLAYNRYGPGVSTDDITVVTLSDVPSAPPQNVS
LEVVNSRSIKVSWLPPPSGTQNGFITGYKIRHRKTTRRGEMETLEPNNLWYLFTGLEKGSQYSFQVSAMT
VNGTGPPSNWYTAETPENDLDESQVPDQPSSLHVRPQTNCIIMSWTPPLNPNIVVRGYIIGYGVGSPYAE
TVRVDSKQRYYSIERLESSSHYVISLKAFNNAGEGVPLYESATTRSITDPTDPVDYYPLLDDFPTSVPDL
STPMLPPVGVQAVALTHDAVRVSWADNSVPKNQKTSEVRLYTVRWRTSFSASAKYKSEDTTSLSYTATGL
KPNTMYEFSVMVTKNRRSSTWSMTAHATTYEAAPTSAPKDFTVITREGKPRAVIVSWQPPLEANGKITAY
ILFYTLDKNIPIDDWIMETISGDRLTHQIMDLNLDTMYYFRIQARNSKGVGPLSDPILFRTLKVEHPDKM
ANDQGRHGDGGYWPVDTNLIDRSTLNEPPIGQMHPPHGSVTPQKNSNLLVIIVVTVGVITVLVVVIVAVI
CTRRSSAQQRKKRATHSAGKRKGSQKDLR**PPDLWIHHEEMEMKNIEKPSGTDPAGRDSPIQSCQDLTPVS
HSQSETQLGSKSTSHSGQDTEEAGSSMSTLERSLAARRAPRAKLMIPMDAQSNNPAVVSAIPVPTLESAQ
YPGILPSPTCGYPHPQFTLRPVPFPTLSVDRGFGAGRSQSVSEGPTTQQPPMLPPSQPEHSSSEEAPSRT
IPTACVRPTHPLRSFANPLLPPPMSAIEPKVPYTPLLSQPGPTLPKTHVKTASLGLAGKARSPLLPVSVP
TAPEVSEESHKPTEDSANVYEQDDLSEQMASLEGLMKQLNAITGS**AF

List of domain hits is represented on the results page. Click on the + sign next to the first domain listed there: 	Neogenin_C. It expands to a details section. E value is 2.26<sup>-127</sup>, a very signficant value. **Note**: the match is only partial, starting at PPDLW on 5th line from the bottom going up to the end of the sequence (last two: AF missing), a total length of 292 bases. Marked in bold in the sequence above. Red - match; blue - mismatch (at the site). 

Click on the accesion number: pfam06583 to find more info. This new [page](https://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?ascbin=8&maxaln=10&seltype=2&uid=pfam06583) has sequence alignment info for various proteins/species combinations. 

Now the converse: PSI-BLAST. Used to id distantly related sequences that are possibly missed during a standard BLAST search. 
