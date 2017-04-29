// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
	{
	  "name":"Ahmed",
	  "photo":"test1.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"ted",
	  "photo":"test2.jpg",
	  "scores":[
	      2,
	      3,
	      2,
	      2,
	      3,
	      3,
	      2,
	      3,
	      2,
	      5
	    ]
	},
	{
	  "name":"marge",
	  "photo":"test3.jpg",
	  "scores":[
	      1,
	      5,
	      1,
	      1,
	      5,
	      5,
	      1,
	      5,
	      1,
	      3
	    ]
	}


];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
