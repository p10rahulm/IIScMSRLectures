+++
title = "Planar Partition Oracles and When they strike gold: A $\exp(1/\epsilon^2)$ Tester for All Planar Properties"
author = "Akash Kumar (EPFL Switzerland)"
author_link = "https://sites.google.com/view/kumarakash/home"
author_image = "assets/authorImages/AkashKumar.jpg"
date = "2022-01-21T17:00:00+05:30"
date_end = "2022-01-21T18:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=SCwOc0PMFu0"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>

Take a planar graph with maximum degree $d$. These graphs admit a hyperfinite decompositions, where, for a sufficiently
small $\epsilon > 0$, one removes $\epsilon dn$ edges to get connected components of size independent of $n$. An important
tool for sublinear algorithms and property testing for such classes is the partition oracle. A partition oracle is a
local procedure that gives consistent access to a hyperfinite decomposition, without any preprocessing. Given a query
vertex v, the partition oracle outputs the component containing v in time independent of n. All the answers are
consistent with a single hyperfinite decomposition. In this talk, I will describe a partition oracle that runs in
time $\texttt{poly}(d/\epsilon)$. I will also describe how this machinery strikes a fortune and helps in obtaining
a constant time tester for all planar properties. This is easily obtained by a better error analysis on the seminal
result of Newman and Sohler [SICOMP 2013].


Based on Joint works with Sabyasachi Basu, C. Seshadhri and Andrew Stolman.