+++
title = "Online Omniprediction"
author = "Sumegha Garg (Rutgers University)"
author_link = "https://sites.google.com/view/sumegha-garg/home"
author_image = "assets/authorImages/sumeghaGarg.png"
date = "2024-01-09T16:00:00+05:30"
date_end = "2024-01-09T17:00:00+05:30"
location = "Offline Talk at CSA Seminar Hall"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar
Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b> 

A recent line of work has shown a surprising connection between multicalibration, a multi-group fairness notion, and
omniprediction, a learning paradigm that provides simultaneous loss minimization guarantees for a large family of loss
functions [GKR+22, GHK+23 , GKR23 , GHHK+23]. Prior work studies omniprediction in the batch setting. Our work initiates
the study of omniprediction in the online adversarial setting. In the talk, we will briefly see the definitions and
motivations for these theoretic notions, and then survey the new results for online omniprediction.
<br>
Our contributions are two-fold:
1. We develop a new online multicalibration algorithm that is well defined for infinite benchmark classes F (e.g. the set of all linear functions), and is oracle efficient — i.e. for any class F, the algorithm has the form of an efficient reduction to a no-regret learning algorithm for F. This implies an oracle efficient online omnipredictor — an online prediction algorithm that can be used to simultaneously obtain no regret guarantees to all Lipschitz convex loss functions.
<br>
2. We show upper and lower bounds on the extent to which our regret rates can be improved.
<br>

<br>
Joint work with Christopher Jung, Omer Reingold and Aaron Roth.