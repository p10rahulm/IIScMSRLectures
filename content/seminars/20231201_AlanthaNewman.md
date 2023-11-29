+++
title = "Handling Correlated Rounding Error via Preclustering: A 1.73-approximation for Correlation Clustering"
author = "Alantha Newman (G-SCOP Laboratory in Grenoble, France)"
author_link = "https://www.grenoble-inp.fr/fr/personnel/mme-newman-alantha-2"
author_image = "assets/authorImages/AlanthaNewman.jpg"
date = "2023-12-01T16:00:00+05:30"
date_end = "2023-12-01T17:00:00+05:30"
location = "Online Talk on Microsoft Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We consider the classic Correlation Clustering problem: Given a complete graph where edges are labelled either + or −, 
the goal is to find a partition of the vertices that minimizes the number of the + edges across parts plus the number 
of the − edges within parts. Recently, Cohen-Addad, Lee and Newman [CLN22] presented a 1.994-approximation algorithm 
for the problem using the Sherali-Adams hierarchy, hence breaking through the integrality gap of 2 for the classic 
linear program and improving upon the 2.06-approximation of Chawla, Makarychev, Schramm and Yaroslavtsev [CMSY15]. 

We significantly improve the state-of-the-art by providing a 1.73-approximation for the problem. Our approach 
introduces a preclustering of Correlation Clustering instances that allows us to essentially ignore the error 
arising from the correlated rounding used by [CLN22]. This additional power simplifies the previous algorithm and 
analysis. More importantly, it enables a new set-based rounding that complements the previous roundings. A combination 
of these two rounding algorithms yields the improved bound.
