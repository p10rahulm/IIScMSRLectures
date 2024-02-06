+++
title = "Parallel Repetition of k-Player Projection Games"
author = "Amey Bhangale (UC, Riverside)"
author_link = "https://sites.google.com/view/amey-bhangale/home"
author_image = "assets/authorImages/AmeyBhangale.jpg"
date = "2024-01-18T17:00:00+05:30"
date_end = "2024-01-18T18:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=TBI-rNluCsc"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
In a k-player game, k>=2, a verifier sends k questions according to a fixed distribution to k provers. The provers, 
without communicating with each other, respond with their answers. The verifier then decides, based on the 
question-tuple and the received answer-tuple, whether to accept or reject. The value of the game is the maximum, 
over the provers' strategies, the accepting probability of the verifier.
<br><br>
In a n-fold parallel repetition of the game, the verifier samples n independent question-tuples and sends the 
respective questions to the provers. The provers again respond with answers to every question they receive. The 
verifier accepts iff all the n question-tuples and answer-tuples are accepted by the verifier in a single round game.
<br><br>
Certainly, if the value of a game is 1, then the value of the n-fold parallel repetition of the game is also 1. 
One important question is: How does the value of the n-fold parallel repetition of a game decay, if the value of 
the game is <1 to begin with?
<br><br>
While we know the answer to this question for 2-player games, the situation in the k-player games is far from being 
resolved. In this talk, I will discuss k-player projection games, which is a generalization of 2-player projection 
games. We show that if the value of a k-player projection game is <1, then the n-fold parallel repetition of the 
game has value at most exp(-\Omega(n)).
<br><br>
Based on a joint work with Mark Braverman, Subhash Khot, Yang P. Liu, and Dor Minzer.
