const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
let loop = true;
let score = 0;


buttonLeft.onclick = function(){
    console.log("Left")
    guessLeft()
}

buttonRight.onclick = function(){
    console.log("Right")
    guessRight()
    // if(picker() == 1){
    //     success()
    // }
    // else{
    //     failure()
    // }
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
    
    //InterHTML
}

function failure(){
    score = 0
    console.log("That is incorrect. \n\nYou Lose!")
}

// let x = 0
// let count = 0
// while(x < 1000){
//     if(picker() == 1){
//         count++
//     }
//     x++

// }
// console.log(count)
