+++
title = "Efficient Near-Optimal Algorithm for Online Shortest Paths in Directed Acyclic Graphs with Bandit Feedback Against Adaptive Adversaries"
author = "Arnab Maiti (University of Washington)"
author_link = "https://sites.google.com/view/arnab-maiti/home"
author_image = "assets/authorImages/arnabMaiti.png"
date = "2025-05-28T11:00:00+05:30"
date_end = "2025-05-28T12:00:00+05:30"
location = "Online Talk"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
In this paper, we study the online shortest path problem in directed acyclic graphs (DAGs) under bandit feedback against an adaptive adversary. Given a DAG $G=(V,E)$ with a source node $v_𝗌$ and a sink node $v_𝗍$, let $X \subseteq \{0,1\}^{|E|}$ denote the set of all paths from $v_𝗌$ to $v_𝗍$. At each round $t$, we select a path $x_t \in X$ and receive bandit feedback on our loss $\langle x_t,y_t \rangle \in [−1,1]$, where $y_t$ is an adversarially chosen loss vector. Our goal is to minimize regret with respect to the best path in hindsight over $T$ rounds. We propose the first computationally efficient algorithm to achieve a near-minimax optimal regret bound of $\tilde{O} (\sqrt{|E|T \log(|X|)})$ with high probability against any adaptive adversary, where $\tilde{O} (\cdot)$ hides logarithmic factors in the number of edges $|E|$.
<br><br>
Our algorithm leverages a novel loss estimator and a centroid-based decomposition in a nontrivial manner to attain this regret bound. As an application, we show that our algorithm for DAGs provides state-of-the-art efficient algorithms for m-sets, extensive-form games, the Colonel Blotto game, shortest walks in directed graphs, hypercubes, and multi-task multi-armed bandits, achieving improved high-probability regret guarantees in all these settings.
