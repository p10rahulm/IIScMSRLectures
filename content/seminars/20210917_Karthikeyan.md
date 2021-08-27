+++
title = "Efficient Intervention Design for Learning Causal DAGs"
author = "Karthikeyan Shanmugam (IBM Research AI Group)"
author_link = "https://sites.google.com/a/utexas.edu/karthiksh/"
author_image = "assets/authorImages/karthikeyan.jpg"
date = "2021-09-17T16:00:00+05:30"
date_end = "2021-09-17T17:00:00+05:30"
location = "Microsoft Teams Meeting"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Network of cause effect relationships between measured variables is modeled as a causal DAG (Directed Acyclic Graph).
In this talk, we focus on efficient adaptive intervention design for learning a causal DAG, with no latent confounders,
given the observational equivalence class it belongs to as an input. We first consider equivalence class inputs whose
skeleton is a tree. We consider a Bayesian framework where a prior over all directed trees is updated based on the
outcome of every single node intervention each of which is adaptively designed based on current posterior. We provide
an efficient algorithm that requires interventions that is within a factor of 2 from the best adaptive algorithm. We
also show that information greedy approaches are exponentially sub-optimal in terms of the optimal number of
interventions required. The main technical tool is a simple greedy algorithm that myopically optimizes a
centrality measure on the skeleton of the true causal tree.
<br><br>
We generalize and extend the above approach for adaptive interventional design to learn an arbitrary causal DAGs
given its equivalence class. We show that the half the maximum clique size is an instance specific fundamental
lower bound for any algorithm to even verify the DAG structure through interventions given the equivalence class.
Under mild assumptions on the equivalence class, we provide an adaptive algorithm inspired by the algorithm on causal
trees that requires interventions that matches the optimal number of interventions up to a multiplicative logarithmic
factor in the number of maximal cliques.
