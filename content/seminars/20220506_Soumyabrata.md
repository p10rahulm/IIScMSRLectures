+++
title = "New techniques and results for Support Recovery in Mixture Models"
author = "Soumyabrata Pal (Google Research)"
author_link = "https://soumyabratap.github.io/"
author_image = "assets/authorImages/soumyabrata.jpg"
date = "2022-05-06T11:00:00+05:30"
date_end = "2022-05-06T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=vyVFzatq97o"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Mixture models with high dimensional parameter vectors are widely used to fit complex multimodal
datasets as they allow representation of latent sub-populations within the overall population. The primary difficulty
in learning mixture models is that the observed data does not identify the subpopulation to which an individual
observation belongs.
<br><br>
We study the problem of support recovery in mixture models parameterized by sparse vectors i.e. our goal is to recover
the set of non-zero indices of each of the unknown vectors. We present a very generic framework (including a novel
tensor-based algorithm) for support recovery by using estimates of the number of unknown vectors having non-zero
entries in small subsets of indices. We apply this framework by showing a variety of techniques to estimate the
aforementioned quantities in different mixture models. Our results for support recovery are quite general, namely
they are applicable to 1) Mixtures of many different canonical distributions including Uniform, Poisson, Laplace,
Gaussians, etc. 2) Mixtures of linear regressions and linear classifiers.
<br><br>
Based on joint works (https://arxiv.org/abs/2202.11940, https://arxiv.org/abs/2106.05951) with Arya Mazumdar and
Venkata Gandikota