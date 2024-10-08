+++
title = "Ticketed Learning-Unlearning Schemes"
author = "Ayush Sekhari (MIT, Boston)"
author_link = "https://ayush.sekhari.com/"
author_image = "assets/authorImages/ayushSekhari.png"
date = "2024-04-18T18:30:00+05:30"
date_end = "2024-04-18T19:30:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=ExQ56wcjYhU"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
We consider the learning--unlearning paradigm defined as follows. 
First given a dataset, the goal is to learn a good predictor, such as 
one minimizing a certain loss. Subsequently, given any subset of examples 
that wish to be unlearnt, the goal is to learn, without the knowledge of 
the original training dataset, a good predictor that is identical to the 
predictor that would have been produced when learning from scratch on the
surviving examples. We propose a new ticketed model for 
learning--unlearning wherein the learning algorithm can send back 
additional information in the form of a small-sized (encrypted) 
``ticket'' to each participating training example, in addition to retaining 
a small amount of ``central'' information for later. Subsequently, the 
examples that wish to be unlearnt present their tickets to the 
unlearning algorithm, which additionally uses the central information to 
return a new predictor. We provide space-efficient ticketed learning--unlearning 
schemes for a broad family of concept classes, including thresholds, 
parities, intersection-closed classes, among others. En route, we 
introduce the count-to-zero problem, where during unlearning, the goal is
to simply know if there are any examples that survived. We give a ticketed 
learning--unlearning scheme for this problem that relies on the construction of 
Sperner families with certain properties, which might be of independent 
interest.
<br><br>
Joint work with Badih Ghazi, Pritish Kamath, Ravi Kumar, Pasin Manurangsi, and Chiyuan Zhang.

<br><br>
<b>Brief Bio:</b>  Ayush is a postdoc researcher working with Prof. Sasha Rakhlin at MIT. He completed his Ph.D. from the Computer Science department at Cornell University, advised by Professor Karthik Sridharan and Professor Robert D. Kleinberg. His research interests span stochastic optimization, reinforcement learning, and machine unlearning. Before his Ph.D., he spent a year at Google as a part of the inaugural Brain residency program. Before Google, he completed his undergraduate studies in computer science at IIT Kanpur in India where he was awarded the President's Gold medal. Ayush has also been a winner of a student best paper award at COLT 2019.