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












// //Two Games
// const buttonLeft = document.getElementById("buttonLeft");
// const buttonRight = document.getElementById("buttonRight");
//  const buttonLeft2 = document.getElementById("buttonLeft2");
//  const buttonMiddle2 = document.getElementById("buttonMiddle2")
// const buttonRight2 = document.getElementById("buttonRight2");

// let loop = true;
// let score = 0;

// // nav.onclick = function(){
// //     console.log("nav click")
// //     console.log(nav.nodeValue())
// // }

// buttonLeft.onclick = function(){
//     console.log("Left")
//     clearMessage()
//     guessLeft()
// }

// buttonRight.onclick = function(){
//     console.log("Right")
//     clearMessage()
//     guessRight()

// }

// function guessRight(){
//     if(picker(2) == 1){
//         success(1)
//     }
//     else{
//         failure(1)
//     }
// }

// function guessLeft(){
//     if(picker(2) == 0){
//         success(1)
//     }
//     else{
//         failure(1)
//     }
// }

// function picker(mult){
//     let rand = Math.floor(Math.random() * mult);
//     // console.log(rand)
//     return rand
// }

// buttonLeft2.onclick = function(){
//     clearMessage()
//     guessLeft2()
// }

// buttonRight2.onclick = function(){
//     clearMessage()
//     guessRight2()
// }

// buttonMiddle2.onclick = function(){
//     clearMessage()
//     guessMiddle2()
// }

// function guessLeft2(){
//     let pick = picker(3)
//     if(pick == 1 || pick == 2){
//         success(2)
//     }
//     else{
//         failure(2)
//     }
// }

// function guessMiddle2(){
//     let pick = picker(3)
//     if(pick == 0 || pick == 2){
//         success(2)
//     }
//     else{
//         failure(2)
//     }
// }

// function guessRight2(){
//     let pick = picker(3)
//     if(pick == 0 || pick == 1){
//         success(2)
//     }
//     else{
//         failure(2)
//     }
// }



// function success(game){
//     score++
//     console.log("That is the right choice.\n\nScore is now "+ score +"\n\n Pick again")
//     if(game == 1){
//         document.getElementById("score").innerHTML = "Your Score: " + score
//     }else if(game == 2){
//         document.getElementById("score2").innerHTML = "Your Score: " + score
//     }
//     //InterHTML
// }

// function failure(game){
//     score = 0
//     console.log("That is incorrect. \n\nYou Lose!")
//     if(game == 1){
//         document.getElementById("score").innerHTML = "Your Score: " + score
//         document.getElementById("message").innerHTML = "YOU LOSE! \n Try Again!"
//     }else if(game == 2){
//         document.getElementById("score2").innerHTML = "Your Score: " + score
//         document.getElementById("message2").innerHTML = "YOU LOSE! \n Try Again!"
//     }
// }

// function clearMessage(){
//     document.getElementById("message").innerHTML = ""
//     document.getElementById("message2").innerHTML = ""
// }