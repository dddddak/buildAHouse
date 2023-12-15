background(219, 255, 255);

// grass
fill(114, 204, 135);
noStroke();
rect(0, 339, 400, 70);

stroke(0, 0, 0);

// brick walls
for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 4; j++) {
        image(getImage("cute/RoofSouth"), i*47 + 55, j*49 + 130, 50, 70);
    }
}

// roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

// door
fill(120, 80, 19);
rect(180, 269, 40, 77);

// windows
fill(53, 87, 181);
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        rect(i*160 + 100, j*90 + 190, 40, 40);
    }
}
rect(178, 190, 40, 40);

// smokestack
fill(174, 180, 214);
rect(100, 30, 50, 100);

// tree
image(getImage("cute/TreeShort"), 25, 230, 70, 150);