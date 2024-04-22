<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
    <?php
    //convert hack to php in this repository lol
?>
<body>
    <header></header>
    <section>
        <div id="container">
            <div id="display"></div>
            <div id="buttons">
                <div class="row" id="row-0">
                    <button class="ligth-gray">AC</button>
                    <button class="ligth-gray">+/-</button>
                    <button class="ligth-gray">%</button>
                    <button class="orange">/</button>
                </div>
                <div class="row" id="row-1">
                    <button id="A7" onclick="cauculate()">7</button>
                    <button id="A8" onclick="cauculate()">8</button>
                    <button id="A9" onclick="cauculate()">9</button>
                    <button class="orange">X</button>
                </div>
                <div class="row" id="row-2">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button class="orange">-</button>
                </div>
                <div class="row" id="row-3">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button class="orange">+</button>
                </div>
                <div class="row" id="row-4">
                    <button class="zero">0</button>
                    <button>.</button>
                    <button class="orange">=</button>
                </div>
            </div>
        </div>
    </section>
    <footer></footer>
    <script src="script.js"></script>
</body>
</html>
