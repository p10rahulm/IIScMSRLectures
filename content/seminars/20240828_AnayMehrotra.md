+++
title = "Efficient Statistics With Unknown Truncation, Polynomial Time Algorithms, Beyond Gaussians"
author = "Anay Mehrotra (Yale University)"
author_link = "https://anaymehrotra.com/"
author_image = "assets/authorImages/anayMehrotra.png"
date = "2024-08-28T11:00:00+05:30"
date_end = "2024-08-28T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=qLOZoyY3cHg"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
In many scientific disciplines, data collection processes introduce systematic biases, leading to challenges in 
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