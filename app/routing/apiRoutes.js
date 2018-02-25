// LOAD DATA
//==============================================================
var friends = require('../data/friends');

// ROUTING
// =============================================================
module.exports = function(app){
  // API GET request
  app.get('/api/survey', function(req,res){
    res.json(friends)
  });

  // API POST request
  // handles survey form data after submit
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    friends.push(req.body);
  });

}
 