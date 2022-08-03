+++
title = "Correlated Rounding for Correlation Clustering"
author = "Alantha Newman (G-SCOP Laboratory in Grenoble, France)"
author_link = "https://www.grenoble-inp.fr/fr/personnel/mme-newman-alantha-2"
author_image = "assets/authorImages/AlanthaNewman.jpg"
date = "2022-09-16T11:00:00+05:30"
date_end = "2022-09-16T12:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Given a complete graph G = (V, E) where each edge is labeled + or -, the correlation clustering
problem asks to partition V into clusters to minimize the number of +edges between different clusters plus the number
of -edges within the same cluster. The approximability of correlation clustering has been actively investigated
[BBC04, CGW05, ACN08], culminating in a 2.06-approximation algorithm [CMSY15], based on rounding the standard LP
relaxation. Since the integrality gap for this formulation is 2, it has remained a major open question to determine
if the approximation factor of 2 can be reached, or even breached. In this talk, we show how to achieve a factor of
2+eps based on O(1/eps^2) rounds of the Sherali-Adams hierarchy. To round this relaxation, we adapt the correlated
rounding originally developed for CSPs [BRS11, GS11, RT12]. To go below this approximation ratio, we go beyond the
traditional triangle-based analysis by employing a global charging scheme that amortizes the total cost of the rounding
across different triangles.
<br><br>
Joint work with Vincent Cohen-Addad and Euiwoong Lee.