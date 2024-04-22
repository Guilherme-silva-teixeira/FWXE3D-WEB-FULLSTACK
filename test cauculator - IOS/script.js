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
    let plus = document.getElementById("plus-btn");
    let minus = document.getElementById("minus-btn");
    let multiplication = document.getElementById("multiplication-btn");
    let division = document.getElementById("division-btn");
    let equals = document.getElementById("equals-btn");

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

    four.addEventListener("click",
    function()
    {
        display.innerText = "4";
        return 4;
    }
    );

    five.addEventListener("click" , 
    function()
    {
        display.innerText = "5";
        return 5;
    }
    );

    six.addEventListener("click" ,
    function()
    {
        display.innerText = "6";
        return 6;
    }
    );

    one.addEventListener("click",
    function()
    {
        display.innerText = "1";
        return 1;
    }
    );

    two.addEventListener("click" , 
    function()
    {
        display.innerText = "2";
        return 2;
    }
    );

    three.addEventListener("click" ,
    function()
    {
        display.innerText = "3";
        return 3;
    }
    );
}
