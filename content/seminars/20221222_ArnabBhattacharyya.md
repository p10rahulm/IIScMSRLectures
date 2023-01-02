+++
title = "Model Counting meets F0 Estimation"
author = "Arnab Bhattacharyya (NUS, Singapore)"
author_link = "https://www.comp.nus.edu.sg/~arnab/"
author_image = "assets/authorImages/arnab.png"
date = "2022-12-22T11:40:00+05:30"
date_end = "2022-12-22T12:40:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=GJoGW3Zvies"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Constraint satisfaction problems (CSP's) and data stream models are two powerful abstractions to capture a wide variety
of problems arising in different domains of computer science. Developments in the two communities have mostly occurred
independently and with little interaction between them. In this work, we seek to investigate whether bridging the
seeming communication gap between the two communities may pave the way to richer fundamental insights. To this end,
we focus on two foundational problems: model counting for CSP's and computation of zeroth frequency moments (F0) for
data streams.
<br><br>
Our investigations lead us to observe striking similarity in the core techniques employed in the algorithmic
frameworks that have evolved separately for model counting and F0 computation. We design a recipe for translation
of algorithms developed for F0 estimation to that of model counting, resulting in new algorithms for model counting.
We then observe that algorithms in the context of distributed streaming can be transformed to distributed algorithms
for model counting. We next turn our attention to viewing streaming from the lens of counting and show that framing
F0 estimation as a special case of #DNF counting allows us to obtain a general recipe for a rich class of streaming
problems, which had been subjected to case-specific analysis in prior works. In particular, our view yields a
state-of-the art algorithm for multidimensional range efficient F0 estimation with a simpler analysis.
<br><br>
Joint work with A. Pavan, N.V. Vinodchandran and Kuldeep S. Meel (random author ordering).
<br><br>
<b>Organizer's note:</b> Recognized as "Best of PODS" (2021), "ACM SIGMOD Research Highlight" (2022), and
"CACM Research Highlight" (2022).