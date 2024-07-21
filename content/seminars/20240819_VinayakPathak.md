+++
title = "What does PAC-learning have to say about adversarial robustness?"
author = "Vinayak Pathak"
author_link = "https://cs.uwaterloo.ca/~vpathak/"
author_image = "assets/authorImages/vinayakPathak.png"
date = "2024-08-19T17:00:00+05:30"
date_end = "2024-08-19T18:00:00+05:30"
location = "Offline talk at CSA 112, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
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