+++
title = "Equivalence Test for Read-Once Arithmetic Formulas"
author = "Bhargav Thankey (Indian Institute of Science, Bangalore)"
author_link = "https://sites.google.com/view/bhargav-thankey"
author_image = "assets/authorImages/BhargavThankey.png"
date = "2023-02-10T11:00:00+05:30"
date_end = "2023-02-10T12:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study the polynomial equivalence problem for orbits of read-once arithmetic formulas (ROFs). Read-once formulas have
received considerable attention in both algebraic and Boolean complexity and have served as a testbed for developing
effective tools and techniques for analyzing circuits. Two $n$-variate polynomials $f, g \in \mathbb{F}[\mathbf{x}]$
are equivalent, denoted as $f \sim g$, if there is an $A \in \mathrm{GL}(n, \mathbb{F})$ such that $f = g(A\mathbf{x})$.
The orbit of $f$ is the set of all polynomials equivalent to $f$. We investigate the complexity of the following two
natural problems on ROFs:
<br><br>
1. Equivalence test for ROFs: Given black-box access to $f$, check if it is in the orbit of an ROF. If yes,
output an ROF $C$ and an $A \in \mathrm{GL}(n, \mathbb{F})$ such that $f = C(A\mathbf{x})$.<br>
2. Polynomial equivalence for orbits of ROFs: Given black-box access to $f$ and $g$ in the orbits of two unknown ROFs,
check if $f \sim g$. If yes, output an $A \in \mathrm{GL}(n, \mathbb{F})$ such that $f = g(A\mathbf{x})$.
<br><br>
These problems are significant generalizations of two well-studied problems in algebraic complexity, namely
reconstruction of ROFs and quadratic form equivalence. In this work, we give the first randomized polynomial-time
algorithms (with oracle access to quadratic form equivalence) to solve the two problems. The equivalence test works
for general ROFs; it also implies an efficient learning algorithm for random arithmetic formulas of unbounded depth
and fan-in (in the high number of variables setting). The algorithm for the second problem, which invokes the
equivalence test, works for mildly restricted ROFs, namely additive-constant-free ROFs.
<br><br>
The equivalence test is based on a novel interplay between the factors and the essential variables of the Hessian
determinant of an ROF, the essential variables of the ROF, and certain special structures in the ROF that we call
"skewed paths". To our knowledge, the Hessian of a general ROF (or even a depth-4 ROF) has not been analyzed before.
Analyzing the Hessian and combining the knowledge gained from it with the skewed paths to recursively discover
formulas in the orbits of sub-ROFs of lower depth (without incurring an exponential blow-up due to unbounded depth)
constitute the main technical contributions of this work.