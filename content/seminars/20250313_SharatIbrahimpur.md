+++
title = "An O(log n)-Approximation Algorithm for (p,q)-Flexible Graph Connectivity via Independent Rounding"
author = "Sharat Ibrahimpur (University of Bonn, Germany)"
author_link = "https://i-sharat.github.io/"
author_image = "assets/authorImages/sharatIbrahimpur.jpg"
date = "2025-03-13T14:30:00+05:30"
date_end = "2025-03-13T15:30:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=cc6tYJkkadA"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
In this talk I will present improved approximation algorithms for the Flexible Graph Connectivity (FGC) model of Adjiashvili, Hommelsheim and Mühlenthaler (IPCO 2020). Since its introduction the FGC model has received a lot of interest as it offers new means of capturing non-uniformity of edges that appear in survivable network design applications.
<br><br>
In this setting, we are given a graph G = (V,E) whose edges have nonnegative costs and they are either safe and unsafe. The algorithmic goal in the (p,q)-FGC problem is to find a minimum cost set of edges F such that the subgraph (V,F) remains p-edge-connected after removing any q unsafe edges from F, for some given connectivity and robustness parameters p and q, respectively. 
<br><br>
I will present a new integer programming formulation for the (p,q)-FGC problem which is obtained by adding knapsack cover constraints to the capacitated p(p+q)-edge-connectivity formulation studied in previous work. I will then show that the associated linear relaxation can be solved in polynomial time by giving an efficient separation oracle. Complementing this, we will see that a simple independent randomized rounding of the LP solution yields an O(log n)-approximation for general  values of p and q, improving the state-of-the-art O(q log n). For both separation and rounding, a key insight is to use Karger's bound on the number of near-minimum cuts. 
<br><br>
Based on joint work with László A. Végh: <a href="https://arxiv.org/abs/2501.12549" target="_blank">https://arxiv.org/abs/2501.12549</a>.