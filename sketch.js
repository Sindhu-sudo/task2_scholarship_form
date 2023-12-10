var bg,system,code,security,access1,access2,access3,access4,name1;
var score=0;
var playState = 'start'
var db 
function preload() {
  bg = loadImage("img.jpg");
}

function setup() {
  createCanvas(1300,800);
  db = firebase.database()
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  if(playState=="start"){
  fields();
   security.display();
  
}

 if(playState=='submitted'){
  
    fill("white")
    textSize(30);
    text("Successfully Submitted !!",50,50)
    text("Here is the details you entered",50,100)
    textSize(20);
    text(" Name            : "  +name1,50, 150);
    text(" College name : "  +access1 , 50,200);
    text(" Email           : "  +access2 , 50,250);
    text(" Phone Number : "  +access3 , 50,300);

}
if(playState=='unsubmit'){
  fill("white")
    textSize(30);
    text(" Error : ",50,100)
    textSize(20);
    text(" The college name you entered is invalid!! "  ,50, 150);
    text(" Please enter the details only if you are the student of Sambhram Institute of Technology",50,200)
    text(" If yes enter the correct name!!",50,250)
}
}