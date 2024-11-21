+++
title = "Studies in Decision-Making: Nearly-tight Approximation Guarantees for the Improving Multi-Armed Bandits Problem and Algorithmic Interventions for Escaping Pessimism Traps"
author = "Kavya Ravichandran (TTIC)"
author_link = "https://kavyar314.github.io/"
author_image = "assets/authorImages/kavyaRavichandran.png"
date = "2024-11-21T16:00:00+05:30"
date_end = "2024-11-21T17:00:00+05:30"
location = "Online talk on Microsoft Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
We study decision-making under uncertainty in two settings: first, we give nearly-tight upper and lower bounds for the improving multi-armed bandits problem. An instance of this problem has $k$ arms, each of whose reward function is a concave and increasing function of the number of times that arm has been pulled so far. We show that for any randomized online algorithm, there exists an instance on which it must suffer at least an $\Omega(\sqrt{k})$ approximation factor relative to the optimal reward. We then provide a randomized online algorithm that guarantees an $O(\sqrt{k})$ approximation factor, if it is told the maximum reward achievable by the optimal arm in advance. Finally, we show how to remove this assumption at the cost of an extra $O(\log k)$ approximation factor, achieving an overall $O(\sqrt{k} \log k)$ approximation relative to optimal. This work studies decision-making in the presence of structured rewards. Secondly, I will also talk about our work on escaping pessimism traps -- a phenomenon in which agents are influenced by their predecessors to engage in less-ambitious ends. We provide a mathematical formalism in which to study this concept that was first isolated by philosophers. Then, we provide an algorithmic intervention to sustainably shift communities out of these traps.
<br><br>
Based on joint work with Avrim Blum, Emily Diana, and Alexander Tolbert.