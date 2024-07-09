+++
title = "Leveraging Large Language Models for Causal Inference"
author = "Rohit Bhattacharya (Williams College)"
author_link = "https://www.cs.jhu.edu/~rohit/"
author_image = "assets/authorImages/rohitBhattacharya.png"
date = "2024-07-11T11:00:00+05:30"
date_end = "2024-07-11T12:00:00+05:30"
location = "Offline Talk at CSA 112"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
Recent text-based causal methods attempt to mitigate confounding bias by estimating proxies of confounding variables 
that are partially or imperfectly measured from unstructured text data. These approaches, however, assume analysts 
have supervised labels of the confounders given text for a subset of instances, a constraint that is sometimes 
infeasible due to data privacy or annotation costs. In this work, we leverage the zero-shot capabilities of large 
language models (LLMs) for causal inference in settings where an important confounding variable is completely 
unobserved. We propose a new causal inference method that uses multiple instances of pre-treatment text data, 
infers two proxies from two zero-shot models on the separate instances, and applies these proxies in the so-called 
proximal g-formula. We prove that our particular text-based proxy design satisfies identification conditions 
required by this formula while other seemingly reasonable proposals for applying zero-shot models do not. We 
evaluate our method in synthetic and semi-synthetic settings and find that it produces estimates with low bias. 
To address untestable assumptions associated with the proximal g-formula, we further propose an odds ratio 
falsification heuristic. This new combination of proximal causal inference and zero-shot classifiers expands the 
set of text-specific causal methods available to practitioners.

