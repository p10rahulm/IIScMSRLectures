+++
title = "Making Quantum Query Algorithms Robust to a Faulty Oracle"
author = "Manaaswi Parashar (University of Copenhagen)"
author_link = "https://sites.google.com/view/manaswi-paraashar/home"
author_image = "assets/authorImages/manaswiParaashar.jpg"
date = "2024-10-23T16:00:00+05:30"
date_end = "2024-10-23T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=KEowrXH6DBo"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Understanding and mitigating noise is one of the most important challenges in quantum computing today, and the quantum 
query model is one of the most natural models of computation for studying the effects of noise. Almost all provable 
advantages of quantum algorithms over classical ones are in this model, for example, Grover's algorithm for the search 
problem ([Gro96]) and Shor's algorithm for the period-finding problem ([Sho99]). Also, due to its simplicity, this
model is also naturally connected to many other areas of quantum computing.
<br><br>
In this talk, we investigate the impact of noise in the quantum query model. We focus on the scenario where the oracle 
is subject to non-unitary (or irreversible) noise, specifically under the faulty oracle model, where the oracle fails 
with a constant probability and acts as identity. Regev and Schiff (ICALP’08) showed that quantum advantage is lost for 
the search problem under this noise model. Our main result shows that every quantum query algorithm can be made robust 
in this noise model with a roughly quadratic blow-up in query complexity, thereby preserving quantum speedup for all 
problems where the quantum advantage is super-cubic. This is the first non-trivial robustification of quantum query 
algorithms against an oracle that is noisy.
<br><br>
This talk is based on a joint work with David Rasmussen Lolck and Laura Mančinska.