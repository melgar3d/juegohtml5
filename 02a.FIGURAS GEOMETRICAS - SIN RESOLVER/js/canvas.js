var canvas = document.querySelector("#lienzo");

var ctx = canvas.getContext("2d");

ctx.fillStyle ="cyan";
ctx.fillRect(0,0,500,100);

ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(255,0,255,1)";
ctx.rect(0,0,500,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(300,300,80,0,2*Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.lineTo(230,200);
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.fillStyle = "black";
ctx.fill();

