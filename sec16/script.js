var but = document.querySelector("button");
var bod = document.querySelector("body");
console.log(bod);
var def = bod.style.backgroundColor;

but.addEventListener("click", function() {
    if(bod.style.backgroundColor == def) {
        bod.style.backgroundColor = "purple";
    } else if (bod.style.backgroundColor == "purple") {
        bod.style.backgroundColor = def;
    }
});