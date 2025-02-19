+++
title = "Semi-Bandit Learning for Monotone Stochastic Optimization"
author = "Arpit Agarwal (IIT Bombay)"
author_link = "https://agarpit.github.io/"
author_image = "assets/authorImages/ArpitAgarwal.png"
date = "2024-12-24T11:30:00+05:30"
date_end = "2024-12-24T12:30:00+05:30"
location = "Online talk on Microsoft Teams"
location_link = "https://www.youtube.com/watch?v=owl4HrKJc1g"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Stochastic optimization is a widely used approach for optimization under uncertainty, where uncertain input parameters are modeled by random variables. Exact or approximation algorithms have been obtained for several fundamental problems in this area. However, a significant limitation of this approach is that it requires full knowledge of the underlying probability distributions. Can we still get good (approximation) algorithms if these distributions are unknown, and the algorithm needs to learn them through repeated interactions? Particularly, can we design an online learning algorithm whose performance smoothly approaches the performance of an (offline) optimal algorithm which has knowledge of these distributions?
<br><br>
In this work, we resolve this question for a large class of “monotone” stochastic problems, by providing a generic online learning algorithm with sqrt{T log T} regret relative to the best approximation algorithm (under known distributions). Importantly, our online algorithm works in a semi-bandit setting, where in each period, the algorithm only observes samples from the r.v.s that were actually probed. Our framework applies to several fundamental problems in stochastic optimization such as prophet inequality, Pandoras box, stochastic knapsack, stochastic matchings and stochastic submodular optimization.
<br><br>
In a series of lectures, I will first introduce the multi-armed bandits framework and describe the popular algorithmic principle of "optimism in the face of uncertainty". I will then give a brief introduction to stochastic optimization. Finally, I will describe our result on conversion from offline to online semi-bandit algorithms for stochastic optimization.
<br><br>
This work is based on a FOCS24 paper with Rohan Ghuge and Viswanath Nagarajan- https://arxiv.org/pdf/2312.15427.
