+++
title = "Cascaded Norms in Clustering"
author = "Eden Chlamtac (Ben Gurion University)"
author_link = "https://www.cs.bgu.ac.il/~chlamtac/"
author_image = "assets/authorImages/edenchlamtac.jpg"
date = "2022-02-04T11:00:00+05:30"
date_end = "2022-02-04T12:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Clustering is one of the most fundamental tasks in various areas such
                 as machine learning and optimization. In theoretical computer science,
                 we are interested in the complexity of finding a "good" clustering,
                 given a data set with some distance function, and a target number of
                 centers to choose from among the input points. Our goal is to find a
                 set of centers (of the required cardinality) which minimizes some cost
                 function which aggregates the distances of all input points from their
                 respective nearest centers. This includes well-studied notions such as
                 k-Medians Clustering and k-Means Clustering.
                 <br><br>
                 More recently, there has been a focus on 'fairness' in clustering, in
                 which we want to take into consideration not only the global cost but
                 also to counteract structural bias against marginalized groups. To
                 this end, one first aggregates the costs incurred within the given
                 groups of interest, before aggregating the costs incurred by these
                 groups.
                 <br><br>
                 We focus on a very general notion of fairness - the input consists of
                 data points, a target number of centers, and a collection of groups
                 represented by different weight functions. The objective we wish to
                 minimize is the ell_q norm of the group costs, where each group cost
                 is computed as the (weighted) ell_p norm of distances of points in the
                 group to their respective nearest centers. We study this problem from
                 the point of view of approximation algorithms, giving algorithms for
                 all values of p and q that smoothly interpolate between optimal and
                 near-optimal approximations for fundamental parameter settings of
                 (p,q), such as (infinity, q), (p, infinity), and (p,p).
                 <br><br>
                 Based on joint work with Yury Makarychev and Ali Vakilian.