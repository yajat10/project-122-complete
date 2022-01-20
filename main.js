x = 0;
y = 0;
screen_width="";
screen_height="";
apple=""
draw_apple = "";
speak_data="";
to_number="";
function preload(){
  apple=loadImage("apple.png")
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  content=event.results[0][0].transcript
to_number= Number(content)
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML="Started drawing the apple";
  draw_apple="set"
}
else{
document.getElementById("status").innerHTML="The speech has not recognized a number"
}
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width,screen_height-150);
 canvas.position(1)
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50)
     
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    }
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = content+"Apples Drawn";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}
