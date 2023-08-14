+++
title = "Differential Privacy in Multi-armed Bandits"
author = "Sayak Ray Chowdhury (Microsoft Research, Bangalore)"
author_link = "https://scholar.google.com/citations?user=Q0_CaxYAAAAJ&hl=en"
author_image = "assets/authorImages/sayakRayChowdhury.jpeg"
date = "2023-08-18T11:00:00+05:30"
date_end = "2023-08-18T12:00:00+05:30"
location = "Offline talk at CSA Seminar Hall (Room 254)"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Differential privacy (DP) has been recently introduced to multi-armed bandits to formally address the privacy concerns in its associated personalized services to participating users (e.g., recommendations). Prior work largely focusses on two trust models of DP – the central model, where a central server is responsible for protecting users sensitive data, and the (stronger) local model, where information needs to be protected directly on users side. However, there remains a fundamental gap in the utility achieved by learning algorithms under these two privacy models – the regret suffer in the local model is higher than that in the weaker central model.
<br><br>
In this talk, we will focus on a stronger model of trust than the central model, while suffering a smaller regret than the local model by considering recently popular shuffle and distributed model of privacy. We will demonstrate this privacy-regret trade-off for both K-armed bandit problem and linear contextual bandit problem.
<br><br>
Based on joint work with Xingyu Zhou (Asst. Prof. at Wayne State University, USA).