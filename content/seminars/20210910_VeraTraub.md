+++
title = "Better-Than-2 Approximations for Weighted Tree Augmentation"
author = "Vera Traub (ETH Switzerland)"
author_link = "https://people.math.ethz.ch/~vtraub/"
author_image = "assets/authorImages/veraTraub.jpg"
date = "2021-09-10T16:00:00+05:30"
date_end = "2021-09-10T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=cg12vkgxbgQ"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
The Weighted Tree Augmentation Problem (WTAP) is one of the most basic connectivity augmentation
problems.
It asks how to increase the edge-connectivity of a given graph from 1 to 2 in the cheapest possible way by adding
some additional edges from a given set.
There are many standard techniques that lead to a 2-approximation for WTAP, but despite much
progress on special cases, the factor 2 remained unbeaten for several decades.
<br><br>

In this talk we present two algorithms for WTAP that improve on this longstanding approximation ratio of 2.
The first algorithm is a relative greedy algorithm, which starts with a simple, though weak, solution and iteratively
replaces parts of this starting solution by stronger components.
<br><br>
This algorithm achieves an approximation ratio of $(1 + \ln(2) + \epsilon) < 1.7$.
Second, we present a local search algorithm that achieves an approximation ratio of $1.5 + \epsilon$
(for any constant $\epsilon > 0$).
<br><br>
This is joint work with <a href="https://math.ethz.ch/ifor/groups/zenklusen_group/rico-zenklusen.html" target = "_blank">Rico Zenklusen</a>.
