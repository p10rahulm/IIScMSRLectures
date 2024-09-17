+++
title = "Interplay of submodularity and randomness"
author = "Arjun Ramachandra (Decision Sciences, IIM Bangalore)"
author_link = "https://www.iimb.ac.in/user/253/arjun-ramachandra"
author_image = "assets/authorImages/arjunRamachandra.png"
date = "2024-07-05T11:00:00+05:30"
date_end = "2024-07-05T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=Kg_z0rQkmf4"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Submodularity provides a natural context to model a large class of discrete optimization problems including but not
limited to influence maximization, mechanism design, resource allocation and several machine learning problems. As a set
functional property, submodularity models the notion of diminishing returns in the discrete space. Theoretically, it has
intrigued scientists due to strong structural similarity with both convex and concave functions in the continuous space,
which has been exploited to derive worst-case performance guarantees for deterministic submodular optimization problems.
Distributionally robust submodular optimization, however, seeks to evaluate or approximate the worst-case expected value
of a submodular function (subjected to random input) over a set of joint distributions consistent with available
information on the marginals, moments or statistical distance from a reference distribution. While computing the
worst-case joint distribution or the corresponding expected value is known to be NP-hard, traditional approaches
approximate the optimal expected value by assuming the random inputs to be independent. This notion is formalized by the
concept of correlation gap which quantifies how much we “lose” in the expectation of the function by ignoring the
correlation structure of the random set and assuming independence instead. For monotone submodular set functions, it was
shown that the correlation gap is upper bounded by e/(e-1) in Agrawal et.al. (2012). In reality, however, more complex
notions of randomness are often encountered, such as when weak correlations coexist with higher-order dependencies.
Inspired by the need to incorporate more realistic notions of randomness and driven by the curiosity to understand the
interplay between functional properties and randomness, we study the behaviour of monotone submodular set functions with
pairwise independent random input. We show that in this scenario, the e/(e-1) bound on the correlation gap can be
improved to 4/3 (and that it is tight) in several cases depending on the size of the random inputs, conditions on the
marginal probabilities and the type of submodular function considered. Our results illustrate a fundamental difference
in the behavior of submodular functions under weaker notions of independence with potential ramifications in improving
existing algorithmic approximations. Interestingly, when the pairwise independence condition is relaxed to admit a
positively correlated structure, the worst-case expected value can be computed from a compact linear program formulation
derived by using results from submodular minimization theory.
<br><br>
(This is joint work with Karthik Natarajan, Singapore University of Technology and Design)
<br><br>
<b>Speaker Bio:</b>
Arjun is currently an assistant professor in the Decision Sciences area at the Indian Institute of Management,
Bangalore. Prior to this he was a postdoctoral research fellow at the Singapore University of Technology and Design (
SUTD) and graduated with a PhD in operations research from the National University of Singapore in 2021. His research
interests broadly lie in optimization under uncertainty and more specifically in analyzing distributionally robust
optimization problems under different notions of randomness and functional structure. He holds an integrated master’s
degree in Maths and Computing from the Indian Institute of Technology, Kharagpur. 