+++
title = "Detecting Hidden Communities by Power Iterations with Connections to Vanilla Spectral Algorithms"
author = "Chandrasekhar Mukherjee (University of Southern California)"
author_link = "https://csmukherjee.github.io/home/"
author_image = "assets/authorImages/chandrasekharMukherjee.jpg"
date = "2023-11-17T11:00:00+05:30"
date_end = "2023-11-17T12:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=YBhBWCd_U-o"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b>
Community detection in the stochastic block model is one of the central problems of graph clustering. Since its
introduction by Holland, Laskey, and Leinhardt (Social Networks, 1983), many subsequent papers have made great strides 
in solving and understanding this model. However, despite the long history of study, there are still unsolved 
challenges. In this direction, two primary open problems are: how to recover large clusters in the presence of 
small clusters (we call it small cluster barrier), and how to analyze simple and practical spectral algorithms 
(we call them vanilla spectral algorithms), especially when the number of communities is large.
<br><br>
In this paper, we use a power iteration approach to make progress in both these directions.
<br><br>
We design the first parameter-free community recovery algorithm that recovers large clusters in the presence of 
small clusters.  Our algorithm only compares the rows of the powered adjacency matrix and has a recovery guarantee 
poly-logarithmically close to that of the state-of-the-art algorithms in this problem that require knowledge of 
model parameters.
<br><br>
Then based on a connection between the powered adjacency matrix and eigenvectors, we provide a ``vanilla'' spectral 
algorithm in the balanced case when the number of communities is large. This answers an open question by Van Vu 
(Combinatorics Probability and Computing, 2018) in the balanced case. Our methods also partially solve technical 
barriers discussed by Abbe, Fan, Wang, and Zhong (Annals of Statistics, 2020).
<br><br>
This talk is based on joint work with Jiapeng Zhang, and will appear in SODA 2024.
<br><br>
<b>Speaker Bio:</b>
Hi, I am Chandrasekhar, a third year PhD student in University of Southern California, working with Professor 
Jiapeng Zhang. I am currently exploring the areas of unsupervised learning, random matrix theory, and 
random graph theory. I am interested in understanding the fundamental limits of clustering in probabilistic models, 
as well as design practicable algorithms. Furthermore, I am very interested in generative modeling of real world 
datasets to gain further insights on them.
