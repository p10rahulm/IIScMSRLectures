+++
title = "Robustly Learning Mixtures of Arbitrary Gaussians in Polynomial Time"
author = "Santosh Vempala (Georgia Tech)"
author_link = "https://faculty.cc.gatech.edu/~vempala/"
author_image = "assets/authorImages/santoshVempala.png"
date = "2022-12-02T11:00:00+05:30"
date_end = "2022-12-02T12:00:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
The Gaussian Mixture Model (Pearson 1894) is widely used for high-dimensional data. While classical results establish
its unique identifiability, it was shown in 2010 (Kalai-Moitra-Valiant, Belkin-Sinha) that for any fixed number of
component Gaussians, the underlying mixture parameters can be estimated to arbitrary accuracy in polynomial time.
Robust Statistics (Huber 1964) asks for estimation of underlying models robustly, i.e., even if a bounded fraction
of data is noisy, possibly chosen adversarially. This goal seemed to be computationally intractable, even for
estimating the mean of "nice" distributions, till 2016 (Diakonikolas-Kamath-Kane-Li-Moitra-Stewart, Lai-Rao-Vempala).
These methods were extended to many problems, but the robust estimation of GMMs remained a central open problem.
In this talk, we will present the first polytime algorithm for any fixed number of components with no assumptions
on the underlying mixture. The techniques developed, clustering using convex relaxations and approximate tensor
decomposition allowing for error in both Frobenius norm and low-rank terms, might be useful more generally.