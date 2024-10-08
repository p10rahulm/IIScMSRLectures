+++
title = "Online and Bandit Algorithms Beyond ℓ_p Norms"
author = "Thomas Kesselheim (University of Bonn)"
author_link = "http://www.thomas-kesselheim.de/science/"
author_image = "assets/authorImages/thomasKesselheim.png"
date = "2023-04-28T16:00:00+05:30"
date_end = "2023-04-28T17:00:00+05:30"
location = "Youtube Talk Link"
location_link = "https://www.youtube.com/watch?v=P1y2aW6NycE"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Vector norms play a fundamental role in computer science and optimization, so there is an ongoing effort to generalize 
existing algorithms to settings beyond ℓ_∞ and ℓ_p norms. We show that many online and bandit applications for general 
norms admit good algorithms as long as the norm can be approximated by a function that is “gradient-stable”, a notion 
that we introduce. Roughly it says that the gradient of the function should not drastically decrease (multiplicatively) 
in any component as we increase the input vector. We prove that several families of norms, including all monotone 
symmetric norms, admit a gradient-stable approximation, giving us the first online and bandit algorithms for these 
norm families.
<br><br>
In particular, our notion of gradient-stability gives O(log^2(dimension))-competitive algorithms for the symmetric 
norm generalizations of Online Generalized Load Balancing and Bandits with Knapsacks. Our techniques extend to 
applications beyond symmetric norms as well, e.g., to Online Vector Scheduling and to Online Generalized Assignment 
with Convex Costs. Some key properties underlying our applications that are implied by gradient-stable approximations 
are a “smooth game inequality” and an approximate converse to Jensen’s inequality.
<br><br>
Joint work with Marco Molinaro and Sahil Singla
