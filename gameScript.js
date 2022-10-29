function nextChallenge(challengeNum){
let h1=document.getElementById("challengeTitle");
let h3=document.getElementById("challengeDescription");
let section=document.getElementById("challengeSection");
let timer=document.getElementById("timer");
let answers=document.getElementById("answersDiv");
switch (challengeNum) {
    case 1:
        displayChallenge1(h1,h3,section,timer,answers);
        break;
    case 2:
        displayChallenge2(h1,h3,section,timer,answers);
        break;
    case 3:
        displayChallenge3(h1,h3,section,timer,answers);
        break;
    case 4:
        displayChallenge4(h1,h3,section,timer,answers);
    default:
        displayChallenge1(h1,h3,section,timer,answers);
        break;
}
}
function displayChallenge1(h1,h3,section,timer,answers){
    h1.textContent="Challenge #1"
    h3.textContent="choose the color which is colored in the same color of its name!"
    colorChallenge(section);
    answers= answersBox(answers,1);
    timer(timer);
}
function colorChallenge(section){
    // const colors=["red","yellow","pink","purple","orange","brown","grey"]
    // document.createElement("div")
}
function displayChallenge2(h1,h3,section,timer,answers){
    h1.textContent="Challenge #2"

}
function displayChallenge3(h1,h3,section,timer,answers){
    h1.textContent="Challenge #3"

}
function displayChallenge4(h1,h3,section,timer,answers){
    h1.textContent="Challenge #4"

}
function timer(timer){

}
function answersBox(answersDiv,challengeNum){
    if(challengeNum===1){
        
        answersDiv.append()
    }else if(challengeNum===2){

    }else if(challengeNum===3){

    }else if(challengeNum===4){

    }
}