+++
title = "Quantum Worst-case to Average-case reductions for all linear problems"
author = "Sathyawageeswar Subramanian (University of Warwick)"
author_link = "https://scholar.google.co.uk/citations?user=s02f_hIAAAAJ&hl=en"
author_image = "assets/authorImages/sathyaSubramanian.png"
date = "2023-01-05T14:45:00+05:30"
date_end = "2023-01-05T15:45:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=17BmcXsCZ4o"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Given an algorithm that has a small non-zero probability of answering correctly on an average input, can we use it to
design another algorithm that has non-zero probability of answering correctly even on worst-case inputs? In this talk,
I will focus on quantum algorithms for linear problems, and describe an explicit and efficient transformation that
turns algorithms which are only correct on a small (even sub-constant) fraction of their inputs into ones that are
correct on all inputs. This stands in contrast to the classical setting, where such results are only known for a small
number of specific problems or restricted computational models. Along the way I will also present a tight Omega(n^2)
lower bound on the average-case quantum query complexity of the Matrix-vector Multiplication problem.
<br><br>
The techniques used in this work build on the recently introduced additive combinatorics framework for classical
worst-case to average-case reductions (STOC 2022). The key quantum ingredients are subroutines based on quantum
singular value transformations for approximate verification of the output of noisy quantum algorithms, and a
learner for the heavy Fourier characters of indicator functions with imperfect quantum implementations. I will
discuss how these tools can be combined to prove a quantum local correction lemma based on a probabilistic
generalisation of Bogolyubov's lemma in additive combinatorics, leading to our worst-case to average-case
transformation for linear problems.
<br><br>
This talk is based on joint work with Vahid Asadi, Alexander Golovnev, Tom Gur,
and Igor Shinkar (https://arxiv.org/abs/2212.03348).