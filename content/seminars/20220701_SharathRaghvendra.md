+++
title = "Online Algorithm for the Minimum Metric Bipartite Matching Problem"
author = "Sharath Raghvendra (Virginia Tech)"
author_link = "https://wordpress.cs.vt.edu/algorithms/dr-sharath-raghvendra/"
author_image = "assets/authorImages/sharathraghvendra.png"
date = "2022-07-01T11:00:00+05:30"
date_end = "2022-07-01T12:00:00+05:30"
location = "Room 254, CSA Department, IISc"
location_link = "#"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> In the online minimum-metric bipartite matching (OMBM) problem, we are given a set S of server
locations. The locations of requests (given by the set R) are revealed one at a time and when a request is revealed,
we must immediately and irrevocably match it to a ``free" server. The cost of matching a server to request is given by
the distance between the two locations (which we assume satisfies triangle inequality). The objective of this problem
is to come up with a matching of servers to requests which is competitive with respect to the minimum-cost matching of
S and R.
<br><br>
In this talk, I will present an online algorithm (called the (Robust-Matching) RM-Algorithm) for this problem and show
that it gives near optimal performance in the adversarial and random arrival models and for special metrics such as the
line metric. The analysis for all of these cases is based on the dynamics of a primal-dual method used within the
RM-algorithm.  I will conclude the talk by discussing some open questions pertaining to the OMBM and the closely
related k-server problems.
<br><br>
Part of this talk is based on joint work with students Krati Nayyar and Rachita Sowle. Results presented here appear
in APPROX 2016, FOCS 2017, SoCG 2018 and SWAT 2022.