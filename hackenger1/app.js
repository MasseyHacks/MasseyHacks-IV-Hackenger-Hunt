var app = require('express')();
var http = require('http').Server(app);
var started = true;
app.get("/", function(req,res){
	if (started){
		res.sendFile(__dirname + "/hello.html");
	} else{
		res.send("Hackenger will start on April 28th, 2018 as soon as the event starts!");
	}
});
app.get("/index.css", function(req,res){
	res.sendFile(__dirname + "/index.css");
});
app.get("/sweetalert2.all.js", function(req,res){
	res.sendFile(__dirname + "/sweetalert2.all.js");
});
app.get("/fonts/:f", function(req,res){
	res.sendFile(__dirname + "/fonts/" + req.params.f);
});
app.get("/denebu_arutairu_bega_kedo_kaku_wa_d_to_naru.gcode",function(req,res){
	res.sendFile(__dirname + "/denebu_arutairu_bega_kedo_kaku_wa_d_to_naru.gcode");
});
app.get("/lockerCombination.png",function(req,res){
	res.sendFile(__dirname + "/lockerCombination.png");										  
});
app.post("/pNBMRIb2nhYIfZ58VNW7jGewZD50WGr9iRKZpLRBSD7Xs3TbGF9Nab9ZC2Omx5mFKWuYxapgDm1UfLVJeSmeSj4kcIvzBH4ctm0Q/world", function(req,res){
	res.send("/W6Lemu1EZc8MFywhihJ6sfryZhBc1ICNEdROyHilJhXeFjjMoRGGWW3L1uNS0evthb7DIgMflzhQIqqU7XpUJitAA5io9DHeEFIa");
});
app.get("/W6Lemu1EZc8MFywhihJ6sfryZhBc1ICNEdROyHilJhXeFjjMoRGGWW3L1uNS0evthb7DIgMflzhQIqqU7XpUJitAA5io9DHeEFIa", function(req,res){
	res.sendFile(__dirname + "/legday.html");
});
app.post("/oeOgMZKkucyUWk6UWyVcNDPZkBQczudOySS8FsgXuFIeNCWzYIzz9dojE2l3mmHI2pHyGNlYgR3TkPg6lEwkHKtbDC2NPymFNT3h/2", function(req,res){
	res.send("/r7JmCxnVh9x1hwgE0SSsdcEokLjk0x9huHsV4FG9C2YJo5beNTxOWZ24yccpzbuSGMDAf7AGZmfbhheTYzxKmoCLoE0LEitaVUzY");
});
app.get("/r7JmCxnVh9x1hwgE0SSsdcEokLjk0x9huHsV4FG9C2YJo5beNTxOWZ24yccpzbuSGMDAf7AGZmfbhheTYzxKmoCLoE0LEitaVUzY", function(req,res){
	res.sendFile(__dirname + "/comsci.html");
});

app.post("/3lQZx0VU4JHqWvAccWNWTvKvbkVWNSSG3wtrmf9eOGuy1SA3FcQmvoHwzqgc8YH2k0hu5gyHLR6Cxuu2u8dPmK9J1fKX1hN95UtZ/ecoo", function(req,res){
	res.send("/HYig34JwnnzjRofDQUM0ej6lhAbZEidb5mfYePkp2JyHWC9CmLsoSozXMzMeHQgC0lo20yhR6DoS5lifWytCKRpmg0qLEucsEqks");
});
app.get("/HYig34JwnnzjRofDQUM0ej6lhAbZEidb5mfYePkp2JyHWC9CmLsoSozXMzMeHQgC0lo20yhR6DoS5lifWytCKRpmg0qLEucsEqks", function(req,res){
	res.sendFile(__dirname + "/mountaindew.html");
});
app.post("/ut6GPa24iYCV4n1GEIRgbBKCZ8OOaZ6sj0YW1RQ9DhSyuJ2ZgJ5h9DHWClyC8uSflH1amG9PNPb7o3UsDQxAh4mJfK9e3Sjcn9cz/championfuel", function(req,res){
	res.send("/yS9FBIugiwemDuTcjSZVqkNVbubnx0JTIJpahJen3izwDixMZmvfv8Zwt0JOOjykQLiVin8bvxwWDTwq3PwoOjL57iHJp5T5E2QM");
});
app.get("/yS9FBIugiwemDuTcjSZVqkNVbubnx0JTIJpahJen3izwDixMZmvfv8Zwt0JOOjykQLiVin8bvxwWDTwq3PwoOjL57iHJp5T5E2QM", function(req,res){
	res.sendFile(__dirname + "/flip.html");
});
app.post("/W8UJDH8Xd1sXJtiq6CsEOQ8aUo1ZQaGC6q9zV7kYZBJyURMOh4iVIeTssJi6HMzE2y1LwaxjB7HlMhXS95BHalZqS5npHKRx6J6q/108841", function(req,res){
	res.send("/Ghwqc1Oox97kpCxwON0W1fVhE9XCZAeuHyIIpkWNjRVwkiSYTJKLMuQftDHh4KBB679miUXrBGOJPwxy387EsNJJfeQ9OfyLdwVl");
});
app.get("/Ghwqc1Oox97kpCxwON0W1fVhE9XCZAeuHyIIpkWNjRVwkiSYTJKLMuQftDHh4KBB679miUXrBGOJPwxy387EsNJJfeQ9OfyLdwVl", function(req,res){
	res.sendFile(__dirname + "/phinally.html");
});
app.post("/sO8xpceSWxNW8dyeKO24kLuAYxvHVqBc2xxfzAXjXA5VEr0c6S4etmEfKYKtcbt4wR9ThW24lWONdEN7kHaDREGrqgJsi2mCJjmO/9003", function(req,res){
	res.send("/1Tr2GoKQ4tvuZ2OKOReJDwy51avQntKec15GdDm6XIoMy2mdJoMbI86x9rdkKNnLCifEJsAwYM8mFipeu0f1YboVrs4Z3hAunEYW");
});
app.get("/1Tr2GoKQ4tvuZ2OKOReJDwy51avQntKec15GdDm6XIoMy2mdJoMbI86x9rdkKNnLCifEJsAwYM8mFipeu0f1YboVrs4Z3hAunEYW", function(req,res){
	res.sendFile(__dirname + "/DomCobb.html");
});

