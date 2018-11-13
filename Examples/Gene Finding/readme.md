Chapter 2 of Cristianini and Hahn:

Funfact: Lee Rowen won the GeneSeep in 2003 by guessing the number of human genes to be 25,947, way lower than most others, but close the final count. Today, the number of protein-coding genes is  estimated to be [19,000-20,000](https://en.wikipedia.org/wiki/Human_genome).  

Protein molecules are used in many tasks (signaling to structure). Degradases cut molecules no longer needed by cell, while ligases bind molecules together to build  functional elements. Hemogobin, a protein, carries oxygen in red blood cells; insulin, another protein, communicates between organs. Proteins are formed  from chains of simpler molecules called Amino Acids (AAs). A typical protein has 200-300 AAs. Proteins fold rapidly into 3-D shape that determines its function. There are only 20 AAs (symbols not used: B, J, O, U, X, z). Like the 5' and 3' orientation of DNA string, AAs have N and C-terminus. Directionality is important. 

Central Dogja: DNA --> RNA --> Protein. Not exactly right, but it is right much of the time - scientists get Nobel prizes for showing the exceptions (example: *Prion* discovery)

Genetic code: A 3-nucleotide code, called codon, specifies an AA. There are 20 unique codons. There is some redundancy. Start codon is Methionine (ATG). Three stop codons are: TGA, TAA, and TAG. Each non-overlapping decomposition of a DNA sequence into codons is a reading frame. An Open reading frame (ORF): Start codon, followed by several non-stop codons, and a stop codon. 

Nealy all organisms use this genetic code. (Human Mitochondria a slightly different genetic code)

Gene Annotations: Gene finding: ORF is easier to identify for prokaryotic genomes (they contain single, continuous ORFs), not for eukaryotic nuclear genomes. Eukaryotic genes are interrupted by transcribed, but not translated, sequences (*introns*). The translated portions are *exons*. The 5' and 3' UTRs are also called exons, though they are not translated. 

Any gene-finding algorithm needs to locate ORFs on both strands - that is, search also the second 5' to 3' sequence that is complementary to the strand given by GenBank or other DNA databases. (Some databases give both - See the NIH lecture series). 

Example 2.4: **Find ORFs in the M. genitialium genome**: Download the genome sequence [here](https://www.ncbi.nlm.nih.gov/genome/474). Saved in this folder.  Go to [ORF Finder](https://www.ncbi.nlm.nih.gov/orffinder/). Either upload this FASTA sequence or provide the accession #: NC_000908.2 . Choose the Minimal ORF as 150 (default is 75; will now run faster). Result is documented here: 

![alt text](https://github.com/RShankar/Semantic-Web-for-Genomics/blob/master/Examples/Gene%20Finding/Screenshot_2018-11-11%20Viewer%20-%20ORFfinder%20-%20NCBI.png "ORFs with min of 150 AA")
