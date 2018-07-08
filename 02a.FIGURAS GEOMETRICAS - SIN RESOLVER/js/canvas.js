var canvas = document.querySelector("#lienzo");

var ctx = canvas.getContext("2d");

ctx.fillStyle ="cyan";
ctx.fillRect(0,0,500,100);

ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(255,0,255,1)";
ctx.rect(0,0,500,100);
ctx.stroke();