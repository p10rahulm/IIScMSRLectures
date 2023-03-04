+++
title = "Criticality of AC0-formulae"
author = "Prahladh Harsha (TIFR, Mumbai)"
author_link = "https://www.tifr.res.in/~prahladh/"
author_image = "assets/authorImages/prahladhHarsha.png"
date = "2023-03-20T16:00:00+05:30"
date_end = "2023-03-20T17:00:00+05:30"
location = "CSA Seminar Hall, Room 254, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
Hastad's celebrated switching lemma gives inverse-exponential bounds (In terms of t) on the probability that an k-DNF 
when hit by a p-restriction requires decision-trees of depth larger than t. The switching lemma has proved to be 
extremely powerful, since its discovery, leading to optimal size lower bounds for AC0-circuits [Hastad 1986] and 
AC0 formulae [Rossman 2015] against the parity function
<br><br>
More recently, the search for optimal correlation bounds against parity led to the notion of criticality 
[Rossman 2019]. The criticality of a Boolean function f : {0, 1}^n → {0, 1} is the minimum λ ≥ 1 such that for all 
positive integers t, we have
<br><br>
Pr_{ρ∼Rp} [ DT_depth (f|_ρ) ≥ t ] ≤ (pλ)^t
<br><br>
Hastad (2014) proved that size S and depth (d+1) AC0-circuits have criticality at most O((log S)^d) leading to 
optimal correlation bounds of AC0-circuits against parity. Rossman (2019) subsequently proved that size S and depth 
(d+1) AC0-formulae, which are regular (ie., all gates of the same depth have equal fan-in) have criticality at most 
O(((log S)/d)^d).
<br><br>
In this work, we strengthen and unify all the above results by proving that any (not necessarily regular) AC0-formula 
of size S and depth (d+1) has criticality at most O(((log S)/d)^d).
This criticality bound implies tight correlation bounds against parity, tight Fourier concentration results and 
improved #SAT algorithm for AC0-formulae.
<br><br>
[Joint work with Tulasimohan Molli and Ashutosh Shankar]