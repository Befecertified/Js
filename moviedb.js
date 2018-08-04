//declare the movie db
var movies = [
    {
        title: "Game of thrones", 
        rating: 5, 
        hasWatched: true
    },
    {
        title: "Into the badlands", 
        rating: 4, 
        hasWatched: true
    },
    {
        title: "Power", 
        rating: 4.5, 
        hasWatched: true
    },
    {
        title: "Supergirl", 
        rating: 3, 
        hasWatched: false
    }
];

//Iterate through the movie db
movies.forEach(function(movie){
	var watch = "seen";
	if(movie.hasWatched === false){
	    watch = "not seen";
    }
    var result = "You have " + watch + " " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
	console.log(result);
});