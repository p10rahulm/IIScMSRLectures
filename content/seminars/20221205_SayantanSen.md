+++
title = "Exploring the Gap between Tolerant and Non-tolerant Distribution Testing"
author = "Sayantan Sen (Indian Statistical Institute)"
author_link = "https://sites.google.com/view/sayantans/home"
author_image = "assets/authorImages/sayantanSen.jpeg"
date = "2022-12-05T11:00:00+05:30"
date_end = "2022-12-05T12:00:00+05:30"
location = "Room No 254, CSA Building, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
The framework of distribution testing is currently ubiquitous in the field of property testing. In this model, the
input is a probability distribution accessible via independently drawn samples from an oracle. The testing task is
to distinguish a distribution that satisfies some property from a distribution that is far in some distance measure
from satisfying it. The task of tolerant testing imposes a further restriction, that distributions close to satisfying
the property are also accepted.
<br><br>
This work focuses on the connection between the sample complexities of non-tolerant testing of distributions and their
tolerant testing counterparts. When limiting our scope to label-invariant (symmetric) properties of distributions, we
prove that the gap is at most quadratic, ignoring poly-logarithmic factors. Conversely, the property of being the
uniform distribution is indeed known to have an almost-quadratic gap.
<br><br>
Moreover, we prove lower bounds on the sample complexities of non-tolerant as well as tolerant testing for a special
class of distribution properties, namely non-concentrated distribution properties, where the probability mass of the
distributions in the property is sufficiently spread out. Finally, we design an algorithm that can learn a concentrated
distribution even when its support set is unknown apriori.
<br><br>
This is a joint work with Sourav Chakraborty, Eldar Fischer, Arijit Ghosh and Gopinath Mishra.