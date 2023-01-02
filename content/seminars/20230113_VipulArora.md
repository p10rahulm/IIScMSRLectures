+++
title = "Low Degree Testing over the Reals"
author = "Vipul Arora (NUS)"
author_link = "https://dblp.org/pid/43/521.html"
author_image = "assets/authorImages/VipulArora.png"
date = "2023-01-13T16:00:00+05:30"
date_end = "2023-01-13T17:00:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study the problem of testing whether a function $f: \mathbb{R}^n \to \mathbb{R}$ is a polynomial of degree at most $d$ in
the \emph{distribution-free} testing model. Here, the distance between functions is measured with respect to an
unknown distribution $\mathcal{D}$ over $\mathbb{R}^n$ from which we can draw samples. In contrast to previous work,
we do not assume that $\mathcal{D}$ has finite support.
<br><br>
We design a tester that given query access to $f$, and sample access to $\mathcal{D}$, makes
$\texttt{poly}(d/\varepsilon)$ many queries to $f$, accepts with probability $1$ if $f$ is a polynomial of degree $d$,
and rejects with probability at least $\frac{2}{3}$ if every degree-$d$ polynomial $P$ disagrees with $f$ on a
set of mass at least $\varepsilon$ with respect to $\mathcal{D}$.
<br><br>
Our result also holds under mild assumptions when we receive only a polynomial number of bits of precision for each
query to $f$, or when $f$ can only be queried on rational points representable using a logarithmic number of bits.
Along the way, we prove a new stability theorem for multivariate polynomials that may be of independent interest.
<br><br>
This is a joint work with Arnab Bhattacharyya, Esty Kelman, Noah Fleming, and Yuichi Yoshida, and will appear in SODA’23.