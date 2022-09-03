+++
title = "Approximability of p -> q Matrix Norms: <br>Some NP-hardness Results and An Approximation Algorithm"
author = "Mrinalkanti Ghosh (Indian Institute of Science, Bangalore)"
author_link = "https://home.ttic.edu/~mkghosh/index.html"
author_image = "assets/authorImages/mrinalKantiGhosh.jpg"
date = "2022-09-23T11:00:00+05:30"
date_end = "2022-09-23T12:00:00+05:30"
location = "Room 254, CSA Building, IISc"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
A real n x m matrix A represents a linear map from $\mathbb{R}^m$ to $\mathbb{R}^n$. If the domain and the range of
the map is endowed with $\ell_p$-norm and $\ell_q$-norm respectively, then we can measure the "stretch" of the map A.
Thus matrix p->q-norm of a matrix A is defined to be $\sup_{x\in \mathbb{R}^n, ||x||_p\le 1} || Ax ||_q$.
This quantity generalizes
the well known spectral norm which is very useful in many areas of theoretical computer science (and that of
mathematics). This can also be seen as a special case of optimizing a polynomial over a convex body. When $p<q$,
we call this problem hypercontractive matrix norm estimation, and the case of $p \ge q$ is called
reverse-hypercontractive matrix norm estimation. The placement of 2 with respect to the interval $p$ to $q$ turns
out to be of importance in approximability or inapproximability of the problem.
<br><br>
The case of $\infty \to 1$-norm was studied by Grothendieck in his famous Resume (1956). The integrality gap of an SDP
relaxation for this problem is a constant, called Grothendieck's constant. The combinatorial quantity cut-norm of a
graph is related to the $\infty \to 1$-norm of the adjacency matrix of the graph, as observed by Alon and Naor (2004).
Therefore, this problem has relevance in combinatorial optimization problems . NP-hardness of the $\infty\to 1$ problem
was established by Briët, Regev and Saket (2015) within the constant $\pi/2$ for the special case of positive
semidefinite matrix. Constant factor approximation algorithms for the case $2\in [q,p]$ were developed by
Nesterov (1998) and Steinberg (2005). For the case $2 \not \in [q,p]$, quasi-polynomial hardness was shown
by Bhaskara and Vijayaraghavan (2015) assuming NP does not have quasi-polynomial time algorithms.
<br><br>
The problem of the $2\to 4$ norm is relevant in several problems in quantum information theory (as shown in work of
Harrow and Montanaro (2013)). Barak et.al. (2012) showed that the $2\to q$-norm estimation problem (for even $q\ge 4$)
is intimately related to the problem of Small Set Expansion. They also proved a hardness of approximation assuming
Exponential Time Hypothesis.
<br><br>
We proved the first NP hardness of the hypercontractive norm in case $2\not\in [p,q]$. We show quasi-polynomial
hardness of approximation assuming NP does not have quasi-polynomial time randomized algorithms. For the
reverse-hypercontractive case of $2\in [q,p]$, we proved NP hardness of approximation within a constant
($1/(\gamma_q \gamma_{p*})$) factor. In an associated work we gave an algorithm with approximation factor constant away
from the above -- that is the dependency on $p$ and $q$ on the hardness factor is roughly correct. We also recovered
the hardness result of  Bhaskara and Vijayaraghavan (2015) for the reverse-hypercontractive $2 \not \in [q,p]$ case,
albeit under slightly stronger hardness assumption. All of our hardness results follow a general framework.
<br><br>
Based on joint work with Vijay Bhattiprolu, Venkatesan Guruswami, Euiwoong Lee, and Madhur Tulsiani. Appeared in SODA 2019.