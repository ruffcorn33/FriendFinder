# FriendFinder
A compatibility-based "FriendFinder" application -- in this case we are surveying prospects for the number two seat on a two-man deep-space mission.  The spacecraft, the SS Nosferatu II, has very close quarters so finding the right candidate is very important.  Nobody wants are repeat of the disaster on SS Nosferatu I.

### How it works

This app uses the **Express** framework to create a backend web-server and to handle routing.  We also use **Body-Parser** middleware to read and parse data from post requests.  Body-Parser translates post data into Json.

Our main file is `server.js`.  This is where the Express server is created and configured.  Server.js   