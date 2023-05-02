var img, nx, ny;
function preload(){
    img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    c=createCanvas(424,300);
    c.center();
    cam=createCapture(VIDEO);
    cam.size(424,300);
    cam.hide();
    ml=ml5.poseNet(cam, modelLoaded);
    ml.on('pose', onResults);
}
function draw(){
    image(cam,0,0,424,300);
    image(img,nx-30 , ny+10,60,30);
}
function modelLoaded(){console.log("Model Loaded!");}
function onResults(results){
    if(results.length==null){
        console.error("Error: No results received");
    }else{
        console.log(results);
        nx=results[0].pose.nose.x;
        ny=results[0].pose.nose.y;
    }
}
