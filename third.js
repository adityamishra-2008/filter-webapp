nosex=0;
nosey=0;

function preload(){
nose=loadImage("https://i.postimg.cc/NGmk8Gd0/204-2044364-red-nose-png-image-transparent-background-graphics-circle-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-8;

    nosey=results[0].pose.nose.y-15;

    console.log("nose x = "+nosex);
    console.log("nose y = "+nosey);

}


}
function draw(){
image(video,0,0,300,300);

image(nose,nosex,nosey,32,30);

}
function take_snapshot(){
     save("my_img.png");
     
}

function change1(){
    // similar behavior as an HTTP redirec
    window.location.replace("first.html");
 }; 
 function change(){
    // similar behavior as an HTTP redirec
    window.location.replace("sec.html");
 };