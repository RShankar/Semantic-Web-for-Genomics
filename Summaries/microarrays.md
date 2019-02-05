This is a summary of "Microarrays for an integrative genomics" by Kohane et al., 2003, when microarrays were popular. The book discusses advantages and disadvantages of the technology.

From Introduction: A high-quality clinical study will involve 1K to 10K cases, such as in the Nurses' Health Study or the Framingham Heart Study over which 10 to 100s of variables are measured. In contrast, in a typical genomic study (as of 2002), gthere are only 10 to 100s of cases, but thousands of measured variables. *With GWAS, both numbers have increased, thus carrying forward the same dilemma*. Initially, this was probably due to high cost of microarrays, but now it is because of scarcity of appropriate biological samples. As these experiments involve the measuement of gene expression, a particular tissue has to be obtained under the right conditions. *This is in distinction to genome DNA samples where most blood samples will suffice*. **Large number of variables compared to the number of cases leads to  **highly underdetermined systems**. Using the analogy to simulataneoius linear equations, the indeterminacy and potential solution set become evident. High-dimensionality data sets are well known to the 'machine learning' community and such ways have found their way into the funcional genome enterprise. However, the choise of a particular clustering or classification methodology is secondary to proper experimental design and full knowledge of the properties and limitations of massively parallel expression analysis in general, and those of the specific microarray technologies involved. 

**Discuss this in the class**:

* Selection of the right tissue:
* Right conditions: e.g., number of hours post mortem, time of the day, circadian rhythm. Cooperation with a surgeon, pathologist, ...
* Extracting RNA, hybridizing to microarray, and scanning: The wet component of functional genomics pipeline; susceptible to operator errore and poor/noisy measurements. 
* Functional clustering: Traditionally, this is the step where a bioinformatician gets involved. Involve this person throughout.
* Computational validation: Data sets are 'short and wide." The then current microarrays offer the quantification of up to 60K ESTs (expression sequence tags) in any given sample, but costs limita single expt to 10 to 100 samples. Data set are essentially underdetermined. Some computational validation is needed immly after the bioinf analysis so that computationally sound but biologically spurious or improbably hypotheses are screened out. Reducd FP (false positives) - large labs may be able to pursue mulitple hypotheses and refute many; An ideal computational validation goes beyond the yes/no on potential validity of a hypothesis - but provides a ROC (receiver-operating characteristic) curve. With such a curve, the biologisgt can select the desired point of Sn (sensitivity) or Sp (specificity) and true nd false negatives and positives.
* Bioloical validation: Most biological questions will not be answered using microarrays. Most likely outcome of functl genomics analysis: Next biological question to ask. Biological validation is essential to verify these hypotheses. An example: Making sure a particular set of genes is truly expressed at the proper time and place as hypothesized, using conventional biological techniques such as Northern blotting and in situ hybridization.
* The multidisciplinary team: In most settings, all of these steps, from acquisition of source material, to microarray construction, to bioinf analysis, to biol verification, cannot be performed by a single group or lab. A successful functl genomics pipeline brings together resources from many disciplines and of varied backgrounds. 

Figure 1.5, page 17 depicts the typical genomics piepeline. 

There is a tendency to view the massively parallel methods of functl genomics as a highy efficient large-scale application of methods that biologists have already applied. For example, gene expression profiling and PCR are methods that have been used by molecular biologists for decades. However the comprehensive nature of functl genomics changes qualitatively and fundamentally the nature of biological investigation. **It is neither a hypothesis-free fishing expedition, nor a hypothesis-generating enterprise requiring subsequent biological validation**. However, it permits the posing of large questions that are grounded in an essential biological understanding of a particular domain. There is less stringent requirements, compared to biological experimentation, for prior supposition or claims of the role of a particular gene or metaboligte in a biological process. 

Somne broad questions that can now be asked:
* Which of all the known genes have regulatory mechanisms that appear to be similar to those regulated by a known TF?
* Given the effect of 5K drugs on various cell lines, which gene singly is the most predictive of the cell ine to any chemotherapeutic agent?
* Given a known clinical distinction, what is the minimal set of genes that can more reliably distinguish these two diseases?
* Is there a group of genes that can can serve to distinguish the outcomes of patients for a certain clinical condition, such as PCI MI patients?
* What distinguishes the signaling pathways of two of the substrates of a receptor? 

*In silico* analysis will never substitute for in vitro and in vivo: There are certain dubious assumptions: 
* Genetic reductionism: not all regulation can be inferred from DNA seq, based solely on the syntax of its seq elements. This is termed by the authors as "sequence-level reductionism."
* 

