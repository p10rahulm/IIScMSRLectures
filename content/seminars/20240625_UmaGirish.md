+++
title = "Fourier Growth for Communication Protocols for XOR functions"
author = "Uma Girish (Princeton)"
author_link = "https://www.cs.princeton.edu/~ugirish/"
author_image = "assets/authorImages/umaGirish.png"
date = "2024-06-25T11:00:00+05:30"
date_end = "2024-06-25T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=KPoLtE9UkUw"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Fourier growth of a Boolean function refers to the growth of the sum of absolute values of the level-k Fourier
coeﬀicients. Upper bounds on the Fourier growth, even for the first few levels, have important applications in
pseudorandomness, learning theory, circuit lower bounds and quantum-versus-classical separations. We study the Fourier
growth of functions associated with communication protocols, namely XOR functions. In this setting, Alice gets a
bitstring x and Bob gets a bitstring y, and together they wish to compute a Boolean function that only depends on x+y 
(the point-wise Alice's and Bob's inputs). If a protocol C computes an XOR function, then the output C(x,y) of the
protocol is a function of x + y. This motivates us to study the XOR-fiber H of a communication protocol C defined by 
$H(z) := E[ C(x,y) \mid x + y = z]$.
<br><br>
In this talk, we present improved Fourier growth bounds for the XOR-fibers of randomized communication protocols that
communicate at most d bits. For the first level, we show a tight O(sqrt{d}) bound. For the second level, we show an
improved O(d^{3/2}) bound. We conjecture that the optimal bound is O(d.polylog(n)) and this is an open question. Our
proof relies on viewing the protocol and its Fourier spectrum as a martingale. One crucial ingredient we use to control
the step sizes of the martingale is a spectral notion of k-wise independence. We also provide a way of adaptively
partitioning a large set into a few spectrally k-wise independent sets.
<br><br>
This is based on a joint work with Makrand Sinha, Avishay Tal and Kewen Wu.