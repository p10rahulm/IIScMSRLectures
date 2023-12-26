+++
title = "Spectral Clustering Oracles in Sublinear Time"
author = "Michael Kapralov (EPFL, Switzerland)"
author_link = "https://theory.epfl.ch/kapralov/"
author_image = "assets/authorImages/kapralov.jpg"
date = "2021-07-23T16:00:00+05:30"
date_end = "2021-07-23T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=K-_Z9epOKyk"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Given an n-vertex graph G that can be partitioned into a few clusters with good inner conductance and
$\epsilon$-sparse boundary, i.e. admits a good clustering, can we quickly tell which cluster a given vertex belongs
to?  A clustering oracle is a small space data structure that provides query access to an approximate clustering of the
input graph in sublinear time. In this talk I will describe a clustering oracle that provides query access to an
$O(\epsilon \log k)$-approximate clustering in time about $n^{1/2+O(\epsilon)}$, where k is the number of clusters,
which is essentially optimal for constant k. Our main tool is a new way of obtaining dot product access to the spectral
embedding of a clusterable graph in sublinear time using the distribution of a few short random walks  started at
uniformly random vertices in the graph.