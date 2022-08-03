+++
title = "Public Randomness Extraction with Ephemeral Roles and Worst-Case Corruptions"
author = "Joao Ribeiro (CMU)"
author_link = "https://sites.google.com/site/joaorib94/"
author_image = "assets/authorImages/joao.png"
date = "2022-08-11T18:00:00+05:30"
date_end = "2022-08-11T19:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> We distill a simple information-theoretic model for randomness extraction motivated by the task of
generating publicly verifiable randomness in blockchain settings and which is closely related to You-Only-Speak-Once
(YOSO) protocols (CRYPTO 2021). With the goal of avoiding denial-of-service attacks, parties speak only once and in
sequence by broadcasting a public value and forwarding secret values to future parties. Additionally, an unbounded
adversary can corrupt any chosen subset of at most t parties. In contrast, existing YOSO protocols only handle random
corruptions. As a notable example, considering worst-case corruptions allows us to reduce trust in the role assignment
mechanism, which is assumed to be perfectly random in YOSO. We study the maximum corruption threshold t which allows
for unconditional randomness extraction in our model:
<br><br>
– With respect to feasibility, we give protocols for t corruptions and n = 6t + 1 or n = 5t parties depending on
whether the adversary learns secret values forwarded to corrupted parties immediately once they are sent or only
once the corrupted party is executed, respectively. Both settings are motivated by practical implementations of secret
value forwarding. To design such protocols, we go beyond the committee-based approach that is sufficient for random
corruptions in YOSO but turns out to be sub-optimal for chosen corruptions.
<br><br>
– To complement our protocols, we show that low-error randomness extraction is impossible with corruption threshold t
and n ≤ 4t parties in both settings above. This also provides a separation between chosen and random corruptions, since
the latter allows for randomness extraction with close to n/2 random corruptions.
<br><br>
Based on joint work with Jesper Buus Nielsen and Maciej Obremski.