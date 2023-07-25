+++
title = "Moments, Random Walks, and Limits for Spectrum Approximation"
author = "Apoorv Vikram Singh (NYU, Tandom)"
author_link = "https://savs95.github.io/"
author_image = "assets/authorImages/apoorvVikramSingh.jpg"
date = "2023-07-17T14:00:00+05:30"
date_end = "2023-07-17T15:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=C41b37WWdKs"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We study lower bounds for the problem of approximating a one dimensional 
distribution given (noisy) measurements of its moments. We show that there 
are distributions on [−1, 1] that cannot be approximated to accuracy ε in 
Wasserstein-1 distance even if we know all of their moments to multiplicative 
accuracy (1 ± 2−Ω(1/ε)); this result matches an upper bound of Kong and 
Valiant [Annals of Statistics, 2017]. To obtain our result, we provide a 
hard instance involving distributions induced by the eigenvalue spectra of 
carefully constructed graph adjacency matrices. Efficiently approximating such 
spectra in Wasserstein-1 distance is a well-studied algorithmic problem, and a 
recent result of Cohen-Steiner et al. [KDD 2018] gives a method based on 
accurately approximating spectral moments using 2O(1/ε) random walks initiated 
at uniformly random nodes in the graph. 
<br><br>
As a strengthening of our main result, we show that improving the dependence on 
1/ε in this result would require a new algorithmic approach. Specifically, no 
algorithm can compute an ε-accurate approximation to the spectrum of a 
normalized graph adjacency matrix with constant probability, even when given 
the transcript of 2Ω(1/ε) random walks of length 2Ω(1/ε) started at random nodes.
<br><br>
Based on joint work with Yujia Jin, Christopher Musco, and Aaron Sidford.