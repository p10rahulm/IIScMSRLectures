+++
title = "Contextual Preference-Bandits: Learning to make customized user predictions through preference elicitation"
author = "Aadirupa Saha (Apple ML Research)"
author_link = "https://aadirupa.github.io/"
author_image = "assets/authorImages/aadirupaSaha.jpg"
date = "2023-10-06T11:00:00+05:30"
date_end = "2023-10-06T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://youtu.be/q92sEd1uCmc"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Customer statistics collected in several real-world systems have reflected that users often prefer eliciting their 
liking for a given pair of items, say (A,B), in terms of relative queries like: "Do you prefer Item A over B?", 
rather than their absolute counterparts: ``How much do you score items A and B on a scale of [0-10]?". Drawing 
inspirations, in the search for a more effective feedback collection mechanism, led to the famous formulation 
of Dueling Bandits (DB), which is a widely studied online learning framework for efficient information 
aggregation from relative/comparative feedback. However despite the novel objective, unfortunately, most 
of the existing DB techniques were limited only to simpler settings of finite decision spaces, and stochastic 
environments, which are unrealistic in practice.
<br><br>
In this talk, we will start with the basic problem formulations for DB and familiarize ourselves with some 
of the breakthrough results. Following this, will dive deep into a more practical framework of contextual 
dueling bandits (C-DB) where the goal of the learner is to make customized predictions based on the user 
contexts:  We will see a new algorithmic approach that can efficiently achieve the optimal O(\sqrt T) 
regret pe   rformance for this problem, resolving an open problem from Dudík et al. [COLT, 2015]. We will 
conclude the talk with some interesting open problems.