let canvas = document.getElementById('game');
ctx = canvas.getContext('2d'),
ballRadius = 9,
x = canvas.width / (Math.floor(Math.random() * Math.random() * 10) + 3),
y = canvas.height - 40,
dx = 2,
dy = -2;

let x2 = canvas.width / (Math.floor(Math.random() * Math.random() * 10) + 3),
y2 = canvas.height - 40,
dx2 = 2,
dy2 = -2;
let ballRadius2 = 9;

let paddleHeight = 12,
paddleWidth = 72;

let paddleX = (canvas.width - paddleWidth) / 2;

let rowCount = 5,
columnCount = 9,
brickWidth = 54,
brickHeight = 18,
brickPadding = 12,
topOffset = 40,
leftOffset = 33,
score = 0;

let bricks = [];
for (let c = 0 ; c < columnCount; c++)
{
    bricks[c] = [];
    for(let r = 0; r < rowCount; r++)
    {
        bricks[c][r] = {x: 0 , y: 0, status: 1};
    }
}

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e)
{
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width)
    {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight, 30);
    ctx.fillStyle = "#333";
    ctx.fill();
    ctx.closePath();
}

function drawBall()
{
    ctx.fillStyle = '#333';

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawBricks()
{
    for(let c = 0; c < columnCount; c++)
    {
        for(let r = 0 ; r < rowCount; r++)
        {
            if(bricks[c][r].status === 1)
            {
                let brickX = (c*(brickWidth + brickPadding)) + leftOffset;
                let brickY = (r * (brickHeight + brickPadding)) + topOffset;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.roundRect(brickX, brickY, brickWidth, brickHeight, 30);
                ctx.fillStyle = '#333';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function trackScore()
{
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#333';
    ctx.fillText('Score : '+score, 8, 24);
}

function hitDetection()
{
    for(let c = 0; c < columnCount; c++)
    {
        for(let r = 0; r < rowCount; r++)
        {
            let b = bricks[c][r];
            if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
            {
                dy = -dy;
                b.status = -1;
                score++;
                if(score === rowCount * columnCount)
                {
                    alert('You win!');
                    document.location.reload();
                }
            }

            if(x2 > b.x && x < b.x + brickWidth && y2 > b.y && y2 < b.y + brickHeight)
            {
                dy2 = -dy2;
                b.status = -1;
                score++;
                if(score === rowCount * columnCount)
                {
                    alert('You win!');
                    document.location.reload();
                }
            }
        }
    }
}

function init()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trackScore();
    drawBricks();
    drawBall();
    drawPaddle();
    hitDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius)
    {
        dx = -dx;
    }

    if (y + dy < ballRadius)
    {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius)
    {
        if (x > paddleX && x < paddleX + paddleWidth)
        {
            dy = -dy;
        }
        else
        {
            alert('Game Over!');
            document.location.reload();
        }
    }

    if (x2 + dx2 > canvas.width - ballRadius2 || x + dx < ballRadius2)
    {
        dx2 = -dx2;
    }

    if (y2 + dy2 < ballRadius2)
    {
        dy2 = -dy2;
    }
    else if (y2 + dy2 > canvas.height - ballRadius2)
    {
        if (x2 > paddleX && x2 < paddleX + paddleWidth)
        {
            dy2 = -dy2;
        }
        else
        {
            alert('Game Over!');
            document.location.reload();
        }
    }

    x += dx;
    y += dy;

    x2 += dx2;
    y2 += dy2;
}

setInterval(init, 10);
