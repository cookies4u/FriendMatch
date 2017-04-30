// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/friends");

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friendsList", function(req, res) { // displaying the object from friends.js
    res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friendsList", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

    
    // need to compare just submitted req.boody to tableData
    console.log(req.body);
    var submittedUser = req.body.scores;

    var userDif = [100];
    var highestIndex;

    //for (var i = 0; i < tableData.length; i++) {
    for (i in tableData) {
      var tableScores = tableData[i].scores;
      var userTotal = 0;
      for (j in tableScores) {
      //for (var j = 0; j < tableScores.length; j++) {
        userTotal += Math.abs(tableScores[j] - submittedUser[j]);
      }

      if (userTotal < userDif[0]) {
        userDif[0] = userTotal;
        console.log(userDif[0]);
        highestIndex = i;
        console.log(highestIndex);
      }

    }
    

      tableData.push(req.body); // adding data to object in friends.js //req.body is the data that is being submitted
      
      // pass back object of match
      res.json(tableData[highestIndex]);
      //res.json(tableData[0]); // what is in the table
      //res.json(req.body); // what the user just entered
      //res.json(req.body.scores); // what the user just entered scores
      //res.json(highestIndex);
 
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];

    console.log(tableData);
  });

};
