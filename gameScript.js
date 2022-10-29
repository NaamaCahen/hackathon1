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
    timer(timer);
}
function colorChallenge(section){

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