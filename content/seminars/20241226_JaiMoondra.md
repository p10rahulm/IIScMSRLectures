+++
title = "New Approaches to Multi-Objective Optimization with Applications to Fairness and Online Learning"
author = "Jai Moondra (Georgia Tech)"
author_link = "https://jaimoondra.github.io/"
author_image = "assets/authorImages/JaiMoondra.jpeg"
date = "2024-12-26T11:30:00+05:30"
date_end = "2024-12-26T12:30:00+05:30"
location = "Online talk on Microsoft Teams"
location_link = "https://www.youtube.com/watch?v=KgZjZmeF3lk"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Real-world optimization problems often involve balancing competing objectives, such as fairness objectives in resource allocation or the trade-off between regret and runtime in online learning. Traditional approaches rely on predefined composite objectives, which (i) require fixing a composite objective a priori, (ii) can pose challenges to policymakers in selecting appropriate trade-offs and (iii) lead to unintended biases in outcomes. In this talk, I will present new approaches for addressing these challenges. First, motivated by organ transplantation policies, we introduce “fairness portfolios” for optimization problems, which are small sets of solutions such that any fairness objective is approximately satisfied by some solution in the portfolio. We study the trade-off between portfolio size and solution quality, giving new approximation algorithms and a primal-dual counting technique. I will also discuss their practical applications in the context of facility location and other policy problems.
<br><br>
Next, I will discuss the trade-off between regret and runtime in online learning problems. Drawing from applications in recommendation systems, we demonstrate how combining discrete and continuous techniques over submodular base polytopes can significantly reduce runtimes of optimal-regret algorithms such as Mirror Descent.