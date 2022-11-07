+++
title = "The number of leaves in a Boolean decision tree"
author = "Jaikumar Radhakrishnan (International Centre for Theoretical Sciences)"
author_link = "https://www.tcs.tifr.res.in/~jaikumar/"
author_image = "assets/authorImages/jaikumarRadhakrishnan.png"
date = "2022-11-04T11:00:00+05:30"
date_end = "2022-11-04T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=aOYTmA73Nkk"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
We consider computation of Boolean functions using decision trees, where at each internal node a variable is queried
and at the leaf the value of the function is declared. For a function $f:{0,1}^n -> {0,1}$, let DSize(f) be the minimum
number of leaves in a deterministic decision tree computing f exactly, and let RSize(f) be the minimum number of leaves
in a randomized decision tree computing f with error probability at most 1/3.  Note that DSize(f) and RSize(f) will
typically be exponential in the depth of the corresponding trees. We will show that (up to constants).
log DSize(f) <= log (RSIze(f))^4 (log n)^3
<br><br>
Our main result should be compared with the well-known analogous result for decision tree depth (Nisan 1991):
DDepth(f) <= RDepth(f)^3. In the standard proof of that result the notion of block sensitivity of a function played a
central role. Our arguments will be based on a counting version of this quantity that we call block number.
Using similar ideas, we will study decision trees where at each internal node, we branch based on the value of the
AND of a set of variables, instead of just one variable. We show that in this setting too the deterministic and the
randomized depth complexity of every function are related by a small degree polynomial. This result establishes a
conjecture of Knop, Lovett, McGuire and Yuan (2021). (We will not assume that the audience is familiar with previous
results on decision trees of Boolean functions.)
<br><br>
(The talk is based on joint work with Arkadev Chattopadhyay, Yogesh Dahiya, Nikhil Mande and Swagato Sanyal.)
<br><br>
<b>Organizer's Note</b>: This would be the 50th talk in our seminar series that began last year.