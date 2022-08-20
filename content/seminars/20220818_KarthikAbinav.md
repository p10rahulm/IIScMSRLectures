+++
title = "Decentralized Bandits in Matching Markets"
author = "Karthik Abinav (Facebook)"
author_link = "http://karthikabinavs.xyz/"
author_image = "assets/authorImages/KarthikAbinav.png"
date = "2022-08-18T18:00:00+05:30"
date_end = "2022-08-18T19:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=7p8iCRDPXCA"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> 
In this talk we introduce the problem of decentralized bandits in matching markets, a model inspired by modern 
recommendation systems. We design algorithms for regret minimization in the two-sided matching market with one-sided 
bandit feedback. First, for general markets, for any ε>0, we design an algorithm that achieves a O(log1+ε(T)) regret t
o the agent-optimal stable matching, with unknown time horizon T. Then, we look at a series of generalized assumptions 
on the market and provide algorithms that achieve the agent-optimal regret bound of O(log T). We first start with the 
canonical serial dictatorship setting with uniform valuations and then extend it to markets satisfying uniqueness 
consistency -- markets where leaving participants don't alter the original stable matching. We propose a phase-based 
algorithm, wherein each phase, besides deleting the globally communicated dominated arms the agents locally delete arms 
with which they collide often. This local deletion is pivotal in breaking deadlocks arising from rank heterogeneity of 
agents across arms. These phase based algorithms are ideal for deploying in a semi-online/batch setting that are common 
in large scale production systems.
