+++
title = "PAC Bounds and Intractability for Learning from Label Proportions"
author = "Rishi Saket (Google Research, India)"
author_link = "https://research.google/people/107857/"
author_image = "assets/authorImages/rishiSaket.jpeg"
date = "2024-05-10T11:00:00+05:30"
date_end = "2024-05-10T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=htaqRQtcMXQ"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b> 
In Learning from label proportions (LLP) the goal is to train an instance-level classifier from training data which is 
available as sets or bags of feature-vectors (instances) along with the average instance-label of each bag. Previous 
works [Saket 21, 22] have shown algorithmic and hardness results for learning linear threshold functions (LTFs) from 
label proportions, which however are applicable in the worst case and do not rule out learning algorithms under 
distributional assumptions.
Our first work proves that LTFs can indeed be efficiently PAC learnt from label proportions of random bags whose 
feature-vectors (conditioned on the bag label proportion) are sampled from a Gaussian distribution. The key idea 
is to leverage the subtle shift in the distribution of differences between pairs of feature-vectors sampled with 
and without replacement from a random bag. The algorithm uses sub gaussian concentration to estimate a matrix 
capturing this difference and whose principal eigenvector we show recovers the normal vector of the target LTF.
Our second work focuses on the hardness of learning Boolean functions from label proportions. The first result 
shows that it is NP-hard to find a constant clause CNF which satisfies any constant-fraction of a collection of 
2-sized bags which are consistent with an OR function. Next, we prove the hardness of satisfying more than 
1/2 + o(1) fraction of such bags using a constant-width DNF, and lastly we show the NP-hardness of satisfying 
more than (q/2^{q-1} + o(1))-fraction of q-sized bags which are consistent with a parity using a parity, while a 
random parity based algorithm achieves a (1/2^{q-2})-approximation.
<br><br>
The talk is based on joint works with Anand Brahmbhatt and Aravindan Raguveer [NeurIPS'23] and with Venkatesan 
Guruswami [FSTTCS'23]