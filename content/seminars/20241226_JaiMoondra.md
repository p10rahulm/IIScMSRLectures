+++
title = "New Approaches to Multi-Objective Optimization with Applications to Fairness and Online Learning"
author = "Jai Moondra (Georgia Tech)"
author_link = "https://jaimoondra.github.io/"
author_image = "assets/authorImages/JaiMoondra.jpeg"
date = "2024-12-26T11:30:00+05:30"
date_end = "2024-12-26T12:30:00+05:30"
location = "Online talk on Microsoft Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Real-world optimization problems often involve balancing competing objectives, such as fairness objectives in resource allocation or the trade-off between regret and runtime in online learning. Traditional approaches rely on predefined composite objectives, which (i) require fixing a composite objective a priori, (ii) can pose challenges to policymakers in selecting appropriate trade-offs and (iii) lead to unintended biases in outcomes. In this talk, I will present new approaches for addressing these challenges. First, motivated by organ transplantation policies, we introduce “fairness portfolios” for optimization problems, which are small sets of solutions such that any fairness objective is approximately satisfied by some solution in the portfolio. We study the trade-off between portfolio size and solution quality, giving new approximation algorithms and a primal-dual counting technique. I will also discuss their practical applications in the context of facility location and other policy problems.
<br><br>
Next, I will discuss the trade-off between regret and runtime in online learning problems. Drawing from applications in recommendation systems, we demonstrate how combining discrete and continuous techniques over submodular base polytopes can significantly reduce runtimes of optimal-regret algorithms such as Mirror Descent.