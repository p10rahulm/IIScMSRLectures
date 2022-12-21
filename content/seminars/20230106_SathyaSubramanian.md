+++
title = "Quantum Worst-case to Average-case reductions for all linear problems"
author = "Sathyawageeswar Subramanian (University of Warwick)"
author_link = "https://scholar.google.co.uk/citations?user=s02f_hIAAAAJ&hl=en"
author_image = "assets/authorImages/sathyaSubramanian.png"
date = "2023-01-06T11:00:00+05:30"
date_end = "2023-01-06T12:00:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
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