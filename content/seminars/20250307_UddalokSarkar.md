+++
title = "Testing Self-Reducible Samplers"
author = "Uddalok Sarkar (ISI Kolkata)"
author_link = "https://uddaloksarkar.github.io/"
author_image = "assets/authorImages/uddalokSarkar.jpg"
date = "2025-03-07T16:00:00+05:30"
date_end = "2025-03-07T17:00:00+05:30"
location = "Room No 112, CSA Lecture Hall"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Samplers are the backbone of the implementations of any randomized algorithm. Unfortunately, obtaining an efficient algorithm to test the correctness of samplers is very hard to find. Recently, in a series of works, testers like 𝖡𝖺𝗋𝖻𝖺𝗋𝗂𝗄, 𝖳𝖾𝗊, 𝖥𝗅𝖺𝗌𝗁  for testing of some particular kinds of samplers, like CNF-samplers and Horn-samplers, were obtained.
<br><br>
However, their techniques have a significant limitation because one can not expect to use their methods to test for other samplers, such as perfect matching samplers or samplers for sampling linear extensions in posets. In this talk, we will see a new testing algorithm that works for a broader class of samplers and can estimate the distance of a sampler from a known sampler (say, uniform sampler). Testing the identity of distributions is the heart of testing the correctness of samplers.
<br><br>
This work's main technical contribution is developing a new distance estimation algorithm for distributions over high-dimensional cubes using the recently proposed sub-cube conditioning sampling model. Given subcube conditioning access to an unknown distribution P and a known distribution Q defined over {0,1}^n, our algorithm 𝖢𝗎𝖻𝖾𝖯𝗋𝗈𝖻𝖾𝖤𝗌𝗍 estimates the variation distance between P and Q within an additive error using O(n^2) subcube conditional samples from P. Through this work, we bridge the gap between theoretical guarantees and practical validation, paving the way for more reliable randomized algorithms.