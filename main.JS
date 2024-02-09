
difference = 25;
rightWristX= 0;
leftWristX= 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw() {
    background('#969A97');

    document.getElementById("text_size").innerHTML = "Width And Height of text will be = "+ difference +"px";
    fill('#F90093')
    stroke('#F90093')
    text("hamdan",200,200)
    textSize(difference)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX +" diffrence = " + difference); 
    }
}

