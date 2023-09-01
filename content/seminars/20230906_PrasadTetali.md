+++
title = "On Bayesian Estimation and constraint satisfaction"
author = "Prasad Raghavendra (UC Berkeley)"
author_link = "http://people.eecs.berkeley.edu/~prasad/"
author_image = "assets/authorImages/prasadRaghavendra.jpg"
date = "2023-09-06T11:00:00+05:30"
date_end = "2023-09-06T12:00:00+05:30"
location = "Offline Talk at CSA Seminar Hall"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Bayesian estimation is the problem of inferring the values of hidden variables from observed data. Formally, the 
problem is specified by a joint distribution P(x, G) over a set of hidden variables x and observations G. The 
algorithmic problem is to (even approximately) infer the values of x given the observed values G, using the Bayes rule.
<br><br>
Beginning with the work of Krzakala and Zdeborova [KZ09], a precise and comprehensive theory of the computational 
complexity of sparse random instances of Bayesian CSPs is emerging. Inspired by ideas from statistical physics, 
this theory predicts that sparse random Bayesian CSPs undergo a computational phase transition, in which they 
abruptly go from being computationally easy to being intractable. Moreover, the theory predicts the precise 
location of this transition for any given Bayesian CSP. This talk will survey algorithms and lower bounds for 
Bayesian CSPs, and outline some directions for future research.