+++
title = "The Sampling Problem Through The Lens of Optimization : Recent Advances and Insights"
author = "Aniket Das (Google Research)"
author_link = "https://aniket1998.github.io/"
author_image = "assets/authorImages/aniketDas.jpg"
date = "2023-11-24T11:00:00+05:30"
date_end = "2023-11-24T12:00:00+05:30"
location = "Online Talk on Microsoft Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
The task of sampling from a probability measure on $\mathbb{R}^d$ whose density (w.r.t Lebesgue Measure) 
$\pi(\mathbf{x}) \propto \exp(-F(\mathbf{x}))$ is known only upto a normalizing constant, is a fundamental problem 
in High Dimensional Statistics, Theoretical Computer Science and Machine Learning. In this talk, I will discuss how 
sampling can be analyzed as an optimization-problem over the infinite-dimensional space of probability measures, 
equipped with the 2-Wasserstein metric from Optimal Transport. This perspective has spurred numerous breakthroughs in 
the field by allowing the transfer of familiar tools and techniques from the well-developed theory of continuous 
optimization. I will elucidate the efficacy of this paradigm by discussing the state-of-the-art analysis of two 
highly popular sampling algorithms:  Stein Variational Gradient Descent (SVGD) and Stochastic Gradient Langevin 
Dynamics (SGLD).
<br><br>
This talk shall be based upon the following works:
<li>
    <ol>Das and Nagaraj, “Provably Fast Finite Particle Variants of SVGD via Virtual Particle Stochastic 
        Approximation” : Spotlight Paper at NeurIPS 2023; Oral Presentation at the Optimal Transport and Machine 
        Learning Workshop 2023. <a href="https://arxiv.org/abs/2305.17558" target="_blank">[Link]</a>
    </ol>
    <ol>Das, Nagaraj and Raj, "Utilising the CLT Structure in Stochastic Gradient-Based Sampling: Improved Analysis 
        and Faster Algorithms" : COLT 2023. 
        <a href="https://proceedings.mlr.press/v195/das23b.html" target="_blank">[Link]</a>
    </ol>
</li>

