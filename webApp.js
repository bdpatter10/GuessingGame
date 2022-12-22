const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const objectContainerLeft = document.getElementById('object-container-left');
const objectContainerRight = document.getElementById('object-container-right');
const output = document.getElementById("output");
let loop = true;
let score = 0;
let count = 0;


buttonLeft.onclick = function(){
    console.log("Left")
    guessLeft()
    moveObjectLeft()
}

buttonRight.onclick = function(){
    console.log("Right")
    guessRight()
    moveObjectRight()
}

function moveObjectRight(){

    // Create a new div element for the object
    const object = document.createElement('div');
    object.classList.add('object');

    // Add the object to the container
    objectContainerLeft.innerHTML = ""
    objectContainerRight.innerHTML = ""
    objectContainerRight.appendChild(object);
    count++;
}

function moveObjectLeft(){

    // Create a new div element for the object
    const object = document.createElement('div');
    object.classList.add('object');

    // Add the object to the container
    objectContainerLeft.innerHTML = ""
    objectContainerRight.innerHTML = ""
    objectContainerLeft.appendChild(object);
    count++;
}

function guessRight(){
    if(picker() == 1){
        success()
    }
    else{
        failure()
    }
}
function guessLeft(){
    if(picker() == 0){
        success()
    }
    else{
        failure()
    }
}

function picker(){
    let rand = Math.floor(Math.random() * 2);
    // console.log(rand)
    return rand
}

function success(){
    score++
    console.log("That is the right choice.\n\nScore is now "+ score +"\n\n Pick again")
    output.innerHTML= "That is the right choice.\n\nScore is now "+ score +"\n\n Pick again"
    //InterHTML
}

function failure(){
    score = 0
    console.log("That is incorrect. \n\nYou Lose!")
    output.innerHTML = "That is incorrect. \n\nYou Lose!"
}




// Add an event listener to the button that will add the object to the container when the button is clicked
button.addEventListener('click', function() {
  // Create a new div element for the object
  const object = document.createElement('div');
  object.classList.add('object');
  
  // Add the object to the container
  objectContainer.appendChild(object);
});

// let x = 0
// let count = 0
// while(x < 1000){
//     if(picker() == 1){
//         count++
//     }
//     x++

// }
// console.log(count)
