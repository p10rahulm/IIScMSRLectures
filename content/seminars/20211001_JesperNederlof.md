+++
title = "Improved (exponential time) algorithms: A case study for Subset Sum and Bin Packing"
author = "Jesper Nederlof (Utrecht University)"
author_link = "https://webspace.science.uu.nl/~neder003/"
author_image = "assets/authorImages/jesper.jpg"
date = "2021-10-01T16:00:00+05:30"
date_end = "2021-10-01T17:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Given an algorithm for a computational problem, a natural question is: Can its time or space efficiency
be improved? We study this question for some natural and/or old algorithms for NP-complete problems.
<br><br>
Specifically, we survey some of the modern techniques to design such improved algorithms, with a focus on the Subset Sum and Bin Packing problems:
<ul>
<li>The algorithm by Schroeppel and Shamir (FOCS'79) solving Subset Sum on instances with n items in $O(2^{n/2})$ time
and $O(2^{n/4})$ space can be improved to an algorithm using the same time and $O(2^{0.249999 n})$ space.

<li>The trivial $O(2^n)$ time and poly(n) space algorithm for Subset Sum can be improved to an $O(2^{0.86n})$ time
poly(n) space algorithm, assuming random read-only access to random bits.
<li>The standard algorithm solving Bin Packing with n items in $O(2^n)$ can be improved to an algorithm running in time
$O((2-\varepsilon_b)^n)$, where n denotes the number of items and $\varepsilon_b$ is a positive number that only depends on the number of
bins $b$ available in the instance.
</ul>
<br>


Two key modern techniques we will discuss are
<ol>
<li>A new method based on anti-concentration of subset sums (along with structural new insights in additive combinatorics)
<li>The representation method by Joux and Howgrave-Graham (EUROCRYPT'10) to navigate through the search space in an improved way,
</ol>

<br>


 We will discuss parts of the following works:
<ol>
<li>Jesper Nederlof, Jakub Pawlewicz, Céline M. F. Swennenhuis, Karol Wegrzycki: A Faster Exponential Time Algorithm for
Bin Packing With a Constant Number of Bins via Additive Combinatorics. SODA 2021: 1682-1701
<br>
<li>Jesper Nederlof, Karol Wegrzycki: Improving Schroeppel and Shamir's algorithm for subset sum via orthogonal vectors. STOC 2021: 1670-1683
<br>
<li>Nikhil Bansal, Shashwat Garg, Jesper Nederlof, Nikhil Vyas: Faster space-efficient algorithms for subset sum and k-sum. STOC 2017: 198-209
<br>
<li>Per Austrin, Petteri Kaski, Mikko Koivisto, Jesper Nederlof: Dense Subset Sum May Be the Hardest. STACS 2016: 13:1-13:14
</ol>