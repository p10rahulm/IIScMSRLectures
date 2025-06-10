+++
title = "Efficient Near-Optimal Algorithm for Online Shortest Paths in Directed Acyclic Graphs with Bandit Feedback Against Adaptive Adversaries"
author = "Arnab Maiti (University of Washington)"
author_link = "https://sites.google.com/view/arnab-maiti/home"
author_image = "assets/authorImages/arnabMaiti.png"
date = "2025-05-28T11:00:00+05:30"
date_end = "2025-05-28T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://youtu.be/HMmbNEdvyYk"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
In this paper, we study the online shortest path problem in directed acyclic graphs (DAGs) under bandit feedback against an adaptive adversary. Given a DAG $G=(V,E)$ with a source node $v_𝗌$ and a sink node $v_𝗍$, let $X \subseteq \{0,1\}^{|E|}$ denote the set of all paths from $v_𝗌$ to $v_𝗍$. At each round $t$, we select a path $x_t \in X$ and receive bandit feedback on our loss $\langle x_t,y_t \rangle \in [−1,1]$, where $y_t$ is an adversarially chosen loss vector. Our goal is to minimize regret with respect to the best path in hindsight over $T$ rounds. We propose the first computationally efficient algorithm to achieve a near-minimax optimal regret bound of $\tilde{O} (\sqrt{|E|T \log(|X|)})$ with high probability against any adaptive adversary, where $\tilde{O} (\cdot)$ hides logarithmic factors in the number of edges $|E|$.
<br><br>
Our algorithm leverages a novel loss estimator and a centroid-based decomposition in a nontrivial manner to attain this regret bound. As an application, we show that our algorithm for DAGs provides state-of-the-art efficient algorithms for m-sets, extensive-form games, the Colonel Blotto game, shortest walks in directed graphs, hypercubes, and multi-task multi-armed bandits, achieving improved high-probability regret guarantees in all these settings. Paper <a href="https://arxiv.org/pdf/2504.00461" target="_blank">https://arxiv.org/pdf/2504.00461</a>.
