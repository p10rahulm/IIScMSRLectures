+++
title = "What does PAC-learning have to say about adversarial robustness?"
author = "Vinayak Pathak"
author_link = "https://cs.uwaterloo.ca/~vpathak/"
author_image = "assets/authorImages/vinayakPathak.png"
date = "2024-08-19T17:00:00+05:30"
date_end = "2024-08-19T18:00:00+05:30"
location = "YouTube Video Link Not Available"
location_link = "#"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family and the <a href = "https://www.csa.iisc.ac.in/cfe-walmart/" target= "_blank">Walmart Center for Tech Excellence</a> for generously supporting this seminar series."
+++

<b>Abstract:</b>
Modern neural network architectures have achieved great success on various learning tasks, but they are almost always 
prone to adversarial attacks. These attacks are small, undetectable perturbations of the input that lead the model 
to change its output. The widespread existence of adversarial attacks is both a security concern, as well as an 
indication that these models aren't learning the ground truth (since the true label does not change when input is 
perturbed by a small amount). 
<br><br>
PAC-learning is a theoretical framework that has been used to study learning problems for decades. Several recent 
papers have analyzed under this framework the question of learning in a way that's immune to adversarial attacks. 
This investigation has led to several interesting results; however, many practical phenomena still remain unexplained. 
In this talk I will provide a brief introduction to PAC-learning and discuss a few approaches to formulating the 
problem of adversarially robust learning under this framework. I will survey some recent papers and discuss open 
questions.