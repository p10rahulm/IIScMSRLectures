+++
title = "A PTAS for Unsplittable Flow on a Path"
author = "Tobias Mömke (University of Augsburg)"
author_link = "https://www.uni-augsburg.de/en/fakultaet/fai/informatik/prof/raa/team/tm/"
author_image = "assets/authorImages/tobiasMomke.png"
date = "2023-05-04T11:00:00+05:30"
date_end = "2023-05-04T12:00:00+05:30"
location = "Online Talk on MS Teams"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
In the Unsplittable Flow on a Path problem (UFP) we are given a path
with edge capacities, and a set of tasks where each task is
characterized by a subpath, a demand, and a weight. The goal is to
select a subset of tasks of maximum total weight such that the total
demand of the selected tasks using each edge e is at most the capacity
of e.  The problem admits a QPTAS [Bansal, Chakrabarti, Epstein,
Schieber, STOC'06; Batra, Garg, Kumar, Mömke, Wiese, SODA'15]. After a
long sequence of improvements [Bansal, Friggstad, Khandekar,
Salavatipour, SODA'09; Bonsma, Schulz, Wiese, FOCS'11; Anagnostopoulos,
Grandoni, Leonardi, Wiese, SODA'14; Grandoni, Mömke, Wiese, Zhou,
STOC'18], the best known polynomial time approximation algorithm for UFP
has an approximation ratio of 1+1/(e+1) +  epsilon < 1.269 [Grandoni,
Mömke, Wiese, SODA'22]. It has been an open question whether this
problem admits a PTAS.  We solve this open question and
present a polynomial time (1 + epsilon)-approximation algorithm for UFP.
