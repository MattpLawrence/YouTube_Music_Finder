// fetch("https://kareoke.p.rapidapi.com/v1/song/search?q=Spotlight&limit=" + maxNumber, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "kareoke.p.rapidapi.com",
// 		"x-rapidapi-key": "4358a3ae45msh1ef514db96f084bp1426f0jsn143dce70b436"
// 	}
// })
fetch("https://kareoke.p.rapidapi.com/v1/song/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "kareoke.p.rapidapi.com",
		"x-rapidapi-key": "4358a3ae45msh1ef514db96f084bp1426f0jsn143dce70b436"
	}
})
.then(function (response) {
  if (!response.ok) {
    throw response.json();
  }
  console.log(response)
  return response.json();
})
.then(function (data){
  console.log(data);
  var randomID = data.youtube.id;
  console.log(data.youtube.id);

  
})
.catch(err => {
	console.error(err);
}); 