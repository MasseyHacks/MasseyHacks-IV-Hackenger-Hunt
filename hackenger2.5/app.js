var app = require('express')();
var http = require('http').Server(app);

app.get("/", function(req,res){
	res.sendFile(__dirname + "/say.html");
});
app.get("/index.css", function(req,res){
	res.sendFile(__dirname + "/index.css");
});

app.get("/chompa.jpg", function(req,res){
        res.sendFile(__dirname + "/chompa.jpg");
});

app.get("/sweetalert2.all.js", function(req,res){
	res.sendFile(__dirname + "/sweetalert2.all.js");
});
app.get("/fonts/:f", function(req,res){
	res.sendFile(__dirname + "/fonts/" + req.params.f);
});
app.post("/2CBmQeuu0wKK7ti6vAwkUwgxNkxrwWKX1yfGEKm6q0Fc3fZEEU/youshallnotpass", function(req,res){
	res.send("/XIJgVabBVo31fT1wDjUv9sNJ5zkawKTM3k3ztE4bFXWRbix4AC");
});
app.get("/XIJgVabBVo31fT1wDjUv9sNJ5zkawKTM3k3ztE4bFXWRbix4AC", function(req,res){
	res.sendFile(__dirname + "/dicc.html");
});

app.post("/N6nWmbc7xe73c4RHiljBM29izZ3pEqb8duepRvh1xrId4HLr3G/althoughpracticalitybeatspurity", function(req,res){
	res.send("/gxm5WZdfuirdYdhnpmBDAkYmjbxXna13t8wp4rem9tDJb9kUJn");
});
app.get("/gxm5WZdfuirdYdhnpmBDAkYmjbxXna13t8wp4rem9tDJb9kUJn", function(req,res){
	res.sendFile(__dirname + "/wat.html");
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
http.listen(3002, function(){
  console.log('listening on *:3002');
});
