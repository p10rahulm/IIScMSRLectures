+++
title = "Determinant Maximization via Matroid Intersection Algorithms"
author = "Aditi Laddha (Georgia Institute of Technology)"
author_link = "https://sites.cc.gatech.edu/~aladdha6/"
author_image = "assets/authorImages/aditiLaddha.png"
date = "2022-10-14T11:00:00+05:30"
date_end = "2022-10-14T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=kApXm2oQbos"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Determinant maximization problem gives a general framework that models problems arising in as diverse fields as
statistics, convex geometry, fair allocations, combinatorics, spectral graph theory, network design, and random
processes. In an instance of a determinant maximization problem, we are given a collection of vectors
$U = {v_1, \ldots, v_n}$ in $d$ dimensions, and a goal is to pick a subset S ⊆ U of given vectors to maximize
the determinant of the matrix $\sum_{i \in S} v_i v_i^T$. Often, the set $S$ of picked vectors must satisfy additional
combinatorial constraints such as cardinality constraint ($|S| \leq k$) or matroid constraint ($S$ is a basis of a
matroid defined on the vectors). In this talk, we give a polynomial-time deterministic algorithm that returns an
$r^{O(r)}$-approximation for any matroid of rank $r \leq d$. Our algorithm builds on combinatorial algorithms for
matroid intersection, which iteratively improves any solution by finding an alternating negative cycle in the exchange
graph defined by the matroids. While the determinant function is not linear, we show that taking appropriate linear
approximations at each iteration suffice to give the improved approximation algorithm.
<br><br>
Joint work with Adam Brown, Madhusudhan Pittu, Mohit Singh, and Prasad Tetali.
