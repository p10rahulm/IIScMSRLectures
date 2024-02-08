+++
title = "Query-Efficient Algorithms to Find the Unique Nash Equilibrium in a Two-Player Zero-Sum Matrix Game"
author = "Arnab Maiti (University of Washington)"
author_link = "https://sites.google.com/view/arnab-maiti/home"
author_image = "assets/authorImages/arnabMaiti.png"
date = "2024-02-23T11:00:00+05:30"
date_end = "2024-02-23T12:00:00+05:30"
location = "Online Talk on Microsoft Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar
Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study the query complexity of identifying Nash equilibria in two-player zero-sum matrix games. Grigoriadis and 
Khachiyan (1995) showed that any deterministic algorithm needs to query Ω(n2) entries in worst case from an n × n 
input matrix in order to compute an ε-approximate Nash equilibrium, where ε < 1/2 . Moreover, they designed a 
randomized algorithm that queries O(nlog(n)/ε2) entries from the input matrix in expectation and returns an 
ε-approximate Nash equilibrium when the entries of the matrix are bounded between −1 and 1. However, these 
two results do not completely characterize the query complexity of finding an exact Nash equilibrium in 
two-player zero-sum matrix games. In this work, we characterize the query complexity of finding an exact 
Nash equilibrium for two-player zero-sum matrix games that have a unique Nash equilibrium (x*,y*). We first 
show that any randomized algorithm needs to query Ω(nk) entries of the input matrix A ∈ Rn×n in expectation 
in order to find the unique Nash equilibrium where k = |supp(x*)|. We complement this lower bound by presenting 
a simple randomized algorithm that, with probability 1−δ, returns the unique Nash equilibrium by querying at 
most O(nk4 · polylog(n/δ)) entries of the input matrix A ∈ Rn×n. In the special case when the unique Nash 
Equilibrium is a pure-strategy Nash equilibrium (PSNE), we design a simple deterministic algorithm that finds 
the PSNE by querying at most O(n) entries of the input matrix.