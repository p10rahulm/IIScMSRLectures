+++
title = "Min Sum Set Cover and Tail Bounds for Sums of Bernoullis"
author = "Jatin Batra (TIFR - School of Technology and Computer Science)"
author_link = "https://dblp.org/pid/157/6041.html"
author_image = "assets/authorImages/jatin.jpg"
date = "2021-11-12T16:00:00+05:30"
date_end = "2021-11-12T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=N1Yp8Axdqw4"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We study the generalized min sum set cover (GMSSC) problem, wherein given a collection of hyperedges E with arbitrary
covering requirements, the goal is to find an ordering of the vertices to minimize the total cover time of the
hyperedges. We give a 4.642 approximation algorithm for GMSSC, coming close to the best possible bound of 4,
improving the previous best bound of 12 by Im, Sviridenko and van der Zwaan. For the special case when the hypergraph
is a graph, we give a 16/9 approximation, improving the previous best bound of 1.999946 by Barenholz and Feige. Our
algorithms are based on applying a suitable linear transformation on the LP solution and applying randomized rounding.
<br><br>
As part of the analysis of our algorithm, we also derive an inequality on the lower tail of a sum of independent
Bernoulli random variables, which might be of independent interest and broader utility. Specifically, we show how
to get better tail bounds than Chernoff when the deviation from the mean is very small.
<br><br>
We also give a new dual-fitting analysis for min sum set cover, giving tight (upto NP-hardness) bound of
$(p+1)^{1+1/p}$ for the $\ell_p$ norm of cover times.