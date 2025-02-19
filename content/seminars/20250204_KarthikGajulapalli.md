+++
title = "Matrix Multiplication And Verification Using Coding Theory"
author = "Karthik Gajulapalli (Georgetown University)"
author_link = "https://kgajulapalli.org/"
author_image = "assets/authorImages/KarthikGajulapalli.png"
date = "2025-02-04T16:00:00+05:30"
date_end = "2025-02-04T17:00:00+05:30"
location = "Room No 104, CSA Auditorium"
location_link = "https://www.youtube.com/watch?v=YwLJCeu82Ec"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study the Matrix Multiplication Verification Problem (MMV) where the goal is, given three n × n matrices A, B, and C as input, to decide whether AB = C. A classic randomized algorithm by Freivalds (MFCS, 1979) solves MMV in O(n^2) time, and a longstanding challenge is to (partially) derandomize it while still running in faster than matrix multiplication time (i.e., in o(n^ω) time).
<br><br>
To that end, we give two algorithms for MMV in the case where AB - C is *sparse*. Specifically, when AB - C has at most O(n^δ) non-zero entries for a constant 0 <= δ < 2, we give (1) a deterministic O(n^{ω−ε})-time algorithm for constant ε = ε(δ) > 0, and (2) a randomized O(n^2)-time algorithm using (δ/2) * log(n) + O(1) random bits.
<br><br>
We then lift our ideas from the Verification to Multiplication. If the product AB of the two matrices is promised to be sparse, then we give a deterministic algorithm that computes the product in o(n^ω) time.
<br><br>
Our algorithms are simple and use techniques from coding theory.
<br><br>
Joint work with Huck Bennett, Alexander Golovnev, and Evelyn Warton.
