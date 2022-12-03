objectDetector = "";
img = "";
object = [];
status = "";

function preload() {
    img = loadImage("img.jpg");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('status').innerHTML = "Detectando...";
}

function modelLoaded(params) {
    
}