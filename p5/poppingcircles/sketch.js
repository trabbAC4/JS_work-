/*
function setup() {
    createCanvas(500,500);
    background(0,0,0);
}

function draw() {
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    fill(r,g,b);
    let x = random(0, 500);
    let y = random(0,500);
    ellipse(x, y, 50, 50); 
}
*/
function setup() {
    createCanvas(500,500);
    background(0,0,0);
    noStroke();
}
function draw() {
    ellipse(mouseX, mouseY, 25, 25);
}
function mouseClicked() {
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    fill(r,g,b);
}