var wrapper = document.getElementsByClassName("wrapper")[0];
var button = wrapper.querySelector("#button");
var body = document.querySelector("body");
var colorComponent = document.getElementById("color");
button.addEventListener("click", getColorComponent);
body.style.background =colorComponent.innerText;





function getColorComponent (){
    ''.padStart();
    var red = get16BaseString(getRandomInRange(0, 255)).padStart(2,'0');
    var green = get16BaseString(getRandomInRange(0, 255)).padStart(2,'0');
    var blue = get16BaseString(getRandomInRange(0, 255)).padStart(2,'0');
    var colorHex = "#" + red + green + blue;
    colorHex= colorHex.toLocaleUpperCase();
    colorComponent.innerText=colorHex;
    body.style.background = colorHex;
}

function get16BaseString(number) {
    return number.toString(16);
}
function getRandomInRange(min, max) {
    return Math.round(Math.random() * (max-min)+min);
}