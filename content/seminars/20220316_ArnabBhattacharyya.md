+++
title = "Efficient inference of interventional distributions"
author = "Arnab Bhattacharyya (NUS, Singapore)"
author_link = "https://www.comp.nus.edu.sg/~arnab/"
author_image = "assets/authorImages/arnab.png"
date = "2022-03-16T11:00:00+05:30"
date_end = "2022-03-16T12:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> We consider the problem of efficiently inferring interventional distributions in a causal Bayesian
network from a finite number of observations. Let P be a causal model on a set V of observable variables on a given
causal graph G. For sets X,Y⊆V, and setting x to X, let P_x(Y) denote the interventional distribution on Y with respect
to an intervention x to variables X. Shpitser and Pearl (AAAI 2006), building on the work of Tian and Pearl (AAAI 2001),
gave an exact characterization of the class of causal graphs for which the interventional
distribution P_x(Y) can be uniquely determined. We give the first efficient version of the Shpitser-Pearl
algorithm.
<br><br>
In particular, under natural assumptions, we give a polynomial-time algorithm that on input
a causal graph G on observable variables V, a setting x of a set X⊆V of bounded size, outputs succinct
descriptions of both an evaluator and a generator for a distribution P^ that is ε-close (in total variation
distance) to P_x(Y) where Y=V∖X, if P_x(Y) is identifiable. We also show that when Y is an arbitrary set, there
is no efficient algorithm that outputs an evaluator of a distribution that is ε-close to P_x(Y) unless all
problems that have statistical zero-knowledge proofs, including the Graph Isomorphism problem,
have efficient randomized algorithms.
<br><br>
Joint work with Sutanu Gayen (NUS), Saravanan Kandasamy (Cornell), Vedant Raval (IIT Delhi), and
N.V. Vinodchandran (U. Nebraska - Lincoln)