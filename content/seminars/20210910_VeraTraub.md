+++
title = "Better-Than-2 Approximations for Weighted Tree Augmentation"
author = "Vera Traub (ETH Switzerland)"
author_link = "https://people.math.ethz.ch/~vtraub/"
author_image = "assets/authorImages/veraTraub.jpg"
date = "2021-09-10T16:00:00+05:30"
date_end = "2021-09-10T17:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
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
