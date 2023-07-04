+++
title = "Integrality Gaps for Random Integer Programs via Discrepancy"
author = "Daniel Dadush (CWI, Netherlands)"
author_link = "https://homepages.cwi.nl/~dadush/"
author_image = "assets/authorImages/danielDadush.png"
date = "2023-06-30T16:00:00+05:30"
date_end = "2023-06-30T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=RBt-Tpfdtns"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++
<b>Abstract:</b>
We prove new bounds on the additive gap between the value of a random integer program max c^T x, Ax≤b, x∈{0,1}^n with 
m constraints and that of its linear programming relaxation for a wide range of distributions on (A,b,c) . We are 
motivated by the work of Dey, Dubey, and Molinaro (SODA '21), who gave a framework for relating the size of 
Branch-and-Bound (B&B) trees to additive integrality gaps.
<br>
Dyer and Frieze (MOR '89) and Borst et al. (Mathematical Programming '22), respectively, showed that for certain 
random packing and Gaussian IPs, where the entries of A,c are independently distributed according to either the 
uniform distribution on [0,1] or the Gaussian distribution N(0,1), the integrality gap is bounded by O_m(log^2(n)/n) 
with probability at least 1−1/n−e{-Omega(m)}. In this paper, we generalize these results to the case where the 
entries of A are uniformly distributed on an integer interval (e.g., entries in {−1,0,1}), and where the columns 
of A are distributed according to an isotropic logconcave distribution. Second, we substantially improve the 
success probability to 1−1/poly(n), compared to constant probability in prior works (depending on m). Leveraging 
the connection to Branch-and-Bound, our gap results imply that for these IPs B&B trees have size n^poly(m) with 
high probability (i.e., polynomial for fixed m), which significantly extends the class of IPs for which B&B is 
known to be polynomial.
<br>
Our main technical contribution is a new linear discrepancy theorem for random matrices. Our theorem gives general 
conditions under which a target vector is equal to or very close to a {0,1} combination of the columns of a random 
matrix A. The proof uses a Fourier analytic approach, building on work of Hoberg and Rothvoss (SODA '19) and 
Franks and Saks (RSA '20).
<br><br>
Joint work with Sander Borst (CWI) and Dan Mikunlincer (MIT).