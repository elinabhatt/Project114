function preload(){
}

function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300)
  video.hide();

  poseNet = ml5.poseNET(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded(){
  console.log('PoseNet Is Intialized');
}

function draw(){
}

function take_snapshot()
{
  save('my_lipstick_filter.png');
}