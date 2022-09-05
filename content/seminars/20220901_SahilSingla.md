+++
title = "Robust Secretary Algorithms for Packing Integer Programs"
author = "Sahil Singla (Georgia Tech)"
author_link = "https://faculty.cc.gatech.edu/~ssingla7/"
author_image = "assets/authorImages/sahilsingla.png"
date = "2022-09-01T18:00:00+05:30"
date_end = "2022-09-01T19:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=RWQOfa81it4"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We study the problem of solving Packing Integer Programs (PIPs) in the online setting, where columns in [0,1]^d of the
constraint matrix are revealed sequentially, and the goal is to pick a subset of the columns that sum to at most B in
each coordinate while maximizing the objective. E.g., this problem captures the Online Knapsack problem when d=1.
Excellent results are known for PIPs in the secretary model, where the columns are adversarially chosen but presented
in a uniformly random order. However, these existing algorithms are susceptible to adversarial attacks: they try to
"learn" characteristics of a good solution, but tend to over-fit to the model, and hence a small number of adversarial
corruptions can cause the algorithm to fail.
<br><br>
In this talk, we will first see a Byzantine Secretary model to analyze the robustness of secretary algorithms, and
we will then design robust algorithms for PIPs in this model. Our techniques are based on a two-level use of online
learning and on a multi-layered bucketing idea. Our techniques can be also used to design robust algorithms for PIPs
in the Prophet model.
<br><br>
Based on joint works with Anupam Gupta, Marco Molinaro, C. J. Argue, Goran Zuzic, and Domagoj Bradac
that appeared in SODA’22 and ITCS’20.

