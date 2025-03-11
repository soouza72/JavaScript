let button = document.getElementById("button");
let colorToggle = false;
button.addEventListener("click", function() {
    if (colorToggle) {
        button.style.backgroundColor = "#A8D5BA"; 
    } else {
        button.style.backgroundColor = "#66BB6A"; 
    }
    colorToggle = !colorToggle; 
});

console.log("----------------")
let likeButton = document.getElementById("likeButton");
let likes = document.getElementById("likes");
let likeCount = 0;
likeButton.addEventListener("click", function() {
    likeCount++;
    likes.textContent = likeCount;
});

console.log("----------------")
let changeTextButton = document.getElementById("changeTextButton");
let texts = document.getElementById("texts").getElementsByTagName("p");
changeTextButton.addEventListener("click", function() {
    for (let i = 0; i < texts.length; i++) {
        texts[i].textContent = "Eu gosto de JavaScript";
    }
});

console.log("----------------")
let sendMessageButton = document.getElementById("sendMessageButton");
let message = document.getElementById("message");
sendMessageButton.addEventListener("click", function() {
    message.style.display = "none";
    sendMessageButton.textContent = "Mensagem enviada";
});

console.log("----------------")
let adjustDisplayButton = document.getElementById("adjustDisplayButton");
let container = document.getElementById("container");
adjustDisplayButton.addEventListener("click", function() {
    container.style.display = "flex";
    container.style.flexDirection = "row"; 
});

console.log("----------------")
let square = document.getElementById("square");
let circleButton = document.getElementById("circleButton");
let squareButton = document.getElementById("squareButton");

circleButton.addEventListener("click", function() {
    square.style.borderRadius = "50%"; 
});

squareButton.addEventListener("click", function() {
    square.style.borderRadius = "0"; 
});