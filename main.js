function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 240, 185, 170, 150);
    
    fill('green')
    circle(60, 60, 70)
    circle(580, 60, 70)
    circle(60, 420, 70)
    circle(580, 420, 70)
    fill('red')
    rect(90, 50, 460, 20)
    rect(90, 410, 460, 20)
    rect(50, 85, 20, 310)
    rect(570, 85, 20, 310)

}

function take_snapshot()
{
    save('student_name.png');
}
