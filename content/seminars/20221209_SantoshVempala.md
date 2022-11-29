+++
title = "Lifelong Learning of Representations with Provable Guarantees"
author = "Santosh Vempala (Georgia Tech)"
author_link = "https://faculty.cc.gatech.edu/~vempala/"
author_image = "assets/authorImages/santoshVempala.png"
date = "2022-12-09T15:00:00+05:30"
date_end = "2022-12-09T16:00:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
In lifelong learning, tasks (or classes) to be learned arrive sequentially over time in arbitrary order. During
training, knowledge from previous tasks can be captured and transferred to subsequent ones to improve sample
efficiency. We consider the setting where all target tasks can be represented in the span of a small number of
unknown linear (or nonlinear) features of the input data and propose a lifelong learning algorithm that maintains
and refines the internal feature representation. We prove that for any desired accuracy on all tasks, the dimension
of the representation remains close to that of the underlying representation. The resulting algorithm is provably
efficient and the sample complexity for input dimension d, m tasks with k total features up to error ϵ is
O~((dk^1.5  + km)/ϵ). We also prove a matching lower bound for any lifelong learning algorithm that uses a single
task learner as a black box. An empirical study, with a lifelong learning heuristic for deep neural networks, performs
favorably on challenging image datasets compared to state-of-the-art continual learning methods.