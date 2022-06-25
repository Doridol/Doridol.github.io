let tile1 = [], tile2 = [], tile3 = [], tile4 = [], tile5 = [], tile6 = [], tile7 = [], tile8 = [];
let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
let a2, b2, c2, d2, e2, f2, g2, h2;
let score1 = 0, score2 = 0, score3 = 0, score4 = 0, score5 = 0, score6 = 0, score7 = 0, score8 = 0;
let num1 = [], num2 = [], num3 = [], num4 = [], num5 = [], num6 = [], num7 = [], num8 = [];
let totalScore = 0;
let countmusic = 0;
let select_music = 0;
let start_music_time = 0;
let frameTime;
let millisecond;
let realtime;

function preload() {
  gamesound = loadSound('media/Maroon 5 sugar.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // i < 100 갯수 수정
  for(i = 0; i<100; i++) {
    tile1[i] = new tile_1();
  }

  for(let i = 0; i<100; i++) {
    tile2[i] = new tile_2();
  }

  for(let i = 0; i<100; i++) {
    tile3[i] = new tile_3();
  }

  for(let i = 0; i<100; i++) {
    tile4[i] = new tile_4();
  }

  for(let i = 0; i<100; i++) {
    tile5[i] = new tile_5();
  }

  for(let i = 0; i<100; i++) {
    tile6[i] = new tile_6();
  }

  for(let i = 0; i<100; i++) {
    tile7[i] = new tile_7();
  }

  for(let i = 0; i<100; i++) {
    tile8[i] = new tile_8();
  }
}

function draw() {
  if(select_music == 0){
   
    if(mouseX > windowWidth/2 && mouseY < windowHeight/3 * 2) {
      background(0);
      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('SUGAR', windowWidth/4, windowHeight/3);
      textSize(windowWidth/50);
      text('Maroon 5', windowWidth/4, windowHeight/19 * 7);
      pop();
      
      push();
      textAlign(CENTER);
      textSize(windowWidth/15);
      fill(255);
      text('Undeveloped', windowWidth/4 * 3, windowHeight/3);
      pop();

      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('How to play', windowWidth/2, windowHeight/6 * 5);
      pop();
    }

    else if(mouseX < windowWidth/2 && mouseY < windowHeight/3 * 2) {
      background(0);
      push();
      textAlign(CENTER);
      textSize(windowWidth/15);
      fill(255);
      text('SUGAR', windowWidth/4, windowHeight/3);
      textSize(windowWidth/35);
      text('Maroon 5', windowWidth/4, windowHeight/13 * 5);
      pop();

      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('Undeveloped', windowWidth/4 * 3, windowHeight/3);
      pop();

      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('How to play', windowWidth/2, windowHeight/6 * 5);
      pop();
    }

    else if(mouseY > windowHeight/3 * 2) {
      background(0);
      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('SUGAR', windowWidth/4, windowHeight/3);
      textSize(windowWidth/50);
      text('Maroon 5', windowWidth/4, windowHeight/19 * 7);
      pop();

      push();
      textAlign(CENTER);
      textSize(windowWidth/20);
      fill(255);
      text('Undeveloped', windowWidth/4 * 3, windowHeight/3);
      pop();

      push();
      textAlign(CENTER);
      textSize(windowWidth/15);
      fill(255);
      text('How to play', windowWidth/2, windowHeight/6 * 5);
      pop();
    }
    push();
    strokeWeight(windowWidth/80);
    stroke(0, 0, 255);
    line(windowWidth/2, 0, windowWidth/2, windowHeight/3 * 2);
    line(0, windowHeight/3 * 2, windowWidth, windowHeight/3 * 2);
    pop();
  }

  millisecond = round(millis() / 1000, 3);
  Game_Start(select_music);
}

function mousePressed() {
  if(select_music == 0) {
    if(mouseX < windowWidth/2 && mouseY <= windowHeight /3 * 2 && select_music == 0) {
      select_music = 1;
      start_music_time = millisecond;
    }

    else if(mouseY > windowHeight/3 * 2) {
      select_music = 100;
    }
  }

  if(select_music == 100 && mouseX > windowWidth/3 * 2 && mouseY < windowHeight / 17) {
    select_music = 0;
  }
}

function Game_Start(select_music) {
  if(select_music == 100) {
    background(0);
    push();
    strokeWeight(windowHeight/30);
    stroke(255);
    line(0, windowHeight/8 * 7, windowWidth, windowHeight/8 * 7);
    pop();

    push();
    strokeWeight(windowWidth/9);
    stroke(0, 0, 255);
    line(windowWidth/2, 0, windowWidth/2, height);
    pop();

    push();
    textSize(windowWidth/30);
    fill(255);
    textAlign(CENTER);
    text('Z', windowWidth/18, windowHeight/20 * 19);
    text('X', windowWidth/18 * 3, windowHeight/20 * 19);
    text('C', windowWidth/18 * 5, windowHeight/20 * 19);
    text('V', windowWidth/18 * 7, windowHeight/20 * 19);
    text('M', windowWidth/18 * 11, windowHeight/20 * 19);
    text(',', windowWidth/18 * 13, windowHeight/20 * 19);
    text('.', windowWidth/18 * 15, windowHeight/20 * 19);
    text('/', windowWidth/18 * 17, windowHeight/20 * 19);
    text('Score', windowWidth/2, windowHeight/4);
    text('Select Music', windowWidth/6 * 5, windowHeight / 20);
    text('Drum', windowWidth/4, windowHeight/2);
    text('vocal', windowWidth/4 * 3, windowHeight/2);
    pop();


    if(keyIsDown(90)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(0, windowHeight/8 * 7, windowWidth/9, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(88)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9, windowHeight/8 * 7, windowWidth/9 * 2, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(67)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 2, windowHeight/8 * 7, windowWidth/9 * 3, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(86)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 3, windowHeight/8 * 7, windowWidth/9 * 4, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(77)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 5, windowHeight/8 * 7, windowWidth/9 * 6, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(188)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 6, windowHeight/8 * 7, windowWidth/9 * 7, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(190)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 7, windowHeight/8 * 7, windowWidth/9 * 8, windowHeight/8 * 7);
      pop();
    }
    if(keyIsDown(191)) {
      push();
      strokeCap(SQUARE);
      strokeWeight(windowHeight/40);
      stroke(255, 0, 0);
      line(windowWidth/9 * 8, windowHeight/8 * 7, windowWidth, windowHeight/8 * 7);
      pop();
    }
  }

  if(select_music == 1) {
    realtime = millisecond - start_music_time
    totalScore = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8;
  
    background(0);
    
    if(realtime >= 2.05 && countmusic == 0) {
      gamesound.play();
      countmusic++;
    }

     push();
     strokeWeight(windowHeight/30);
     stroke(255);
     line(0, windowHeight/8 * 7, windowWidth, windowHeight/8 * 7);
     pop();
     
     push();
     strokeWeight(windowWidth/9);
     stroke(0, 0, 255);
     line(windowWidth/2, 0, windowWidth/2, height);
     pop();
      
    if(keyIsDown(90)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(0, windowHeight/8 * 7, windowWidth/9, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(88)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9, windowHeight/8 * 7, windowWidth/9 * 2, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(67)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 2, windowHeight/8 * 7, windowWidth/9 * 3, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(86)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 3, windowHeight/8 * 7, windowWidth/9 * 4, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(77)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 5, windowHeight/8 * 7, windowWidth/9 * 6, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(188)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 6, windowHeight/8 * 7, windowWidth/9 * 7, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(190)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 7, windowHeight/8 * 7, windowWidth/9 * 8, windowHeight/8 * 7);
          pop();
    }
    if(keyIsDown(191)) {
          push();
          strokeCap(SQUARE);
          strokeWeight(windowHeight/40);
          stroke(255, 0, 0);
          line(windowWidth/9 * 8, windowHeight/8 * 7, windowWidth, windowHeight/8 * 7);
          pop();
    }

    // sink1
    sink1(9, 0);
    sink1(9.75, 1);

    sink1(13, 2);
    sink1(13.75, 3);

    sink1(17, 4);
    sink1(17.75, 5);

    sink1(21, 6);
    sink1(21.75, 7);

    sink1(25, 8);
    sink1(25.75, 9);

    sink1(29, 10);
    sink1(29.75, 11);

    sink1(33, 12);
    sink1(33.75, 13);

    sink1(37, 14);
    sink1(37.75, 15);
    
    sink1(41, 16);
    sink1(41.75, 17);

    sink1(45, 18);
    sink1(45.75, 19);

    sink1(49, 20);
    sink1(49.75, 21);

    sink1(53, 22);
    sink1(53.75, 23);

    // sink2
    sink2(9.5, 0);
    sink2(10.5, 1);

    sink2(13.5, 2);
    sink2(14.5, 3);

    sink2(17.5, 4);
    sink2(18.5, 5);

    sink2(21.5, 6);
    sink2(22.5, 7);

    sink2(25.5, 8);
    sink2(26.5, 9);

    sink2(29.5, 10);
    sink2(30.5, 11);

    sink2(33.5, 12);
    sink2(34.5, 13);

    sink2(37.5, 14);
    sink2(38.5, 15);

    sink2(41.5, 16);
    sink2(42.5, 17);

    sink2(45.5, 18);
    sink2(46.5, 19);

    sink2(49.5, 20);
    sink2(50.5, 21);

    sink2(53.5, 22);
    sink2(54.5, 23);

    // sink3
    sink3(11, 0);
    sink3(11.75, 1);

    sink3(15, 2);
    sink3(15.25, 3);
    sink3(15.75, 4);

    sink3(19, 5);
    sink3(19.75, 6);

    sink3(23, 7);
    sink3(23.25, 8);
    sink3(23.75, 9);

    sink3(27, 10);
    sink3(27.75, 11);

    sink3(31, 12);
    sink3(31.25, 13);
    sink3(31.75, 14);

    sink3(35, 15);
    sink3(35.75, 16);

    sink3(39, 17);
    sink3(39.25, 18);
    sink3(39.75, 19);
    sink3(40.25, 20);

    sink3(43, 21);
    sink3(43.75, 22);

    sink3(47, 23);
    sink3(47.25, 24);
    sink3(47.75, 25);

    sink3(51, 26);
    sink3(51.75, 27);

    sink3(55, 28);
    sink3(55.25, 29);
    sink3(55.75, 30);

    // sink4
    sink4(11.5, 0);
    sink4(12.5, 1);

    sink4(15.5, 2);
    sink4(16.5, 3);

    sink4(19.5, 4);
    sink4(20.5, 5);

    sink4(23.5, 6);
    sink4(24.5, 7);

    sink4(27.5 ,8);
    sink4(28.5, 9);

    sink4(31.5, 10);
    sink4(32.5, 11);

    sink4(35.5, 12);
    sink4(36.5, 13);

    sink4(39.5, 14);
    sink4(40, 15);
    sink4(40.5, 16);

    sink4(43.5, 17);
    sink4(44.5, 18);

    sink4(47.5, 19);
    sink4(48.5, 20);

    sink4(51.5, 21);
    sink4(52.5, 22);

    sink4(55.5, 23);
    sink4(56.5, 24);

    // sink5
    sink5(1, 0);
    sink5(7, 1);

    sink5(10, 2);

    sink5(11.75, 3);

    sink5(13.75, 4);
    sink5(14.25, 5);
    sink5(15, 6);

    sink5(16, 7);

    sink5(17.75, 8);
    sink5(18.25, 9);

    sink5(20, 10);

    sink5(21.75, 11);
    sink5(22.25, 12);
    sink5(23, 13);
    sink5(24, 14);

    sink5(26.75, 15);

    sink5(28, 16);

    sink5(30.75, 17);

    sink5(32.75, 18);

    sink5(34, 19);

    sink5(36.75, 20);

    sink5(38, 21);

    sink5(40.5, 22);
    sink5(44.5, 23);
    sink5(45.75, 24);
    sink5(46.75, 25);

    sink5(48.25, 26);
    sink5(52.75, 27);
    // sink6
    sink6(3, 0);

    sink6(9.75, 1);
    
    sink6(11.5, 2);
    sink6(12, 3);

    sink6(13.5, 4);
    sink6(14, 5);
    sink6(14.75, 6);

    sink6(15.75, 7);
  
    sink6(17.5, 8);
    sink6(18, 9);

    sink6(19.75, 10);

    sink6(21.5, 11);
    sink6(22, 12);
    sink6(22.75, 13);
    sink6(23.75, 14);

    sink6(25.375, 15);
    sink6(25.625, 16);
    sink6(26.5, 17);

    sink6(27.25, 18);
    sink6(27.5, 19);
    sink6(27.75, 20);
    sink6(28.25, 21);

    sink6(29.375, 22);
    sink6(29.625, 23);
    sink6(30.5, 24);

    sink6(32.5, 25);

    sink6(33.25, 26);
    sink6(33.5, 27);
    sink6(33.75, 28);
    sink6(34.25, 29);

    sink6(35.375, 30);
    sink6(35.625, 31);
    sink6(36.5, 32);

    sink6(37.25, 33);
    sink6(37.5, 34);
    sink6(37.75, 35);
    sink6(38.25, 36);

    sink6(41, 37);
    sink6(44.25, 38);
    sink6(45.5, 39);
    sink6(46.25, 40);

    sink6(48.5, 41);
    sink6(53.25, 42);
    sink6(54, 43);
    // sink7
    sink7(5, 0);

    sink7(9.5, 1);

    sink7(11.25, 2);

    sink7(13.25, 3);

    sink7(15.5, 4);

    sink7(17.25, 5);
  
    sink7(19.5, 6);

    sink7(21.25, 7);
    sink7(23.5, 8);

    sink7(25.25, 9);
    sink7(25.5, 10);
    sink7(25.75, 11);
    sink7(26.25, 12);

    sink7(27.375, 13);
    sink7(27.625, 14);
    sink7(28.5, 15);

    sink7(29.25, 16);
    sink7(29.5, 17);
    sink7(29.75, 18);
    sink7(30.25, 19);

    sink7(32.25, 20);

    sink7(33.375, 21);
    sink7(33.625, 22);
    sink7(34.5, 23);

    sink7(35.25, 24);
    sink7(35.5, 25);
    sink7(35.75, 26);
    sink7(36.25, 27);

    sink7(37.375, 28);
    sink7(37.625, 29);
    sink7(38.5, 30);

    sink7(43, 31);
    sink7(45.25, 32);
    sink7(46, 33);

    sink7(49, 34);
    sink7(50.5, 35);
    sink7(52.25, 36);
    sink7(53.5, 37);
    sink7(54.25, 38);
    // sink8
    sink8(9.25, 0);

    sink8(15.25, 1);

    sink8(19.25, 2);

    sink8(23.25, 3);

    sink8(26, 4);
    
    sink8(28.75, 5);

    sink8(30, 6);

    sink8(34.75, 7);

    sink8(36, 8);

    sink8(38.75, 9);

    sink8(42.5, 10);
    sink8(44.75, 11);

    sink8(50.25, 12);
    sink8(51, 13);
    sink8(52.5, 14);
    sink8(53.75, 15);
    sink8(54.75, 16);

    push();
    textAlign(CENTER);
    textSize(windowWidth/30);
    text(totalScore, windowWidth/2, windowHeight/4);
    pop();

    if(realtime >= 59) {
      end_game();
    }
  }
}

function end_game() {
  background(0);
  gamesound.pause();
  push();
  fill(255);
  textSize(windowWidth/13);
  textAlign(CENTER)
  text('Your Score : ' + totalScore, windowWidth/2, windowHeight/2);
  text('Best Score : 22400', windowWidth/2, windowHeight/3);
  text('Thank you for playing', windowWidth/2, windowHeight/5 * 4);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if(keyCode == 90) {
    score1 = tile1[a].remove(score1);
  }
  if(keyCode == 88) {
    score2 = tile2[b].remove(score2);
  }
  if(keyCode == 67) {
    score3 = tile3[c].remove(score3);
  }
  if(keyCode == 86) {
    score4 = tile4[d].remove(score4);
  }
  if(keyCode == 77) {
    score5 = tile5[e].remove(score5);
  }
  if(keyCode == 188) {
    score6 = tile6[f].remove(score6);
  }
  if(keyCode == 190) {
    score7 = tile7[g].remove(score7);
  }
  if(keyCode == 191) {
    score8 = tile8[h].remove(score8);
  }
}

function sink1(x, y) {
  if(realtime >= x) {
    a2 = y
    tile1[y].display();
    tile1[y].move();
  }
  if(tile1[y].height - tile1[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    a = a2 + 1;
  }
}
function sink2(x, y) {
  if(realtime >= x) {
    b2 = y;
    tile2[y].display();
    tile2[y].move();
  }
  if(tile2[y].height - tile2[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    b = b2 + 1;
  }
}
function sink3(x, y) {
  if(realtime >= x) {
    c2 = y;
    tile3[y].display();
    tile3[y].move();
  }
  if(tile3[y].height - tile3[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    c = c2 + 1;
  }
}
function sink4(x, y) {
  if(realtime >= x) {
    d2 = y;
    tile4[y].display();
    tile4[y].move();
  }
  if(tile4[y].height - tile4[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    d = d2 + 1;
  }
}
function sink5(x, y) {
  if(realtime >= x) {
    e2 = y;
    tile5[y].display();
    tile5[y].move();
  }
  if(tile5[y].height - tile5[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    e = e2 + 1;
  }
}
function sink6(x, y) {
  if(realtime >= x) {
    f2 = y
    tile6[y].display();
    tile6[y].move();
  }
  if(tile6[y].height - tile6[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    f = f2 + 1;
  }
}
function sink7(x, y) {
  if(realtime >= x) {
    g2 = y;
    tile7[y].display();
    tile7[y].move();
  }
  if(tile7[y].height - tile7[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    g = g2 + 1;
  }
}
function sink8(x, y) {
  if(realtime >= x) {
    h2 = y;
    tile8[y].display();
    tile8[y].move();
  }
  if(tile8[y].height - tile8[y].thickness > windowHeight/8 * 7 + windowHeight / 60) {
    h = h2 + 1;
  }
}