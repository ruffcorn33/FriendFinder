# FriendFinder
A compatibility-based "FriendFinder" application -- in this case we are surveying prospects for the number two seat on a two-man deep-space mission.  The spacecraft, the SS Nosferatu II, has very close quarters so finding the right candidate is very important.  Nobody wants are repeat of the disaster on SS Nosferatu I.

### How it works

This app uses the **Express** framework to create a backend web-server and to handle routing.  We also use **Body-Parser** middleware to read and parse data from POST requests.  Body-Parser translates POST data into Json.

Our main file is `server.js`.  This is where the Express server is created and configured.  Server.js links to two javascript files that handle routing: `apiRoutes.js` and `htmlRoutes.js`.  apiRoutes handles GET and POST requests to the data in `friends.js`.  `htmlRoutes.js` has GET routes to serve up the home page (`home.html`) and the survey page (`survey.html`).

The data in friends.js is an array of objects.  Each object includes and array of scores for each of the survey questions.  Upon submitting user answers to these questions, the POST route in apiRoutes.js calculates the difference between the user's answers to each question and each candidate in the friends array.  The entry with the lowest total diff is the best candidate.  This person is displayed in a modal and the user data is stored to the array.  