//teste do código 00
/*let circle = document.getElementById("circle");
let circleHeight = circle.style.height;
let circleWidth = circle.style.width;
var colors = ['#f00','#0f0','#00f'];

function click()
{
    let circle = document.getElementById("circle");
    let circleHeight = circle.style.height;
    let circleWidth = circle.style.width;
    var colors = ['#f00','#0f0','#00f'];
    let number = 13;
    return 13;
    
circleHeight = circleHeight + click();
circleWidth = circleWidth + click();
}

circleHeight = circleHeight + click();
circleWidth = circleWidth + click();
*/

//teste do código 01
/*
let circle = document.getElementById("circle");
let circleHeight = circle.style.height;
let circleWidth = circle.style.width;
var colors = ['#f00','#0f0','#00f'];
let colorIndex = 0;

function click() {
    circleHeight = parseInt(circleHeight) + 13 + "px";
    circleWidth = parseInt(circleWidth) + 13 + "px";
    circle.style.height = circleHeight;
    circle.style.width = circleWidth;
    circle.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    let ch = document.getElementById("circle").style.height;
    if(ch => "400px")
    {
        
    }
}

circle.addEventListener("click", click);
*/
//tentativa:
//Quando o circulo é clicado ele aumenta de tamanho:
//tentativa:
let circle = document.getElementById("circle");
let circleHeight = parseInt(circle.style.height);
let circleWidth = parseInt(circle.style.width);
var colors = ['#f00', '#0f0', '#00f'];
let colorIndex = 0;

function click() {
    if (circleHeight < 400 && circleWidth < 400) {
        circleHeight += 13;
        circleWidth += 13;
        circle.style.height = circleHeight + "px";
        circle.style.width = circleWidth + "px";
        circle.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }
}

circle.addEventListener("click", click);

// tentativa:

let circle = document.getElementById("circle");
let circleHeight = parseInt(circle.style.height);
let circleWidth = parseInt(circle.style.width);
var colors = ['#f00', '#0f0', '#00f'];
let colorIndex = 0;

circle.addEventListener("click", 

function () {
    if (circleHeight < 400 && circleWidth < 400) {
        circleHeight += 13;
        circleWidth += 13;
        circle.style.height = circleHeight + "px";
        circle.style.width = circleWidth + "px";
        circle.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }
}

);
