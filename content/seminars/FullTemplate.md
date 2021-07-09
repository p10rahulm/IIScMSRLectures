+++
title = "A 3-Approximation Algorithm for Maximum Independent Set of Rectangles"
author = "Arindam Khan (IISc Bengaluru)"
author_link = "https://www.csa.iisc.ac.in/~arindamkhan/"
author_image = "assets/authorImages/arindam.jpg"
date = "2021-08-20T11:00:00+05:30"
date_end = "2021-08-02T12:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> We study the Maximum Independent Set of Rectangles (MISR) problem, where we are given a set of
axis-parallel rectangles in the plane and the goal is to select a subset of non-overlapping rectangles of maximum
cardinality. In a recent breakthrough, Mitchell [2021] obtained the first constant-factor approximation algorithm for
MISR. His algorithm achieves an approximation ratio of 10 and it is based on a dynamic program that intuitively
recursively partitions the input plane into special polygons called corner-clipped rectangles, without intersecting
certain special horizontal line segments called fences.
<br><br>

In this work, we present a 3-approximation algorithm for MISR which is based on a similar recursive partitioning scheme.
First, we use a partition into a more general class of axis-parallel polygons with constant complexity each, which
allows us to provide an arguably simpler analysis and at the same time already improves the approximation ratio to 6.
Then, using a more elaborate charging scheme and a recursive partitioning into general axis-parallel polygons with
constant complexity, we improve our approximation ratio to 3. In particular, our partitioning uses more general fences
that can be sequences of up to O(1) line segments each. This and our other new ideas may be useful for future work
towards a PTAS for MISR.
