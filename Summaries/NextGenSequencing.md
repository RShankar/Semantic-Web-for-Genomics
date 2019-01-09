This is summary from Chapter 1 of "Next-Generation DNA-Sequencing Informatics", by S.M. Brown (ed), 2nd edition, 2015.

#### History: 

All of DNA sequencing for the  Human Genome Project (1995-2003) was performed with methods based on Sanger's method invented in 1975. It involved RNA synthesis and enzymatic digestion. It relies on the synthesis of new DNA fragments using DNA polymerase to extend a short synthetic oligonucleotide primer, complementary to the known part of the target,  hybridized to a single-stranded DNA template. Sanger sequencing method was revolutionary in many ways: it could be applied to any DNA molecule and it could be used to determine long DNA sequences. But it had two major limitations: it needed an oligonucleotide primer - so some known DNA sequence near the unknown DNA sequence to be determined; the 'random extension' of the primer does not generate fragments of all desired lengths. Sanger improved his method in the face of competition from the Maxim-Gilbert sequencing method. The improved method starts with a single-stranded DNA template hybridized with a short complementary oligonuclotid primer. Maxim-Gilbert sequencing method was more complex and used toxic reagents, and lost out to Sanger's method. Sanger technology next replaced radioactive labels with fluorescent dyes. This helped develop semiautomated DNA sequencers by Hood, Hunkapiller and others, which was commercialized by Applied Biosysems Inc. (ABI). **These ABI sequencers provided nearly all of the data for the Human Genome Project**.

#### Cloing for Sequencing:

DNA sequenciong using the Sanger's method is capable of reading ~ 500-800 bases in a single 'read.' This is a limitation of both the Sanger primer extension and resolution limitation in electrophoresis. But most interesting biological nucleic acid molecules (such as genes, mRNA transcripts, plasmids, and genomes) are much longer than 800 bp. DNA sequencing projects usually involve some strategy of breaking DNA molecules into shorter pieces, sequencing them, and then using **bioinformatics** tools to assemble the data into complete sequences of the target molecules.

Hrnikoff (1984) developed a strategy to generate progressively smaller fragments of DNA by overlapping the reads to build a contiguous sequence (**contig**). All DNA sequencing methods generate errors; so, all started using overlapped seq reads over the entire target, ideally from both sides. **Consensus contig sequence** was the focus of software development during 1985-1995. **Fragment assembly** is similar to **sequence alignment** with reduced error rate. As software improved, it was realized that DNA could be **randomly sheared into a collection of unordered fragments**. These frags are then clones, sequenced, and assembled by using software to find ovefrlaps (**"shotgun sequencing"**). The frags have a poisson distribution across the target DNA molecule. So, a large # of DNA frags (8 t0 10 times the total length) must be sequenced to build a complet contig with adequate coverage of every base in the target molecule. This may still leave **gaps**, which can be reduced with a primer walking strategy (adds cost). 

#### Next Generation Sequencing (NGS): 

Historians: **"When accumiulated knowledge or new technologies become sufficient, a scientific problem may be simultaneously addressed by many different researchers, often producing simultaneous discoveries."** NGS is the current revolution underway. Output of sequencing machines has doubled while the cost per base has dropped by half in every year from 2004 to 2014. NGS technologies have very high data throughput, shorter sequence length, and less accuracy compared to Sanger's method. Bioinformatics challenges have been: alignment (mapping) large number of reads to a reference genome or de novo assembly, multiple alignment of huge number of reads and rare variant detection, as well as file formats, efficient storage and manipulation of multigigabyte seq data files. 

NGS may move DNA sequencing back into small labs: E.g., Illumina MiSeq and Ion Torrent Personal Genome Machine (PGM). But these small labs will need sophisticated bioniformatics support.

"NGS refers to massively parallel DNA sequencing technologies that simultaneously determine the sequence of DNA bases from many millions of DNA templates in a single biochemical reaction volume." Each template molecule is affixed to a solid surface in a spatially separate location and then clonally amplified to increase signal strength. This allows for the detection of rare variant sequences. Data produced are marked by technology-specific error patterns that can signficantly influence downstream analysis. For eg., read duplication because of PCR (polymerase chain reaction) artifacts or optical artifacts; **pyrosequencing** has insertion/deletion errors; and Sanger is inaccurate in regions with high GC content. 

##### 454: 

