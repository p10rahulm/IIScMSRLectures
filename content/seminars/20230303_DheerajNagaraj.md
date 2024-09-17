+++
title = "Utilizing the CLT Structure in Stochastic Approximations of Sampling Algorithms"
author = "Dheeraj Nagaraj (Google Research)"
author_link = "https://dheerajmn.mit.edu/"
author_image = "assets/authorImages/dheerajNagaraj.png"
date = "2023-03-03T11:00:00+05:30"
date_end = "2023-03-03T12:00:00+05:30"
location = "Youtube Talk Link"
location_link = "https://www.youtube.com/watch?v=kO-UlBFda1w"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b> We consider stochastic approximations of sampling algorithms like Langevin Monte Carlo and 
Interacting Particle Dynamics with random batches. These are heavily deployed in Bayesian inference, and the 
physical sciences. The noise induced by random batches is approximately Gaussian (due to the Central Limit Theorem) 
while the Brownian motion driving the algorithm is exactly Gaussian.
<br><br>
We utilize this structure to provide improved guarantees for sampling algorithms under significantly weaker assumptions. 
We also propose covariance correction, which rescales the brownian motion to approximately remove the random batch 
error. We show that covariance corrected algorithms enjoy even better convergence.
<br><br>
Joint work with: Aniket Das (Google) and Anant Raj (INRIA and UIUC)