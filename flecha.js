//1
document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");
//2
document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value);
//3
document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red");
//4
document.getElementById("hover-this").onmouseout = () => setBackgroundColorById("body", "white");
//5
var getValueFromId = id => document.getElementById(id).value;
//6
var setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color;
//7
var mouseOverFunction = el => el.style = "background-color: black";