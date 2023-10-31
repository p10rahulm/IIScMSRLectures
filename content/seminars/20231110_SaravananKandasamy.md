+++
title = "Sample Complexity of Distinguishing Cause from Effect"
author = "Saravanan Kandasamy (Cornell University)"
author_link = "https://scholar.google.com/citations?user=SFQyZMsAAAAJ&hl=en"
author_image = "assets/authorImages/saravananKandasamy.jpg"
date = "2023-11-10T11:00:00+05:30"
date_end = "2023-11-10T12:00:00+05:30"
location = "Offline talk at CSA Seminar Hall (Room 254)"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We study the sample complexity of causal structure learning on a two-variable system with observational and 
experimental data.  Specifically, for two variables X and Y, we consider the classical scenario where either X 
causes Y, Y causes X, or there is an unmeasured confounder between X and Y.

Let m1 be the number of observational samples of (X,Y), and let m2 be the number of interventional samples where 
either X or Y has been subject to an external intervention. We show that when X and Y are over a finite domain of 
size k and are significantly correlated, the minimum m2 needed is sublinear in k. Moreover, as m1 grows, the minimum 
m2 needed to identify the causal structure decreases. In fact, we can give a tight characterization of the tradeoff 
between m1 and m2 when m1 is O(k) or is sufficiently large. We build upon techniques for closeness testing when m1 
is small (e.g., sublinear in k), and for non-parametric density estimation whe m2 is large. Our hardness results 
are based on carefully constructing causal models whose marginal and interventional distributions form hard instances 
of canonical results on property testing.