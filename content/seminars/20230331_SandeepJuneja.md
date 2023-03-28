+++
title = "Sequential learning in a stochastic multi armed bandit framework"
author = "Sandeep Juneja (TIFR, Mumbai)"
author_link = "https://www.tcs.tifr.res.in/~sandeepj/"
author_image = "assets/authorImages/sandeepJuneja.png"
date = "2023-03-31T11:00:00+05:30"
date_end = "2023-03-31T14:00:00+05:30"
location = "CSA Seminar Hall, Room 254, IISc Bangalore"
location_link = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGE3NDg5NzktMWQ0Zi00MzFmLTg5OTgtMTMyYWM4MWQyYjI2%40thread.v2/0?context=%7b%22Tid%22%3a%226f15cd97-f6a7-41e3-b2c5-ad4193976476%22%2c%22Oid%22%3a%227c84465e-c38b-4d7a-9a9d-ff0dfa3638b3%22%7d"
notes = "We are grateful to the <a href = "https://www.accel.com/people/shekhar-kirani" target= "_blank">Shekhar Kirani</a> family for generously supporting this seminar series."
+++

<b>Abstract:</b>
The classic stochastic multi armed bandit framework involves finitely many unknown probability distributions that 
can be sequentially sampled to generate independent rewards. In this talk we consider two foundational problems: 
First one corresponds to sampling to minimize the expected regret, or equivalently, to maximize the expected total 
reward. The second one corresponds to the best arm identification, i.e., identifying the arm with the largest mean, 
or any other performance measure, using as few samples as possible while providing explicit probabilistically correct 
selection guarantees. These problems form the bedrock of algorithms used in web design and advertising, recommendation 
systems, clinical trials and many other exciting applications. In this talk we review some of the popular algorithms 
used for these problems emphasizing the intuition underlying the elegant ideas. Technically speaking, these problems 
have been well studied under the restrictive assumption that arm distributions belong to a single parameter exponential 
family, that includes distributions such as Bernoulli and Gaussian with known variance. Under these settings, lower 
bounds on samples needed are developed using ideas from hypothesis testing, and algorithms are proposed that match 
the lower bound. We propose optimal algorithms that match the lower bounds even to a constant for general probability 
distributions under minimal restrictions. We further discuss how the proposed methodology leads to near optimal 
confidence intervals for distribution means. We discuss further enhancements in the presence of offline data that 
needs to be combined with online data. We further propose some new algorithms in the best arm identification setting 
that along with minimising sample complexity, are also computationally efficient. 

<b>Organizer's Note:</b> There are two sessions of 1 hour each, with a break of 1 hour in between for the lunch session.
