function preload()
{

}

function setup ()
{
    canvas = createCanvas(500, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 480);
    circle(30, 30, 50);
    rect(45, 20, 400, 20);
    circle(460, 30, 50);
    rect(20, 45, 20, 400);
    circle(30, 460, 50);
    rect(45, 450, 400, 20);
    circle(460, 460, 50);
    rect(450, 45, 20, 400);
}

function take_snapshot()
{
    save('student_name.png');
}
