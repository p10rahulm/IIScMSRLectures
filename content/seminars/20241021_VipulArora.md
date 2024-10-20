+++
title = "Outlier Robust Multivariate Polynomial Regression"
author = "Vipul Arora (NUS)"
author_link = "https://vipularora219.github.io/"
author_image = "assets/authorImages/VipulArora.png"
date = "2024-10-21T16:00:00+05:30"
date_end = "2024-10-21T17:00:00+05:30"
location = "Room No 104, CSA Building, IISc Bangalore"
location_link = "https://www.youtube.com/watch?v=IK_BvWXPY_Q"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study the problem of robust multivariate polynomial regression: 
let $p : \mathbb{R}^n \to \mathbb{R}$ be an unknown $n$-variate polynomial of degree at most $d$ in each variable. We are given 
as input a set of random samples $(\mathbf{x}_i, y_i) \in [-1,1]^n \times \reals$ that are noisy versions of 
$(\mathbf{x}_i, p(\mathbf{x}_i))$. More precisely, each $\mathbf{x}_i$ is sampled independently from some distribution 
$\chi$ on $[-1,1]^n$, and for each $i$ independently, $y_i$ is arbitrary (i.e., an outlier) with probability at most 
$\rho < 1/2$, and otherwise satisfies $|y_i - p(\mathbf{x}_i)| \leq \sigma$. The goal is to output a polynomial 
$\hat{p}$, of degree at most $d$ in each variable, within an $\ell_\infty$-distance of at most $O(\sigma)$ from $p$.
Kane, Karmalkar, and Price [FOCS'17] solved this problem for $n=1$. We generalize their results to the $n$-variate 
setting, showing an algorithm that achieves a sample complexity of $O_n(d^n \log d)$, where the hidden constant 
depends on $n$, if $\chi$ is the $n$-dimensional Chebyshev distribution. 
The sample complexity is $O_n(d^{2n} \log d)$, if the samples are drawn from the uniform distribution instead. 
The approximation error is guaranteed to be at most $O(\sigma)$, and the run-time depends on $\log(1/\sigma)$. In 
the setting where each $\mathbf{x}_i$ and $y_i$ are known up to $N$ bits of precision, the run-time's dependence 
on $N$ is linear. We also show that our sample complexities are optimal in terms of $d^n$. 
Furthermore, we show that it is possible to have the run-time be independent of $1/\sigma$, at the cost of a 
higher sample complexity.
<br><br>
This is a joint work with Arnab Bhattacharyya, Mathews Boban, Venkatesan Guruswami, and Esty Kelman, and 
appeared at ESA'24.