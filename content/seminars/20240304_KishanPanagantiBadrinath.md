+++
title = "Robust Reinforcement Learning using Offline Data"
author = "Kishan Panaganti Badrinath (Caltech)"
author_link = "https://sites.google.com/a/tamu.edu/kpb/home"
author_image = "assets/authorImages/kishanBadrinathPanaganti.jpg"
date = "2024-03-04T11:00:00+05:30"
date_end = "2024-03-04T12:00:00+05:30"
location = "Offline Talk at CSA 254"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
The goal of robust reinforcement learning (RL) is to learn a policy that 
is robust against the uncertainty in model parameters. Parameter uncertainty 
commonly occurs in many real-world RL applications due to simulator 
modeling errors, changes in the real-world system dynamics over time, 
and adversarial disturbances. Robust RL is typically formulated as a 
max-min problem, where the objective is to learn the policy that maximizes 
the value against the worst possible models that lie in an uncertainty set. 
In this work, we propose a robust RL algorithm called Robust Fitted 
Q-Iteration (RFQI), which uses only an offline dataset to learn the 
optimal robust policy. Robust RL with offline data is significantly more 
challenging than its non-robust counterpart because of the minimization over 
all models present in the robust Bellman operator. This poses challenges in 
offline data collection, optimization over the models, and unbiased 
estimation. In this work, we propose a systematic approach to overcome 
these challenges, resulting in our RFQI algorithm.
<br><br>
<b>Research Bio for Kishan Panaganti:</b>
<br>
Kishan is a PIMCO Postdoctoral Fellow at Caltech. He received PhD in 
August 2023 from the Department of Electrical and Computer Engineering 
at Texas A&M University, advised by Prof. Dileep Kalathil. His research 
interests in machine learning are motivated via addressing challenges 
for autonomous solutions in the real-world problems. His work on 
theoretical foundations of reinforcement learning algorithms tackling 
the simulation to real-world performance gaps through providing robust 
solutions have been published in multiple machine learning conferences. 
His future research focus will be to address such performance gaps in 
more general domains like that of multi-agent systems.