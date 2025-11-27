+++
title = "Aggregating Maximal Cliques in Real-world Graphs"
author = "Sabyasachi Basu (Microsoft Research India)"
author_link = "https://sites.google.com/view/sabyaucsc/home"
author_image = "assets/authorImages/sabyasachiBasu.png"
date = "2025-12-05T11:00:00+05:30"
date_end = "2025-12-05T12:00:00+05:30"
location = "Room No 104 (CSA Auditorium), CSA Building, IISc"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Maximal clique enumeration is a fundamental graph mining task, but its utility is often limited by computational intractability and highly redundant output. To address these challenges, we introduce $\rho$-dense aggregators, a novel approach that succinctly captures maximal clique structure. Instead of listing all cliques, we identify a small collection of clusters with edge density at least $\rho$ that collectively contain every maximal clique.
<br><br> 
In contrast to maximal clique enumeration, we prove that for all $\rho < 1$, every graph admits a $\rho$-dense aggregator of sub-exponential size, $n^{O (\log 1/\rho n)}$, and provide an algorithm achieving this bound. For graphs with bounded degeneracy, a typical characteristic of real-world networks, our algorithm runs in near-linear time and produces near-linear size aggregators. We also establish a matching lower bound on aggregator size, proving our results are essentially tight. In an empirical evaluation on real-world networks, we demonstrate significant practical benefits for the use of aggregators: our algorithm is consistently faster than the state-of-the-art clique enumeration algorithm, with median speedups over $6\times$ for $\rho = 0.1$ (and over $300\times$ in an extreme case), while delivering a much more concise structural summary.