NGS era started with the 2005 publication by 454 Life Sciences Corp of complete seq of the *Mycoplasma genitalium* and *Streptococcus Pneumoniae* genomes with 96% coverage and 99.6% accuracy. GS20, their first product, produced 25M high quality DNA seq per run, with reads of 80-120 bases long, a 10-fold improvement Vs Sanger systems from Applied Biosystems. In 2007, GS FLX improved to 100 Mbases per run with reads of 250 bases. In 2010, Titanium yielded 400-600 M bases  > 1M reads of 400 base length. They followed the shotgun strategy. *They used a 6 M gate FPGA coprocessor for signal processing in real-time*. 
In 2006, 454 collaborated with researchers to obtain 1 Mbases of genomic data from  fossil Neanderthals . **Advantage**: no need for cloning and efficient use of limited material. Also, good for **deep sequencing** of a specific target gene to find rare variants. 454 output in a custom format (SFF or Standard Flowgeram Format). NCBI has produced an open standard to read this data. 454 provides free software to read SFF to its customers. 

##### Illumina Genome Analyzer:

The "sequencing-by-synthesis" technology of Illumina was developed by Solexa, UK, in 1998. Solexa released their first genome analyzer in 2006. It sequenced 1 B bases in a single run of 4d. Illumina acquired Solexa and has produced rapid upgrades. In 2014, the HiSeq 2500 produced up to 1000 GB of data from a set of ~2 B template molecules as 2 x 100-bp paired-end reads in 6d. 
Solexa modified Sanger by using modified dNTPs (deoxyribonucleotide triphosphates) that contained a terminator that blocks further polymerization, so a single base can be added to a growing DNA copy strand. The reaction is also conducted on a very large number of different template molecules spread out on a solid surface. The terminator is fluorescent, allowing for camera detection. Ony a single color is used; so, the four dNTPs are added in a separate cycle of DNA synthesis and imaging. Solexa yields uniform length and have average error rates of <1%. 

Illumina also amplifies the template molecules on a solid surface (with 1 M cop8ies of each template in tight physical clusters on the flow-cell surface). They use image analysis to resolve adjacent clusters which may overlap because of the random distribution of the molecules. If unable to resolve, both cluster data are discarded. 

Three human genomes (each from a Chinese male, African male, and an AML patient's tumor and normal skin cells) were published in 2008. For the African project, **4 B paired-end 35-base reads produced a total of 135 Gb of data (30X coverage of the human genome) in a period of 8 wk on 6 GA1 instruments, at a total cost of $0.25 M for reagents.** Illumina GA technology could produce significantly more genomic seq data at lower cost than Applied Biosystems' Sanger method. They also showed that short reads of 36 b with high coverage can discover SNPs and structural variants. 

MiSeq, introduced in 2014, is a small benchtop sequencer, suited for small labs. HiSeq 2500  is widely used in core labs, producing 10 -1000 GB of data per run from 2 B template molecules. The **HiSeq X produces 18 TB of data - dedicated for large-scale human WGS.** It can produce 18000 human genomes (at 30X coverage) per year at approximate cost of **$1,000 per genome**. 

##### ABI Solid

To summarize soon

##### Ion Torrent

To summarize soon

##### Experimental Applications

Sequencing is a flexible data collection tool, similar to microscopy. It can be used in extremely diverse range of scientific applications by changing the type of sample and the manner of its preparation. 

**Earlier Apps from traditional Sanger sequencing and automated flourescence in sequencing**: 
* What proteins are encoded by this fragment of DNA? 
* What are the phylogenetic relationships among this group of organisms based on the seqs of this conserved gene? 
* What is the entire gene content and organization of the genome of this organism?
* What genes are being expressed by the organism (or tissue)?

**NGS's extended reach**:
* Compare genome sequences from many different individuals of the same species to identify all variants (**[GWAS](https://en.wikipedia.org/wiki/Genome-wide_association_study)**)
* Compare genomes of tumors (or precancerous leions) with normal germline cells of the same patient
* Use on RNA (thus replacing **microarrays**), to measure the entire gene expression profile of any sample of cells (**[RNA-seq](https://en.wikipedia.org/wiki/RNA-Seq)**).
* Discover previously unannotated genes and quantitative measurement of altetrnative transcripts
* Provide a more accurate and higher resolution readout for Chromatic immunoprecipitation studies (**ChIP-seq**).
* Study epigenetic changes in DNA methylation and modifications of histone proteins. 
* Study environmental and medical samples to identify microorganisms present and their genetic profile (**metegenomics**).