app.post("/rnKdqiVqaNvUjg1ZafUjLHaqkwTOQ5v8i49xcVNby7VHbMubRfitMjHUDryjmSftMfQMYtNmoyRp8bpQex7OECz7TVf6Dipfn3Sb/:t", function(req,res){
	/*date getting garbage*/
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes() + "";
	if(m.length == 1){
		m = "0" + m;
	}
	var tfctime = "" + h + "" + m;
	h = h%12;
	if(h == 0){
		h = 12;
	}
	var ctime = "" + h + "" + m;
	
	var unixtime = d.getTime()/1000;
	for(var i = -50;i <= 50;i++){
		if(req.params.t == "" + (unixtime + i)){
			res.send("/WEwIsKJfqAZuZKn6ZbjjtMfavnGEjef5IzBY994nzTInrTjfUqob1ucmFGQMKTIjg77f6ZqwHYHYFQ1o5gpWyr83WMGwtcDz7zC2");
			break;
		}
	}
	
	if(req.params.t == tfctime || req.params.t == ctime){
		res.send("/WEwIsKJfqAZuZKn6ZbjjtMfavnGEjef5IzBY994nzTInrTjfUqob1ucmFGQMKTIjg77f6ZqwHYHYFQ1o5gpWyr83WMGwtcDz7zC2");
	} else{
		res.send("/wronganswer");
	}
});
app.get("/WEwIsKJfqAZuZKn6ZbjjtMfavnGEjef5IzBY994nzTInrTjfUqob1ucmFGQMKTIjg77f6ZqwHYHYFQ1o5gpWyr83WMGwtcDz7zC2", function(req,res){
	res.sendFile(__dirname + "/morsecode.html");
});

app.post("/7EZCY6yTVQpCb2PiX3Y2EwO4tSaXkkbgO0IAU6jELw6KpJTaCF341FZimX3w74CJT89D3h5CD1cQATP0oIVebIknveKr8a0P9Yj2/canda", function(req,res){
	res.send("/EmhihqNrlNmUfmae0EZNPP58Q9wqx76Zid7prJEDkQnp2orRSgsvTltzlQOGNKvVOs85ZCw9jKn9WEOCJ4YqgfQpVuVx4ggGwfAm");
});
app.get("/EmhihqNrlNmUfmae0EZNPP58Q9wqx76Zid7prJEDkQnp2orRSgsvTltzlQOGNKvVOs85ZCw9jKn9WEOCJ4YqgfQpVuVx4ggGwfAm", function(req,res){
	res.sendFile(__dirname + "/threed.html");
});

app.post("/857NcDZe000BJkHv9sBXjQYTzAlSQegN9dqbEdfs33TAcpTbHkZR0Lyp9J5PNbsNcGMEJQXCJE0JTKLrSy6J7uW63QJEP0fQwSk6/mario", function(req,res){
	res.send("/Xq5EV3EOBs796NNghEe1aTYwHfuOs1fdi9F12aDrszqmc1rjvt8wcWSH0aji2pj8oMXeMrw3QKdQAuXVOVfOGVkwWrCMEJISlvVW");
});
app.get("/Xq5EV3EOBs796NNghEe1aTYwHfuOs1fdi9F12aDrszqmc1rjvt8wcWSH0aji2pj8oMXeMrw3QKdQAuXVOVfOGVkwWrCMEJISlvVW", function(req,res){
	res.sendFile(__dirname + "/inori.html");
});
app.get("/anime", function(req,res){
	res.send('NO WAIFU NO LAIFU!<br><a href = "https://www.youtube.com/playlist?list=PLpTun0_Hp61vCElww0s5YN1NcsP2kIDW4">ANIME PLAYLIST</a><br>Also here\'s a cringe karaoke recording!<br><iframe width="560" height="315" src="https://www.youtube.com/embed/_lAccA4kT9k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
});
app.post("*", function(req,res){
	res.send("/wronganswer");					   
});
app.post("*/*",function(req,res){
	res.send("/wronganswer");
});
app.get("*", function(req,res){
	res.sendFile(__dirname + "/wronganswer.html");
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});