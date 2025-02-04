+++
title = "Matrix Multiplication And Verification Using Coding Theory"
author = "Karthik Gajulapalli (IIIT Delhi)"
author_link = "https://kgajulapalli.org/"
author_image = "assets/authorImages/KarthikGajulapalli.png"
date = "2025-02-04T16:00:00+05:30"
date_end = "2025-02-04T17:00:00+05:30"
location = "Room No 104, CSA Auditorium"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
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
