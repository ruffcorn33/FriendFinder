// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// LOAD DATA
// link the routes to the data in the friends array
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var friends = require('../data/friends');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports = function(app){
  // API GET request displays a JSON of the friends array daty when the link is 
  // visited

  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  // API POST request
  // handles survey form data after submit.
  // by pushing a JSON object to the
  // friends array.  form data >> server >> array

  app.post("/api/friends", function(req, res) {
    var user = req.body;
    // console.log(user);
    // console.log(friends[0].scores.length);
    // should be {name, imgLink, diff}
    // initialize lowest diff to be greater max possible diff to allow for a 
    // perfect match (diff = 0)
    var bestMatch = {
      name: '',
      imgLink: '',
      lowestDiff: 50
    };

    // add the logic to find best match here
    // save user data to vars
    // loop through friends array
    for(f=0;f<friends.length;f++){
      // initialize diff between friends
      var diff = 0;
      console.log(friends[f].scores);
      console.log(user);

      // loop through the array of scores
      for(s=0;s<friends[f].scores.length;s++){
        // find absolute value of diff between user score and friend score
        // accumulate abs.diffs in total diff      
        console.log('friends score = '+friends[f].scores[s]);
        console.log(user);  
        diff += Math.abs(parseInt(friends[f].scores[s]) - parseInt(user.scores[s]));
        console.log(diff);
      } //end friend scores array

      // compare to diff in bestMatch object -- if this diff is lower, 
      // move to bestMatch

      console.log('diff = '+diff+', lowestDiff = '+bestMatch.lowestDiff);
      if(diff < bestMatch.lowestDiff){
        bestMatch.name = friends[i].name;
        bestMatch.imgLink = friends[i].photo;
        bestMatch.lowestDiff = diff;
      }
    } // end of friends array

    // at end return bestMatch
    res.json(bestMatch);

    // push user data last to avoid matching self
    friends.push(req.body);

  });  // end of POST

}
