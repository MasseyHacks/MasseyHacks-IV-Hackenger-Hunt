var app = require('express')();
var http = require('http').Server(app);

app.get("/", function(req,res){
	res.sendFile(__dirname + "/Q0.html");
	res.cookie("answer","jerrbear");
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
app.get("/cookie.jpg", function(req,res){
	res.sendFile(__dirname + "/cookie.jpg");
});
app.get("/aachart.png", function(req,res){
	res.sendFile(__dirname + "/aachart.png");
});
app.get("/bmovieScript.txt", function(req,res){
	res.sendFile(__dirname + "/bmovieScript.txt");									
});
app.get("/emojiMovieScript.txt", function(req,res){
	res.sendFile(__dirname + "/emojiMovieScript.txt");										  
});
app.post("/PB2jQs2haUlWwtCHT222IoEm57rfmpS1PI8vYYDYJMI55bBN1rDzD8Jw3YAfci6RO3aDRDpogYi9ZHKQYeepaLL3Ab9Ah3hWWhnC/jerrbear", function(req,res){
	res.send("/p96ZgTQgXaaVlurKAlOmV03H1sEd0LhfKd4OXITIIRsRcJrAV3NGREcJXGKLiRRQVJtGgceMTwuT6JkPDXjkrlRcQpOW7tCQ0Tm6");
});
app.get("/p96ZgTQgXaaVlurKAlOmV03H1sEd0LhfKd4OXITIIRsRcJrAV3NGREcJXGKLiRRQVJtGgceMTwuT6JkPDXjkrlRcQpOW7tCQ0Tm6", function(req,res){
	res.sendFile(__dirname + "/Q1.html");
});
app.post("/fFEDCkmdukOFNUsP0q3dV22SrnlCWZw1u1sUbEYtPAYqkg5buWcdP3W4g7u0UQRcH9XGCLYfbKvjPoi78lbNcXFgSZ6AGLCbIpGa/65922", function(req,res){
	res.send("/aQUpLUWXiyiDFnAbAuOS13cWPmu19Ch7j1lSJ7EQtKjWXHWl1A4Ss4E7eWYbp59wVkesfI8yifl3M5dEv5mNZPK1Bw3Oq2a9adrd");
});
app.get("/aQUpLUWXiyiDFnAbAuOS13cWPmu19Ch7j1lSJ7EQtKjWXHWl1A4Ss4E7eWYbp59wVkesfI8yifl3M5dEv5mNZPK1Bw3Oq2a9adrd", function(req,res){
	res.sendFile(__dirname + "/Q2.html");
});
app.post("/m4nYdUrl7ASgJVpMzTg2Mg0PQU6C6q1ikc4lWlwTJcYhYdTlUZcu329KL4aHk1Ns1HBLSXvsZhzNigZ25ZkYRiwqcwVmlyCc53OM/50", function(req,res){
	res.send("/SK7TVGeL5fkO1JahGT77Ob5R3FccG4doE87qD9Zye9c3Id9cW4ay55fYzfZ570iCWdQpbDNdCQ78R4bDY9ZT23Gr8vl4lru7ualv");
});
app.get("/SK7TVGeL5fkO1JahGT77Ob5R3FccG4doE87qD9Zye9c3Id9cW4ay55fYzfZ570iCWdQpbDNdCQ78R4bDY9ZT23Gr8vl4lru7ualv", function(req,res){
	res.sendFile(__dirname + "/Q3.html");
});
app.post("/fFEDCkmdukOFNUsP0q3dV22SrnlCWZw1u1sUbEYtPAYqkg5buWcdP3W4g7u0UQRcH9XGCLYfbKvjPoi78lbNcXFgSZ6AGLCbIpGa/:a", function(req,res){
	if(req.params.a.toLowerCase().includes("yoshi")){
		res.send("/jcMWGXrolog2Smxb4q1Q7ENhhvzJxaYEcAqIoFUxTYpCaKB3ZrHWVl10Gqz1qlvrLJXZcIkWuxmv8LmX2THN2yBzMYo09IhLf5yi");
	} else{
		res.send("/wronganswer");
	}
});
app.get("/jcMWGXrolog2Smxb4q1Q7ENhhvzJxaYEcAqIoFUxTYpCaKB3ZrHWVl10Gqz1qlvrLJXZcIkWuxmv8LmX2THN2yBzMYo09IhLf5yi", function(req,res){
	res.sendFile(__dirname + "/Q4.html");
});
app.post("/7cFPPeKiJhKnWl0I6MdobS8PCv6EyTTtTm8yqHG0OhbAq17mB8ADQwghRdJdUsxDEt0T0wHDBI3Rx04ZWssDNyKuzjwjzTL1cBK1/:t", function(req,res){
	var stamp = Math.floor(Date.now() / 1000);
	var gucci = false;
	for(var i = -10;i <= 10;i++){
		if((stamp+i)+"" == req.params.t){
			res.send("/OzSlIDxenG1nA94ecIqUnOBXKGQMBfJgFprdSMh3j6gJ6aO8H2QUEhHdLnNcrmiWAyZga4ajZeTTdvPKlvuPAZQbatdrGkd4I0aG");
			gucci = true;
			break;
		}
	}
	if(!gucci){
		res.send("/wronganswer");
	}
});
app.get("/OzSlIDxenG1nA94ecIqUnOBXKGQMBfJgFprdSMh3j6gJ6aO8H2QUEhHdLnNcrmiWAyZga4ajZeTTdvPKlvuPAZQbatdrGkd4I0aG", function(req,res){
	res.sendFile(__dirname + "/Q5.html");	
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
http.listen(3001, function(){
  console.log('listening on *:3001');
});