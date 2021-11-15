+++
title = "Some Recent Advances in Dynamic Algorithms for Maximum Matching and Minimum Set Cover: Part 2"
author = "Sayan Bhattacharya (University of Warwick)"
author_link = "https://www.dcs.warwick.ac.uk/~u1671158/"
author_image = "assets/authorImages/sayan.jpg"
date = "2021-12-10T16:00:00+05:30"
date_end = "2021-12-10T17:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Consider a dynamic graph G = (V, E) that is undergoing a sequence of edge insertions/deletions. We want to design an
algorithm that maintains an (approximately) maximum matching in this dynamic graph G with small update time. Here,
the update time of an algorithm refers to the time it takes to handle the insertion/deletion of an edge in G. We will
like to ensure that the update time of our algorithm is polylogarithmic in the number of nodes G.
<br><br>
This problem has received considerable attention in the past decade. In these two talks, I will present an overview of
some recent advances on this question. Specifically, I will describe a simple primal-dual algorithm that maintains a
(2+\epsilon)-approximate "fractional" matching in G in polylogarithmic update time (Part 1), and show how to
efficiently "round" this fractional matching into an integral one in the dynamic setting (Part 2).
<br><br>
Along the way, I will explain some immediate connections between dynamic fractional matching algorithms and
the literature on dynamic set cover.