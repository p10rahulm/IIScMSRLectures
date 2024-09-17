+++
title = "Criticality of AC0-formulae"
author = "Prahladh Harsha (TIFR, Mumbai)"
author_link = "https://www.tifr.res.in/~prahladh/"
author_image = "assets/authorImages/prahladhHarsha.png"
date = "2023-03-20T16:00:00+05:30"
date_end = "2023-03-20T17:00:00+05:30"
location = "Youtube Talk Link"
location_link = "https://www.youtube.com/watch?v=SeGF49RcOOE"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Hastad's celebrated switching lemma gives inverse-exponential bounds (In terms of t) on the probability that an k-DNF 
when hit by a p-restriction requires decision-trees of depth larger than t. The switching lemma has proved to be 
extremely powerful, since its discovery, leading to optimal size lower bounds for AC0-circuits [Hastad 1986] and 
AC0 formulae [Rossman 2015] against the parity function
<br><br>
More recently, the search for optimal correlation bounds against parity led to the notion of criticality 
[Rossman 2019]. The criticality of a Boolean function $f : \{0, 1\}^n → \{0, 1\}$ is the minimum $\lambda ≥ 1$ such 
that for all positive integers $t$, we have
<br><br>
$Pr_{ρ \sim Rp} [ DT_{depth} (f\mid_ρ) ≥ t ] ≤ (p\lambda)^t$
<br><br>
Hastad (2014) proved that size S and depth (d+1) AC0-circuits have criticality at most $\mathcal{O}((log S)^d)$ 
leading to optimal correlation bounds of AC0-circuits against parity. Rossman (2019) subsequently proved that size S 
and depth (d+1) AC0-formulae, which are regular (ie., all gates of the same depth have equal fan-in) have criticality 
at most $\mathcal{O}((log S/d)^d)$.
<br><br>
In this work, we strengthen and unify all the above results by proving that any (not necessarily regular) AC0-formula 
of size S and depth (d+1) has criticality at most $\mathcal{O}((log S/d)^d)$.
This criticality bound implies tight correlation bounds against parity, tight Fourier concentration results and 
improved #SAT algorithm for AC0-formulae.
<br><br>
[Joint work with Tulasimohan Molli and Ashutosh Shankar]