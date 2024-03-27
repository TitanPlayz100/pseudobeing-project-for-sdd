# PseudoHuman

Multiplayer online game where there is a prompt given, and there are multiple answers all generated by ai. However, there is an imposter among the people who is actually a human, who will also answer the prompts in real time. The person guessing chooses the answer that they think the person made. This repeats with the roles swapped probably around 3 times. Whoever got picked the least loses.

Kind of inspired by the [Human Or Not](https://www.humanornot.ai) game.

Frontend NEXTjs hosted on [this page by vercel](https://pseudohuman-project.vercel.app) and using a supabase database. Backend websocket server hosted on [this server by render](https://pseudobeing-server.onrender.com).

LLM places
https://dashboard.cohere.com/api-keys
https://aistudio.google.com/app/apikey


# todo:
- [ ] stop copy paste ai answer as own answer
- [ ] add ability to create custom rooms for 2 people to join and play many times
- [ ] add anon accounts
- [ ] redesign front end
- [x] integrate the AI api into the app
- [ ] store the answers that both the user and ai provide in a long term database
- [ ] leaderboard, or show lifetime score

- [x] find a free or cheap ai api to use
- [x] find a free server host **https://render.com**
- [x] frontend hosting
- [x] handle when user disconnects
- [x] create ui for login
- [x] create ui for home screen
- [x] create ui for the start of game
- [x] create ui for playing the game
- [x] create ui for end of game
- [x] create login system
- [x] create matchmaking system
- [x] start a game when 2 people are available
- [x] create text prompts
- [x] get ai answers to question
- [x] get first players own answer to question, and then display ai and players answers to player 2
- [x] get player 2s answer and see if they were right or wrong
- [x] add the scores to a total
- [x] repeat this process multiple times
- [x] end the game after a player reaches 3 points, awarding that player a win
- [x] allow for multiple games to run at once

# Changelog
## 27/3
- redesigned entire backend to be better organised
- changed database providers to supabase as it is much faster and free
- changed the system to store running games on realtime database
- removed need fer vercel database by changing authentication to supabase and the custom server
- the connections between server and client now only send relevant information
    - doesnt share important info like answers anymore
- front end now does none of the computing (hopefully), all functions now in backend

## 11/3
- using google's gemini ai instead because cohere is 10/min while gemini is 60/min

## 4/3
- removed the storage of passwords
- fixed bug regarding signing in when username is null automatically by accident

## 3/3
- finally fixed username faking vulnerability by encrypting the username in the localStorage
- Also fixed answers from previous rounds showing up in other rounds
- Found a new LLM that is free and can replace chatGPT

## 9/1
- refactored game logic to fix odd connection issues and make it look cleaner
- also made disconnecting work properly

## 6/1
- fixed being able to navigate to pages you are not meant to go to
- fixed question not being displayed properly
- added lifetime score tracker in database
- ended games if someone disconnects

## 4/1
- changed login again to be run on nextjs servers instead of websockets
- changed the storage of users and passwords to be in a database instead of a file
    - database is hosted in vercel, which is also where the app is deployed

## 3/1
- finish gameplay loop
    - added infinite rounds until a player reaches 3 points
    - added a result screen every point
    - added game ending screen
    - when player reaches 3 points it ends the game
    - navbar now displays the points and players properly
- changed the login functions to be http requests rather than websockets

## 2/1
- seperated game functions into its own file for organisation
- made the passwords hashed and salted using a simple library, and limited usernames to 10 chars

## 1/1
- got the main gameplay to work except the resetting of rounds and points.

## 31/12
- added start game page and countdown to starting the game

## 30/12
- fixed many login system bugs, 
- made it more responsive by refactoring lots of client side components form server side components
- made matchmaking work

## 21/12
- made login system work on server and frontend

## 20/12
- able to get websockets working with an external server (hopefully will find a host for server soon)

## 19/12
- finished a mock ui for all the gameplay pages
    - made a prompt screen
    - selection screen
    - waiting screen
    - start and finish screen

## 18/12
- continue making mock ui to build backend on
    - made a login page
    - made a main menu

## 17/12
- Start work by creating initial nextjs files and getting main idea down

## ~5/12
- Have initial idea for sdd game project
