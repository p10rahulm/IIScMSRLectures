+++
title = "Efficient Determinant Maximization for All Matroids"
author = "Madhusudhan Pittu (CMU)"
author_link = "https://mathrulestheworld.github.io/"
author_image = "assets/authorImages/madhusudanReddyPittu.png"
date = "2022-12-23T17:15:00+05:30"
date_end = "2022-12-23T18:15:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Determinant maximization provides an elegant generalization of problems in many areas, including convex geometry,
statistics, machine learning, fair allocation of goods, and network design.  In an instance of the determinant
maximization problem, we are given a collection of vectors $v_1,\ldots, v_n \in \mathbb{R}^d$, and the goal is to pick a
subset $S\subseteq [n]$ of given vectors to maximize the determinant of the matrix $\sum_{i \in S} v_iv_i^\top$, where
the picked set of vectors $S$ must satisfy some combinatorial constraint such as cardinality constraint ($|S| \leq k$)
or matroid constraint ($S$ is a basis of a matroid defined on $[n]$).
<br><br>
We give efficient deterministic combinatorial algorithms for the determinant maximization problem under a matroid
constraint that achieves $O(r^{O(r)})$-approximation for any matroid of rank $r\leq d$ and $O(d^O(d))$-approximation
for any matroid of rank $r\geq d$. The algorithm for the $r\leq d$ case relies on the geometric interpretation of the
determinant whereas the algorithm for the $r\geq d$ case relies on the algebraic properties of the determinant and the
properties of a convex programming relaxation introduced by Madan et al. (FOCS '20). In both cases, we use matroid
intersection as a local search tool to iteratively improve a solution by finding an alternating negative cycle in an
appropriately defined exchange graph defined by the matroids.
<br><br>
Joint work with Adam Brown, Aditi Laddha, Mohit Singh, and Prasad Tetali.
<br><br>
Bio: Madhusudhan Reddy Pittu is currently a second-year Ph.D. student in the ACO program at Carnegie Mellon University,
where he is advised by Anupam Gupta. He received his Bachelor's in Computer Science from IIT Kharagpur in 2021. He
is broadly interested in Theoretical Computer Science. His research mainly revolves around Approximation Algorithms,
Combinatorics, and Optimization.