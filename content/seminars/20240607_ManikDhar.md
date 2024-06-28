+++
title = "List decoding and Higher Order MDS codes"
author = "Manik Dhar (MIT)"
author_link = "https://dharmanik.github.io/"
author_image = "assets/authorImages/manikDhar.png"
date = "2024-06-07T11:00:00+05:30"
date_end = "2024-06-07T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=OgjaM-p5NpU"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++
<b>Abstract:</b>

A [n,k] code C is a k-dimensional subspace in F_q^n. C is said to be MDS (maximal distance separable) if its hamming
weight is n-k+1 which is the largest possible by the singleton bound. It is also equivalent to saying that every k minor
of the generator matrix of C is invertible. This can be rewritten as saying that any two subspaces formed by the columns
of the generator matrix of C intersect as minimally as possible.

Brakensiek, Gopi, and Makam generalize this notion to introduce MDS(l) codes where we ask that any l subspace formed by
the columns of the generator matrix of C intersect as minimally as possible. In a series of works, they show their new
notion is equivalent to an alternative notion of higher-order MDS codes introduced by Roth related to list decoding. In
particular, the parity check matrix of a code being MDS(l) is equivalent to having (average-case) combinatorial list
decoding guarantees. They also show that being MDS(l) is equivalent to the generator matrix being able to achieve
generic zero patterns. Using the GM-MDS theorem which says that generic Reed-Solomon codes achieve any generic zero
pattern this implies that they generically achieve list decoding capacity.

Guo-Zhang proved punctured Reed-Solomon codes can achieve list decoding capacity over quadratic in 'n' size fields by
introducing a slack to these notions (this was later strengthened to linear by an improved argument due to Alrabiah,
Guruswami, and Li). This talk will cover these exciting developments and recent works by the speaker with Brakensiek,
Gopi, and Zhang which develop this theory over codes sampled from irreducible varieties, prove a GM-MDS theorem for this
setting, and prove that punctured AG codes are list decodable up to capacity over constant size fields.