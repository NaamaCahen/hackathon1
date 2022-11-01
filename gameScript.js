(function displayFirstChallenge(){
    nextChallenge(1);
})()
function nextChallenge(challengeNum) {
    let h1 = document.getElementById("challengeTitle");
    let h3 = document.getElementById("challengeDescription");
    let section = document.getElementById("challengeSection");
    let timer = document.getElementById("timer");
    let answers = document.getElementById("answersDiv");
    switch (challengeNum) {
        case 1:
            displayChallenge1(h1, h3, section, timer, answers);
            break;
        case 2:
            displayChallenge2(h1, h3, section, timer, answers);
            break;
        case 3:
            displayChallenge3(h1, h3, section, timer, answers);
            break;
        case 4:
            displayChallenge4(h1, h3, section, timer, answers);
        default:
            displayChallenge1(h1, h3, section, timer, answers);
            break;
    }
}
function displayChallenge1(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #1"
    h3.textContent = "choose the color which is colored in the same color of its name!"
    colorChallenge(section);
    answers = answersBox(answers, 1);
    timerFunc(timer);
}
function colorChallenge(section) {
    let img1 = document.createElement("img");
    img1.src = "./images/colors.jpg";
    img1.style.width = "35%";
    img1.alt = "colors";
    section.appendChild(img1);
}
function displayChallenge2(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #2"

}
function displayChallenge3(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #3"

}
function displayChallenge4(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #4"

}

function timerFunc(timer) {

}
function answersBox(answersDiv, challengeNum) {
   let pChoose= document.createElement("p");
   pChoose.textContent="click on the correct answer:";
   answersDiv.appendChild(pChoose);
    if (challengeNum === 1) {
        const colorsArray = ["white ", "orange ", "violet ", "red ", "blue ", "pink ", "yellow ", "black ", "green "];
        for (const color of colorsArray) {
            let span = document.createElement("span");
            span.textContent=color;
            answersDiv.appendChild(span);
            span.addEventListener('click',answerPage);
        }
    } else if (challengeNum === 2) {

    } else if (challengeNum === 3) {

    } else if (challengeNum === 4) {

    }
}
function answerPage(event){
    event.target.style.opacity="50%";
    //go to answer.html
    event.target.href="answer.html"
}