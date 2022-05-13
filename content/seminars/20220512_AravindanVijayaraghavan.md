+++
title = "Finding Adversarially Robust Representations"
author = "Aravindan Vijayaraghavan (Northwestern University)"
author_link = "http://users.eecs.northwestern.edu/~aravindv/"
author_image = "assets/authorImages/Aravindan.jpg"
date = "2022-05-12T21:00:00+05:30"
date_end = "2022-05-12T22:00:00+05:30"
location = "YouTube Video Link"
location_link = "https://www.youtube.com/watch?v=a8UQ3_igr9M"
notes = "Jointly organized by <a href = "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target= "_blank">Microsoft Research Lab - India</a> and <a href='https://www.csa.iisc.ac.in/theoretical-computer-science/' target= "_blank">Theoretical Computer Science @ IISc</a>"
+++

<b>Abstract:</b> Adversarial robustness measures the susceptibility of a machine learning algorithm to small
perturbations made to the input either at test time or at training time. Our current theoretical understanding of
adversarial robustness is limited, and has mostly focused on supervised learning tasks.
<br><br>
In this talk, I will consider a natural extension of Principal Component Analysis (PCA) where the goal is to find a low
dimensional subspace to represent the given data with minimum projection error, and that is in addition robust to small
perturbations. Unlike PCA which is solvable in polynomial time, this formulation is computationally intractable to
optimize as it generalizes a well-studied sparse PCA problem. I will describe an efficient algorithm that find
approximately optimal solutions and show how this can be used as a robust subroutine for many downstream learning
tasks, including training more certifiably robust neural networks.
<br><br>
Based on joint works with Pranjal Awasthi, Xue Chen, Vaggos Chatziafratis, Himanshu Jain and Ankit Singh Rawat.