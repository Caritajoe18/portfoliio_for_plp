document.querySelector("#welcome").innerHTML =
    "Welcome to my site, The developers home";
const button = document.getElementById("btn");
function newText(event) {
    console.log(event);
    const myText = document.getElementById("toChange");
    myText.innerHTML = "Will be changing my Name soon";
}

button.addEventListener("click", newText);

document.addEventListener("mouseup", (event) => {
    console.log("The mouse has been pressed");
});
document.addEventListener("keydown", (event) => {
    console.log(event.key + " has been pressed");
});
function clickme(event){
    // const newWelcome = document.getElementById('welcome').innerHTML = "Just saying welcome again";
    window.location.replace('https://google.com')
};