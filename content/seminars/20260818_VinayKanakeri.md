+++
title = "On Robustness and Sample-Efficiency for Data-Driven Control"
author = "Vinay Kanakeri (North Carolina State University)"
author_link = "https://scholar.google.com/citations?user=SC3RNXsAAAAJ&hl=en"
author_image = "assets/authorImages/vinayKanakeri.jpeg"
date = "2026-08-18T11:00:00+05:30"
date_end = "2026-08-18T12:00:00+05:30"
location = "CSA 104 (Auditorium)"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
The growing reliance on data to control unknown dynamical systems raises two central
questions: how do we ensure robustness to poor-quality data, and how do we use the available
data efficiently? This talk addresses both questions for linear time-invariant (LTI) systems.
<br><br>
On robustness, existing finite-sample guarantees for linear system identification hinge on the
process noise being Gaussian or sub-Gaussian. However, such assumptions can fail in practice
due to sensor glitches, environmental disturbances, or adversarial interference. We instead
assume only that the noise has a finite fourth moment, allowing for heavy tails. We introduce
Robust-SysID, an algorithm that partitions trajectories into buckets, computes a least-squares
estimate within each bucket, and boosts these weakly concentrated estimators via the
geometric median. We show that Robust-SysID nearly recovers the sample-complexity bounds
achievable under Gaussian noise, with the gap governed by the kurtosis of the noise
distribution, a natural measure of tail heaviness. We extend these guarantees to settings with
adversarially corrupted trajectories and to partially observed systems.
<br><br>
On sample-efficiency, we study personalized and collaborative policy optimization for a
collection of clustered LTI systems with quadratic costs, where the dynamics, task objectives,
and cluster memberships are all unknown and only zeroth-order cost feedback is available.
Since collaborating across dissimilar systems can destabilize the resulting policies, we design a
sequential-elimination clustering algorithm that lets agents safely identify and collaborate within
their cluster, yielding faster convergence and lower per-agent sample complexity without
incurring bias from system heterogeneity.
<br><br>
Together, these results take early steps toward a statistical learning theory for data-driven
control under realistic, non-ideal assumptions on the data-generating process.