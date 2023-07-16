+++
title = "Tackling Label Corruptions: Univariate Polynomial Regression and Generalized Linear Models"
author = "Sushrut Karmalkar (University of Wisconsin at Madison)"
author_link = "https://sushrutk.github.io/"
author_image = "assets/authorImages/sushrutKarmalkar.jpg"
date = "2023-07-18T11:00:00+05:30"
date_end = "2023-07-18T12:00:00+05:30"
location = "Offline talk at CSA Seminar Hall (CSA 254)"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Label corruptions pose a significant challenge in various machine learning tasks, affecting the 
accuracy and reliability of models. In this talk, we will address two distinct problems involving 
label corruptions, and present approaches to handle them effectively.
<br><br>
The first problem we consider is that of robust univariate polynomial regression. In this 
problem the goal is to recover a polynomial $\widehat p$ which is pointwise close to a 
polynomial $p$, given samples $(x, y)$ where, with probability $1-\rho$ the samples are 
clean, i.e. satisfy $|y - p(x)| < \sigma$; and with probability $\rho$ is corrupted, i.e. 
completely arbitrary.
We propose an approach which can tolerate $\rho$ as large as any constant less than 1/2, 
which is the information theoretic limit for unique recovery of this problem.
<br><br>
In the second problem, we examine the challenge of learning a linear function composed 
with a generalized linear model, when upto 1-o(1) (i.e. all but a vanishingly small 
fraction) of the labels are corrupted via arbitrary independent and additive noise. We 
show that in this extremely challenging setting, it is always possible to recover a 
polynomial-sized list of candidates, one of which is arbitrarily close to the true answer. 
Moreover, if a certain mild identifiability condition holds, then it is possible to prune 
the list and return a single such candidate.
