+++
title = "Learning linear thresholds from label proportions"
author = "Rishi Saket (Google Research, India)"
author_link = "https://research.google/people/107857/"
author_image = "assets/authorImages/rishiSaket.jpeg"
date = "2023-06-16T11:00:00+05:30"
date_end = "2023-06-16T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=HRuWNYmYNow"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b> 

In many ML applications, training labels are not available for individual feature-vectors. Instead, the feature-vectors 
are grouped into sets or "bags" and we are given only the sum or the average of the labels in each bag. This is called 
"Learning from Label Proportions" (LLP) which is a direct generalization of traditional supervised learning.
In this talk we shall motivate and formally define the LLP problem and provide the first study of computational 
learnability in the LLP setting, specifically of linear threshold functions (halfspaces). It is easy to see that 
linear programming no longer works as in the fully supervised setting. Indeed, we show that even in the realizable 
case with bags of size at most q, it is NP-hard to find a halfspace "satisfying" more than (1/q + o(1))-fraction of 
the bags. In particular, the problem is intractable even with bags of size at most 2. On the algorithmic side, we 
give a semi-definite programming based 2/5 approximation for bags of size 2. We also provide a 1/12 approximation for 
bags of size at most 3 -- using a more involved SDP and novel linear algebraic tools -- along with weaker guarantees 
for larger bags.
<br><br>
Based on two papers by the speaker which appeared in NeurIPS'21 and NeurIPS'22.