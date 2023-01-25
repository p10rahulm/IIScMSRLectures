+++
title = "Probabilistic Hash Functions and Hash Tables: A New Paradigm for Efficient AI Training and Inference"
author = "Anshumali Shrivastava (Rice University)"
author_link = "https://www.cs.rice.edu/~as143/"
author_image = "assets/authorImages/AnshumaliShrivastava.png"
date = "2023-01-05T16:00:00+05:30"
date_end = "2023-01-05T17:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=RXbFkb8qniY"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
Neural Scaling Law informally states that an increase in model size and data automatically improves AI. However, we
have reached a point where the growth has reached a tipping end where the cost and energy associated with AI are
becoming prohibitive.

This talk will demonstrate the algorithmic progress that can exponentially reduce the compute and memory cost of
training and inference with neural networks. We will show how data structures can fundamentally break the barriers
of some of the classical adaptive sampling subroutines. In particular, randomized hash tables can be used to design
an efficient "associative memory" that reduces the number of multiplications associated with the training of the
neural networks. Implementation of this algorithm challenges the common knowledge prevailing in the community that
specialized processors like GPUs are significantly superior to CPUs for training large neural networks. The resulting
algorithm is orders of magnitude cheaper and energy-efficient. Our careful implementations can train billions of
parameter recommendations and NLP models on commodity desktop CPUs significantly faster than top-of-the-line
TensorFlow alternatives on the most potent A100 GPU clusters, with the same or better accuracies. The same
idea can also result in more than 50x faster and cheaper inference.

In the end, I will highlight a cache-friendly compression scheme that can compress embedding models by 10000x
(100GB Embedding Table to 10MB) and still achieves the MLPerf benchmark AUC of 0.8025 on the Terabyte click-through
Criteo data, getting 3x inference speedup for free.