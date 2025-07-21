+++
title = "Preference Learning from Human Response Time"
author = "Ayush Sawarni (Stanford University)"
author_link = "https://sawarniayush.github.io"
author_image = "assets/authorImages/AyushSawarni.jpeg"
date = "2025-06-27T11:00:00+05:30"
date_end = "2025-06-27T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://youtu.be/wiPLQZZORlk"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
In this talk, I will present our recent work on enhancing human preference learning by utilizing response-time information—--an implicit signal that reveals the strength of a user’s choice. Under the EZ diffusion model, we model learning the reward function from binary preferences and response times with a Neyman-orthogonal loss function. While using the standard preference learning approaches results in exponential scaling of errors (with reward magnitude), incorporating response time with our approach reduces this to a polynomial scaling. We provide finite-sample guarantees in rich nonparametric function spaces (including RKHS). 
<br><br>
We validate our theory across three experimental settings- synthetic linear rewards, random neural-network rewards, and a semi-synthetic text-to-image preference task -- and observe improved sample efficiency. I’ll conclude by discussing some techniques from semi-parametric statistics used in our proofs, which may be broadly applicable beyond preference learning.
<br><br> 
Paper:- <a href="https://arxiv.org/abs/2505.22820" target="_blank">https://arxiv.org/abs/2505.22820</a>.
