img="";
objects=[];
status1="";

function preload(){
    img1=localStorage.getItem("img");
    console.log(img1);
    img=loadImage(img1);
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    //document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}

function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
         for(i=0; i<objects.length; i++ ){
            document.getElementById("status").innerHTML="There Are "+objects.length+" objects whithin this image and cocossd has detected "+objects.length;

            //document.getElementById("status").innerHTML="STATUS : Objects Detected";
            percent = floor(objects[i].confidence * 100 );
            fill("#ff0000");
            text(objects[i]. label+ " " +percent+ "%" , objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x ,objects[i].y ,objects[i].width ,objects[i].height);
         }
    }
    
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
    
function Back(){
    window.location="index.html";
}
    