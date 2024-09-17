+++
title = "Offline Data Enhanced On-Policy Policy Gradient"
author = "Ayush Sekhari (MIT, Boston)"
author_link = "https://ayush.sekhari.com/"
author_image = "assets/authorImages/ayushSekhari.png"
date = "2024-04-25T18:30:00+05:30"
date_end = "2024-04-25T19:30:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=B-mAkZa7fpo"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Hybrid RL is the setting where an RL agent has access to both offline data and online data
by interacting with the real-world environment. In this work, we propose a new hybrid RL
algorithm that combines an on-policy actor-critic method with offline data. On-policy methods
such as policy gradient and natural policy gradient (NPG) have shown to be more robust to model
misspecification, though sometimes it may not be as sample efficient as methods that rely
on off-policy learning. On the other hand, offline methods that depend on off-policy training
often require strong assumptions in theory and are less stable to train in practice. Our
new approach integrates a procedure of off-policy training on the offline data into an
on-policy NPG framework. We show that our approach, in theory, can obtain a best-of-both-worlds
type of result -- it achieves the state-of-art theoretical guarantees of offline RL when offline
RL-specific assumptions hold, while at the same time maintaining the theoretical guarantees of
on-policy NPG regardless of the offline RL assumptions' validity. Experimentally, in challenging
rich-observation environments, we show that our approach outperforms a state-of-the-art hybrid
RL baseline which only relies on off-policy policy optimization, demonstrating the empirical
benefit of combining on-policy and off-policy learning. 

<br><br>
<b>Brief Bio:</b>  Ayush is a postdoc researcher working with Prof. Sasha Rakhlin at MIT. He completed his Ph.D. from the Computer Science department at Cornell University, advised by Professor Karthik Sridharan and Professor Robert D. Kleinberg. His research interests span stochastic optimization, reinforcement learning, and machine unlearning. Before his Ph.D., he spent a year at Google as a part of the inaugural Brain residency program. Before Google, he completed his undergraduate studies in computer science at IIT Kanpur in India where he was awarded the President's Gold medal. Ayush has also been a winner of a student best paper award at COLT 2019. 
