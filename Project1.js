
let body = document.querySelector("body");


let gray = document.querySelector("#gray");
gray.addEventListener("click", function(){
    body.style.backgroundColor = "gray";
});

let green = document.querySelector("#green");
green.addEventListener("click", function(){
    body.style.backgroundColor = "green";
});

let blue = document.querySelector("#blue");
blue.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
});

let red = document.querySelector("#red");
red.addEventListener("click", function(){
    body.style.backgroundColor = "red";
});


// USE OF forEach loop

let buttons = document.querySelectorAll(".buttons");

buttons.forEach(function(element){
    element.addEventListener("click", function(event){
        console.log(element.target.id);
        if(event.target.id === "gray"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "green"){
            body.style.backgroundColor = event.target.id;
        }
    });
});


