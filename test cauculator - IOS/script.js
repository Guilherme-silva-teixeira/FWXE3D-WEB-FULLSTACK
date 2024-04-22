let display = document.getElementById("display");

function cauculate()
{
    let display = document.getElementById("display");
    let one = document.getElementById("A1");
    let two = document.getElementById("A2");
    let three = document.getElementById("A3");
    let four = document.getElementById("A4");
    let five = document.getElementById("A5");
    let six = document.getElementById("A6");
    let seven = document.getElementById("A7");
    let eigth = document.getElementById("A8");
    let nine = document.getElementById("A9");

    nine.addEventListener("click",
    function()
    {
        display.innerText = "9";
        return 9;
    }
    );

    eigth.addEventListener("click" , 
    function()
    {
        display.innerText = "8";
        return 8;
    }
    );

    seven.addEventListener("click" ,
    function()
    {
        display.innerText = "7";
        return 7;
    }
    );
}
