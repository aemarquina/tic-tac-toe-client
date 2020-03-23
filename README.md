# Tic Tac Toe Project

## List technologies used

- HTML, jQuery, JavaScript, CSS

## Document your planning and tell a story about your development process and problem-solving strategy.

- I first started to by creating all the files that were necessary to be able to add my code. Once I did that, I started on my HTML as it served as the foundation of the page. I wanted to actually the changes that I was implementing into my code. Once I wrote the HTML I wrote quite a but of psuedocode for each page. I wrote a lot more psuedocode for the game logic and broke it down to very small pieces. I have found that when I do that, I do not get as overwhelmed and have a clear list that I can follow. Once I wrote my psuedocode, I went in order from HTML to App.js to events.js. I wrote the class that I was referencing in the click event. Once I wrote the class, I created a click event in app.js and defined that click function in events.js. I followed that pattern because I found that it was much more organized and left less room for error. Once I started coding my project, I obviously experienced roadblocks often, but everytime I did, I was able to google or reach out to a classmate when I was really confused about something. I think what made my experience a lot more pleasant was the planning. This was not something I experienced with the MBTA project parttially because I was unfamiliar with breaking down a problem to it studs.  


## List unsolved problems which would be fixed in future iterations.

- All of the messages that I implemented for a better user experience are not consistent. I would fix that by cleaning up my code a little more and making sure that their status changes once a condition is met.

## Link to wireframes and user stories.

User stories
... 1. As an unregistered user, I would like to be able to sign up
... 2. As a registered user, I would like to sign in 
... 3. As a registered user, I would like to change my password
... 4. As a registered user, I would like to play tic tac toe
... 5. As registered user who has played games, I would like to see my stats
... 6. As a registered user, I would like to start a new game.
... 7. As a registered user, I would like to be able to sign out
... 8. As a registered user, I would like to be able to win a game



[Wireframe](https://photos.app.goo.gl/)


## Navigating Files

- Index.html
  - This holds all the HTML and the layout of the page
- App.js
  - This holds all the click events in the project
- Events.js
  - This holds all of the game logic. The first click event holds the vast majority of all the game logic. This is where I put the values in each of the grid boxes as well as the programmatic representation which is an array named board. In this file you will also see the game winning logic to determine the winner. 
  - Here you will also find all the functions that are tied to the on click events for signing up, signing in, changing password, and signing out. 
  - There are also to special on click events that will restart the game for you and show you the players stats
- api.js
  - these are all my ajax call to communicate with the server.
- ui.js
  - These take all of my api calls and display messages on whether or not they fail or are successful

