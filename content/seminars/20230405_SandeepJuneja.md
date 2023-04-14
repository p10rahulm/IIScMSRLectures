+++
title = "Sequential learning in a stochastic multi armed bandit framework"
author = "Sandeep Juneja (TIFR, Mumbai)"
author_link = "https://www.tcs.tifr.res.in/~sandeepj/"
author_image = "assets/authorImages/sandeepJuneja.png"
date = "2023-04-05T16:00:00+05:30"
date_end = "2023-04-05T18:30:00+05:30"
location = "Youtube Talk Link"
location_link = "https://www.youtube.com/watch?v=5ztag6JuIdI"
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
<br><br>
<b>Organizer's Note:</b> The talk is in two halves. The YouTube link above is for the first half of the talk.
You may view the second half of the talk at the 
<a href="https://www.youtube.com/watch?v=MOR_5hjKrAo" target="_blank">following link</a>.
