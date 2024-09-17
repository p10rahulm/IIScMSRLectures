+++
title = "Handling Correlated Rounding Error via Preclustering: A 1.73-approximation for Correlation Clustering"
author = "Alantha Newman (G-SCOP Laboratory in Grenoble, France)"
author_link = "https://www.grenoble-inp.fr/fr/personnel/mme-newman-alantha-2"
author_image = "assets/authorImages/AlanthaNewman.jpg"
date = "2024-01-19T16:00:00+05:30"
date_end = "2024-01-19T17:00:00+05:30"
location = "Video Not Available"
location_link = "#"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
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
