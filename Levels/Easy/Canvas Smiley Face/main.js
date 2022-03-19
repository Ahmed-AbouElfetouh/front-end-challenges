let myCanvas = document.getElementById("my-canvas"),
    myContext = myCanvas.getContext("2d");
myContext.fillStyle = "#333";
myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);

myContext.beginPath();
myContext.fillStyle = "#FFFF00";
myContext.arc(300, 230, 100, 0, 2 * Math.PI);
myContext.fill();


myContext.beginPath();
myContext.arc(300, 230, 80, 0, Math.PI);
myContext.fillStyle = "#fff";
myContext.stroke();

myContext.beginPath();
myContext.fillStyle = "#000";
myContext.arc(250, 200, 15, 0, Math.PI * 2);
myContext.fill();

myContext.beginPath();
myContext.fillStyle = "#000";
myContext.arc(350, 200, 15, 0, Math.PI * 2);
myContext.fill();

myContext.font = "50px 'Open Sans', sans-serif"
myContext.fillStyle = "#ffff00";
myContext.fillText("Hello", 250, 100);

