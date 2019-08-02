var css = document.querySelector("h3");
var colorLeft = document.querySelector(".colorLeft");
var colorRight = document.querySelector(".colorRight");
var body = document.getElementById("body");

function setGradient() {
    body.style.background = "linear-gradient(to right, " +  colorLeft.value + ", " + colorRight.value + ")";
    css.textContent = body.style.background + ";";
}

colorLeft.addEventListener("input", setGradient);
colorRight.addEventListener("input", setGradient);