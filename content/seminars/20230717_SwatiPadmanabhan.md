+++
title = "Online Bidding Algorithms for Return-on-Spend Constrained Advertisers"
author = "Swati Padmanabhan (MIT)"
author_link = "https://homes.cs.washington.edu/~pswati/"
author_image = "assets/authorImages/swatiPadmanabhan.png"
date = "2023-07-17T11:00:00+05:30"
date_end = "2023-07-17T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "#"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Online advertising has recently grown into a highly competitive and complex multi-billion-dollar industry, with 
advertisers bidding for ad slots at large scales and high frequencies. This has resulted in a growing need for 
efficient "auto-bidding" algorithms that determine the bids for incoming queries to maximize advertisers' targets 
subject to their specified constraints. This work explores efficient online algorithms for a single value-maximizing 
advertiser under an increasingly popular constraint: Return-on-Spend (RoS). We quantify efficiency in terms of regret 
relative to the optimal algorithm, which knows all queries a priori.
<br><br>
We contribute a simple online algorithm that achieves near-optimal regret in expectation while always respecting the 
specified RoS constraint when the input sequence of queries are i.i.d. samples from some distribution. We also 
integrate our results with the previous work of Balseiro, Lu, and Mirrokni [BLM20] to achieve near-optimal regret 
while respecting both RoS and fixed budget constraints.
Our algorithm follows the primal-dual framework and uses online mirror descent (OMD) for the dual updates. 
However, we need to use a non-canonical setup of OMD, and therefore the classic low-regret guarantee of OMD, 
which is for the adversarial setting in online learning, no longer holds. Nonetheless, in our case and more 
generally where low-regret dynamics are applied in algorithm design, the gradients encountered by OMD can be 
far from adversarial but influenced by our algorithmic choices. We utilize this key insight to show our OMD 
setup achieves low regret in the realm of our algorithm.
<br><br>
Joint work with Di Wang (Google Market Algorithms, Mountainview) and Zhe Feng (Google Market Algorithms, 
Mountainview). Work done as a student researcher with Google in March - August 2022 and published at TheWebConf 
2023. The paper is available at https://arxiv.org/abs/2208.13713

