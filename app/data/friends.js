// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
	{
	  "name":"Archie Andrews",
	  "photo":"../public/assets/images/Archieandr.png",
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
	  "name":"Betty Cooper",
	  "photo":"../public/assets/images/Bettys.png",
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
	  "name":"Veronica Lodge",
	  "photo":"../public/assets/images/Veronicaldg.png",
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
	},
	{
	  "name":"Jughead Jones",
	  "photo":"../public/assets/images/Jugheadjns.png",
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
	},
	{
	  "name":"Reggie Mantle",
	  "photo":"../public/assets/images/Reggie_Mantle.png",
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
	},
	{
	  "name":"Moose Mason",
	  "photo":"../public/assets/images/Moosemsn.png",
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
	},
	{
	  "name":"Cheryl Blossom",
	  "photo":"../public/assets/images/Cherylblsm.png",
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
