// some JS rely on us to fill in some of the gaps, what is the hight level aspect here
//rather not having something work, is waste of our time
console.log("here");

//click a button change the background color
//elements in the dum through the events

//click a button 

//get a reference to the button
const button = document.getElementById("btn");
const button1 = document.getElementById("btn1");
const revealButton = document.querySelector(".reveal-button");
const hiddenSection = document.querySelector(".hidden-section");
//callback function
function revealSection() {
    if (hiddenSection.classList.contains("reveal")) {
        hiddenSection.classList.remove("reveal");
    } else {
        hiddenSection.classList.add("reveal");
    }
}

/* Event listener */
revealButton.addEventListener("click", revealSection, false);
// const title = document.getElementById("title");
//add an event listener to the button 
button.addEventListener("click", function(){
    // console.log("clicked")
    // debugger;
    document.body.style.backgroundColor = "lightblue";
});
button1.addEventListener("click", function(){
    document.body.style.backgroundColor = "salmon";
})
button2.addEventListener("click", function (){
    document.body.style.fontSize = "300px";
})








// title.addEventListener("mouseout", function() {
//     title.style.color = "blue";
// });