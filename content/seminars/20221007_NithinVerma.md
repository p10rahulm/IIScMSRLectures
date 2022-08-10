+++
title = "Improved sublinear algorithms for testing permutation freeness"
author = "Nithin Varma (Chennai Mathematical Institute)"
author_link = "https://www.cmi.ac.in/~nithinvarma/"
author_image = "assets/authorImages/nithinvarma.jpg"
date = "2022-10-07T16:00:00+05:30"
date_end = "2022-10-07T17:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Given a permutation pi of length k, an array A is pi-free if there are no k array values that, when considered from
left to right, have the same relative order as that of the permutation. For example, the array A has is (2,1)-free
if there are no two indices i < j such that A[i] > A[j] and the array is (1,3,2)-free if there are no three indices
i < j < k such that A[j] > A[k] > A[i]. In particular, the set of (2,1)-free arrays are simply the set of all sorted
arrays.
<br><br>
The problem of testing pi-freeness is to distinguish arrays that are pi-free from arrays that need to be modified in
at least a constant fraction of their values to be pi-free. This problem was first studied systematically by Newman,
Rabinovich, Rajendraprasad and Sohler (Random Structures and Algorithms; 2019), where they proved that for all
permutations pi of length at most 3, one can test for pi-freeness in polylog n many queries, where n is the array
length. For permutations of length k > 3, they described a simple testing algorithm that makes O(n^{1-1/k}) queries.
Most of the followup work has focused on improving the query complexity of testing pi-freeness for monotone pi.
<br><br>
In this talk, I will present a recent algorithm with query complexity O(n^{o(1)}) that tests pi-freeness for arbitrary
permutations of constant length, which significantly improves the state of the art. I will also give an overview of the
analysis that involves several combinatorial ideas.
<br><br>
Joint work with Ilan Newman