# Javascript-Quiz

## Deployed Application
https://cglennon924.github.io/Javascript-Quiz/

## User Story
```
AS A sports fan
I WANT a way to test my knowledge on sports
SO THAT I can see how much I really know
```
## Description
In this assingment I was required to build a slideshow quiz asking the user an array of questions and telling them if they were right or wrong. I thought it would be best to have two HTML's ( one for the actual quiz itself, and one for the leaderboard page), two JS' (same thing), and then one general CSS for the overall styling. I did use a good bit of bootstrap to make it easier on the background presentation.

On the quiz presentaion you will notice a togglebar at the top with the option to view the Leaderboard and see who has the current highscore. Once the user presses the start button, the quiz will begin and so will the 60 second timer. I made an array of questions (as seen in my quiz.js file) to sort out the various options and have a newQuestion function with the correct answer if selected right/wrong. 

For each wrong answer, time is subtracted as well. In the end when time is up, the user's score will be presented and then you can see where you score places amongst others. 
