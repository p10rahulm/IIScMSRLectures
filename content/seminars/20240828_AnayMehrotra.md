+++
title = "Efficient Statistics With Unknown Truncation, Polynomial Time Algorithms, Beyond Gaussians"
author = "Anay Mehrotra (Yale University)"
author_link = "https://anaymehrotra.com/"
author_image = "assets/authorImages/anayMehrotra.png"
date = "2024-08-28T11:00:00+05:30"
date_end = "2024-08-28T12:00:00+05:30"
location = "Offline talk at CSA 104, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
n many scientific disciplines, data collection processes introduce systematic biases, leading to challenges in 
accurately learning from this data. In this talk, we study statistical estimation under systematic bias, 
focusing on estimating the parameters of an exponential family distribution when samples are only shown if they 
fall in an unknown subset S of R^d.
<br><br>
Previous work by Kontonis et al. (FOCS’19) gave a d^poly(1/ε) algorithm for estimating ε-accurate parameters in the 
case of Gaussian distributions with diagonal covariance matrices. Recently, Diakonikolas et al. (COLT’24) demonstrated 
that this exponential dependence on 1/ε is necessary, even for well-behaved classes of S.
<br><br>
These works leave the following open problems: Can we generalize these results to arbitrary Gaussians or beyond? Can 
we develop algorithms with poly(d/ε) runtime when S is a simple set, such as a halfspace? This talk presents new 
algorithms addressing these challenges, based on joint work with Jane H. Lee and Manolis Zampetakis. A draft of 
this work is available at https://tinyurl.com/unknown-truncation