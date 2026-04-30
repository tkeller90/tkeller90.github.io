let explainer = document.getElementById("explainer");
let div = document.getElementById("changeMe");


//click event--on directional buttons
document
    .getElementById("clickEvent")
    .addEventListener("click", function(event) {
        console.log(event);
        explainer.innerHTML = "Got to [direction].";
    });

    //mouseover
document
    .getElementById("mouse")
    .addEventListener("mouseover", function(event){
        console.log(event);
        explainer.innerHTML = 'X: ${event.x} and Y: ${event.y}';
    });

//expanding and hiding menu option
document.getElementById("drawer").addEventListener("click", function(event) { 
    document.getElementById("nav").style.left = "0px";
});

document.getElementById("close").addEventListener("click", function (event) {
    let parent = document.getElementById("close").offsetParent.id;
    document.getElementById(parent).style.left = "-300px";
});

// light or dark mode
document.getElementById("dark").addEventListener ("click", function(event){
    div.classList.replace('light', 'dark');
    button.classList.replace('light-button', 'dark-button')
    document.getElementById(this.id).classList.add('active')
    document.getElementById('light').classList.remove('active')
})

document.getElementById("light").addEventListener ("click", function(event){
    div.classList.replace('dark', 'light');
    button.classList.replace('dark-button', 'light-button')
    document.getElementById(this.id).classList.add('active')
    document.getElementById('dark').classList.remove('active')
})