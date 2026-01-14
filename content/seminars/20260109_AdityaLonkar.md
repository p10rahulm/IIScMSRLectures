+++
title = "Counting and Sampling random k-SAT near the satisfiability threshold"
author = "Aditya Lonkar (Georgia Tech)"
author_link = "https://dblp.org/pid/275/3667.html"
author_image = "assets/authorImages/AdityaLonkar.png"
date = "2026-01-09T11:00:00+05:30"
date_end = "2026-01-09T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://youtu.be/tBjhNtItFVc"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
We present efficient counting and sampling algorithms for random $k$-SAT when the clause density satisfies $\alpha \le \frac{2^k}{\text{poly}(k)}$. In particular, the exponential term $2^k$ matches the satisfiability threshold $\Theta(2^k)$ for the existence of a solution and the (conjectured) algorithmic threshold $2^k (\ln k) / k$ for efficiently finding a solution. 
<br><br>
Previously, the best-known counting and sampling algorithms required far more restricted densities $\alpha\lesssim 2^{k/3}$ [He, Wu, Yang '23]. Notably, our result goes beyond the lower bound $d\gtrsim 2^{k/2}$ for worst-case $k$-SAT with bounded-degree $d$ [Bezakova, Galanis, Goldberg, Guo,  Stefankovic '19], 
showing that for counting and sampling, the average-case random $k$-SAT model is computationally much easier than the worst-case model.
<br><br>
At the heart of our approach is a new refined analysis of the recent novel coupling procedure by [Wang, Yin '24], utilizing the structural properties of random constraint satisfaction problems (CSPs). Crucially, our analysis avoids reliance on the $2$-tree structure used in prior works, which cannot extend beyond the worst-case threshold $2^{k/2}$. Instead, we employ a witness tree similar to that used in the analysis of the Moser-Tardos algorithm for the Lovasz Local lemma, which may be of independent interest. Our new analysis provides a universal framework for efficient counting and sampling for random atomic CSPs, including, for example, random hypergraph colorings. At the same time, it immediately implies as corollaries several structural and probabilistic properties of random CSPs that have been widely studied but rarely justified, including replica symmetry and non-reconstruction.