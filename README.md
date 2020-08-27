# 04_Code_Quiz

## What an interesting assignment. 

LINK to deployed app: https://nicschworer.github.io/04_Code_Quiz/

The assignment was to write the JS to accompany the given HTML & CSS and create working 5 questions coding quiz complete with "correct" or "wrong" notifications, right & wrong sounds, and an option to save your score to a scoreboard. In addition, you have to be timed while taking the quiz and you have to have the option to clear the high score board. 

In my version, a correct answer gets you 10 points, while a wrong answer loses you 10 seconds off the timer. You are alloted 10 seconds per question, so a total of 50 seconds to take the quiz, provided you don't get any wrong. 

With most of the pseudo code provided, I didn't have too hard of a time writing out all the JS. My biggest challenges were:
1. checking local storage for an object of high scores and then adding new high scores
2. getting the timer to clear once you hit 0 seconds or finish all questions (I realized eventually that I accidentially defined my timer variable twice, once in a function which meant I wasn't calling the correct variable later.)

Here are some snapshots of the app:
![Start Screen](
