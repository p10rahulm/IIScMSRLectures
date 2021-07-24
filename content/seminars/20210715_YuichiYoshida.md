+++
title = "Average Sensitivity of Graph Algorithms"
author = "Yuichi Yoshida (National Institute of Informatics, Japan)"
author_link = "http://research.nii.ac.jp/~yyoshida/"
author_image = "assets/authorImages/yoshida.jpg"
date = "2021-07-15T11:00:00+05:30"
date_end = "2021-07-15T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=yEL9HJoPGZA"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> In modern applications of graph algorithms, where the graphs of interest are large and dynamic, it is
unrealistic to assume that an input representation contains the full information of a graph being studied. Hence, it is
desirable to use algorithms that, even when provided with only a subgraph that misses a few edges, output solutions
that are close to the solutions output when the whole graph is available. We formalize this feature by introducing the
notion of average sensitivity of graph algorithms, which is the average earth mover’s distance between the output
distributions of an algorithm on a graph and its subgraph obtained by removing an edge, where the average is over the
edges removed and the distance between two outputs is the Hamming distance.<br><br>

In this work, we initiate a systematic study of average sensitivity. After deriving basic properties of average
sensitivity such as composition, we provide efficient approximation algorithms with low average sensitivities for
concrete graph problems, including the minimum spanning for- est problem, the global minimum cut problem, the
minimum s-t cut problem, and the maximum matching problem. One of the main ideas involved in designing our algorithms
with low average sensitivity is the following fact; if the presence of a vertex or an edge in the solution output by
an algorithm can be decided locally, then the algorithm has a low average sensitivity, allowing us to reuse the analyses
of known sublinear-time algorithms and local computation algorithms.