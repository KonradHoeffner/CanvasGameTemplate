let canvas;
let ctx;
let timestamp = 0;
let now = time();
let last;

function main()
{
 console.log("Starting");
 canvas = document.getElementById("gameCanvas");
 ctx = canvas.getContext("2d");
 mainLoop(time());
}

function draw()
{
 ctx.clearRect(0,0,canvas.width,canvas.height);
}

function update(dt)
{
}

function mainLoop()
{
 last = now;
 now = time();
 update(now-last);
 draw();
 requestAnimationFrame(mainLoop);
}

function time()
{
 return new Date().getTime();
}
