(function displayFirstChallenge() {
    nextChallenge(3);
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
    h1.textContent = "Challenge #1 -Colors"
    h3.textContent = "choose the color which is colored in the same color of its name!"
    const src="./images/colors.jpg";
    challengeImage(section,src);
    answersBox(answers, 1);
    timerFunc(timer, 15);
}
function challengeImage(section,src) {
    let img1 = document.createElement("img");
    img1.src = src;
    img1.style.width = "35%";
    img1.alt = "colors";
    section.appendChild(img1);
}
function displayChallenge2(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #2 -Frequency";
    h3.textContent="choose the most frequent element!"
    const src="./images/frequency.jpg";
    challengeImage(section,src);
    answersBox(answers, 2);
    timerFunc(timer, 15);
}
function displayChallenge3(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #3 -Puzzle";
    h3.textContent="choose the piece of puzzle which will complete the puzzle!"
    const src="./images/puzzle.jpg";
    challengeImage(section,src);
    answersBox(answers, 3);
    timerFunc(timer, 15);
}
function displayChallenge4(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #4"

}

function timerFunc(timer, seconds) {
    let timerInterval = setInterval(() => {
        seconds--;
        if (seconds>0){
            document.querySelector("#timer>p").textContent=`${seconds}`;
        }else if(seconds===0){
            document.querySelector("#timer>p").textContent=`${seconds}`;
            clearInterval(timerInterval);
            //go to answer.html display-wrong
            window.location.href="answer.html";
        }
    }, 1000)

}
function answersBox(answersDiv, challengeNum) {
    let pChoose = document.createElement("p");
    pChoose.textContent = "click on the correct answer:";
    answersDiv.appendChild(pChoose);
    if (challengeNum === 1) {
        const colorsArray = ["white ", "orange ", "violet ", "red ", "blue ", "pink ", "yellow ", "black ", "green "];
        for (const color of colorsArray) {
            let span = document.createElement("span");
            span.textContent = color;
            answersDiv.appendChild(span);
            span.addEventListener('click', answerPage);
        }
    } else if (challengeNum === 2) {
        const ballsArray=[1,14,8,11];
        for(let i=0;i<ballsArray.length;i++){
            let spanContainer=document.createElement("span");
            let spanBall = document.createElement("span");
            spanBall.textContent ="sports_baseball";
            spanBall.classList.add("material-symbols-outlined");
            let spanNum=document.createElement("span");
            spanNum.textContent=`${ballsArray[i]}`;
            spanContainer.append(spanBall,spanNum);
            answersDiv.appendChild(spanContainer);
            spanContainer.addEventListener('click', answerPage);
        }
    } else if (challengeNum === 3) {
        const optionsArr=["A ","B ","C "];
        for (const option of optionsArr) {
            let span=document.createElement("span");
            span.textContent=`${option}`;
            span.addEventListener("click",answerPage);
            answersDiv.appendChild(span);
        }

    } else if (challengeNum === 4) {

    }
}
function answerPage(event) {
    event.target.style.opacity = "50%";
    //go to answer.html
    window.location.href = "answer.html";
}