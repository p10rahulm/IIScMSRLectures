+++
title = "Causal Inference and Large Language Models: A New Frontier"
author = "Amit Sharma (MSR, Bangalore)"
author_link = "http://www.amitsharma.in/"
author_image = "assets/authorImages/amitSharma.jpeg"
date = "2023-09-08T16:00:00+05:30"
date_end = "2023-09-08T18:15:00+05:30"
location = "Offline Talk at CSA Seminar Hall"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
A key challenge in conducting causal analyses is that identifying the correct assumptions, such as the 
causal graph, needs considerable manual effort. Since a causal graph cannot be learnt from data alone, 
domain experts face the difficult task of providing underlying causal relationships and also verifying them.  
In this talk, I will discuss how large language models (LLMs) provide new capabilities that were so far understood 
to be restricted to domain experts, such as inferring the direction of causal relationships, identifying any missing 
relationships, or verifying the underlying assumptions in a causal analysis.  First, I will present results on the 
causal graph discovery capabilities of LLMs. Algorithms based on GPT-3.5 and 4 outperform existing algorithms on a 
wide variety of datasets: Tubingen pairwise dataset (97%, 13 points gain) spanning domains such as physics, 
engineering, biology, and soil science; arctic sea ice coverage dataset (0.22 hamming distance, 11 points gain); 
and a medical pain diagnosis dataset.  We find that LLMs infer causal relationships by relying on information such 
as variable names, a process that we call knowledge-based reasoning that is distinct from and complementary to 
non-LLM based causal discovery. Second, I will describe how these capabilities of LLMs can be extended for useful 
tasks in the causal inference pipeline: identifying any missing confounders, suggesting instrumental variables, 
suggesting special variables like negative control that can validate causal analyses, and reasoning about root cause 
attribution.  At the same time, LLMs exhibit unpredictable failure modes and I will provide some techniques to 
interpret their robustness, especially with respect to dataset memorization. Looking ahead, by capturing domain 
knowledge about causal mechanisms, LLMs may open new frontiers for advancing causal inference research and enable 
the widespread adoption of causal methods.
<br><br>
<b>Bio:</b>
<a href="https://www.amitsharma.in/" target="_blank">Amit Sharma</a> is a Principal Researcher at Microsoft Research 
India. His work bridges causal inference techniques with machine learning, with the goal of making machine learning 
models generalize better, be explainable and avoid reasoning errors. To this end, Amit has led the development of  
<a href="https://www.amitsharma.in/" target="_blank">DoWhy</a> library for causal inference and
<a href="https://github.com/interpretml/DiCE" target="_blank">DiCE</a> library for 
counterfactual explanations, and co-founded <a href="https://www.pywhy.org/" target="_blank">PyWhy</a>, an open 
source ecosystem for causal machine learning. 
His work has received many awards including a Best Paper Award at ACM CHI 2021 conference, Best Paper Honorable 
Mention at ACM CSCW 2016 conference, 2012 Yahoo! Key Scientific Challenges Award and the 2009 Honda Young Engineer 
and Scientist Award.
