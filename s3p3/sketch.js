const animal = ["ray.png", "duck.png", "squid.png", "bird.png"];

let yoff;
let avgFreq;
let textLength = 1;
let pic;
let r, g;

function setup() {
  createCanvas(690, 690);
  yoff = 0.0;
  avgFreq = 0.01;
  r = random(30, 170);
  g = random(30, 230);

  noCursor();

  loadImage(random(animal), img => {
    pic = img;
    image(pic, -500, -500);
  });
}

function draw() {
  background(51);

  fill(r, g, 200);

  beginShape();

  let xoff = 0;

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);
    vertex(x, y);
    xoff += avgFreq / textLength;
  }

  yoff += avgFreq / textLength;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  imageMode(CENTER);
  if (pic) {
    image(pic, mouseX, mouseY);
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    avgFreq = 0.005;
    textLength = 1;
    r = random(0, 150);
    g = random(0, 200);
    loadImage(random(animal), img => {
      pic = img;
    });
  } else {
    textLength += 1;
  }

  if (key == "e" || key == "t" || key == "a" || key == "t") {
    avgFreq += 0.0923;
  } else if (key == "i" || key == "n" || key == "s" || key == "r") {
    avgFreq += 0.0664;
  } else if (key == "h" || key == "d" || key == "l" || key == "u") {
    avgFreq += 0.04275;
  } else if (key == "c" || key == "m" || key == "f" || key == "y") {
    avgFreq += 0.024325;
  } else if (key == "w" || key == "g" || key == "p" || key == "b") {
    avgFreq += 0.018575;
  } else if (
    key == "v" ||
    key == "k" ||
    key == "x" ||
    key == "q" ||
    key == "j" ||
    key == "z"
  ) {
    avgFreq += 0.0375;
  }
  
}

function keyTyped() {
  if (keyCode == ENTER) {
    writtenText = "";
    select("#textbox").html("");
    textLength = 1;
  } else {
    typing(key);
  }
}

let writtenText = "";

function typing(letter) {
  textSize(random(20, 50)); // Adjusted text size range
  push();
  translate(mouseX, mouseY); // Translate to mouse position
  text(letter, 0, 0);
  pop();
  writtenText += letter;
  select("#textbox").html(writtenText);
}
