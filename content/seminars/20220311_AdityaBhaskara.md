+++
title = "Online Learning with Hints"
author = "Aditya Bhaskara (University of Utah)"
author_link = "https://www.cs.utah.edu/~bhaskara/"
author_image = "assets/authorImages/AdityaBhaskara.jpg"
date = "2022-03-11T10:30:00+05:30"
date_end = "2022-03-11T11:30:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=jUhuAr1FksI"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> We consider the online learning problem, where at every step the algorithm makes a decision x_t and
incurs a loss given by a loss function $\ell_t$, which is then revealed to the algorithm. The goal is to achieve low
regret, which is defined as the difference between the cumulative loss of the algorithm, and the total loss of the best
fixed decision in hindsight. Classical results in the area show that a sublinear regret can be achieved for a wide
class of loss functions.
<br><br>
I will talk about a line of recent work in which we assume that the learner has access to a "hint" about the loss
function at every step. For instance, in the setting of online linear optimization where $\ell_t(x)$ is simply the
inner product $\langle c_t, x\rangle$ for some cost vector $c_t$, a hint can correspond to a vector that is
"mildly correlated" with $c_t$. In such settings, we show that one can significantly improve upon known regret bounds.
We show that our algorithms can deal with hints occasionally being "bad" (uncorrelated or misleading), and also work in
settings where we can only ask for hints in a small number of time steps.
<br><br>
Most of the talk is joint work with Ashok Cutkosky (Boston University), Ravi Kumar and Manish Purohit (Google Research).
