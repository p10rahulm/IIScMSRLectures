+++
title = "Private Convex Optimization via Exponential Mechanism"
author = "Sivakanth Gopi (MSR, Redmond)"
author_link = "https://www.microsoft.com/en-us/research/people/sigopi/"
author_image = "assets/authorImages/sivakanthGopi.png"
date = "2023-03-17T11:00:00+05:30"
date_end = "2023-03-17T12:00:00+05:30"
location = "CSA Seminar Hall, Room 112, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study differentially private optimization of (non-smooth) convex functions $F(x)=E_i[f_i(x)]$. The classic 
exponential mechanism minimizes $F(x)$ by sampling from $\pi(x) \sim exp(-kF(x))$, but achieves a suboptimal privacy vs 
utility tradeoff. We show that modifying the exponential mechanism by adding an $\ell_2^2$ regularizer to $F(x)$ and 
sampling from $\pi(x) \sim exp(-k(F(x)+\mu ||x||_2^2/2))$ recovers both optimal empirical risk and population loss under 
$(\epsilon,\delta)$-DP. We also give an algorithm to efficiently sample from the exponential mechanism using optimal 
number of oracle queries to $f_i(x)$.
<br><br>
We prove that the regularized exponential mechanism satisfies Gaussian Differential Privacy; our privacy bound is 
optimal (with tight constants), as it includes the analysis of Gaussian mechanism as a special case. The privacy 
proof uses isoperimetric inequality for strongly log-concave measures.
<br><br>
Joint work with Yin Tat Lee and Daogao Liu. The link to the paper is at 
<a href = 'https://arxiv.org/pdf/2203.00263.pdf' target='_blank'>https://arxiv.org/pdf/2203.00263.pdf</a>.