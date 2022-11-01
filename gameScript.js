(function displayFirstChallenge() {
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
            break;
        default:
            displayChallenge1(h1, h3, section, timer, answers);
            break;
    }
}
function displayChallenge1(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #1 -Colors"
    h3.textContent = "choose the color which is colored in the same color of its name!"
    const src = "./images/colors.jpg";
    challengeImage(section, src);
    answersBox(answers, 1);
    timerFunc(timer, 15);
}

function displayChallenge2(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #2 -Frequency";
    h3.textContent = "choose the most frequent element!"
    const src = "./images/frequency.jpg";
    challengeImage(section, src);
    answersBox(answers, 2);
    timerFunc(timer, 15);
}
function displayChallenge3(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #3 -Puzzle";
    h3.textContent = "choose the piece of puzzle which will complete the puzzle!"
    const src = "./images/puzzle.jpg";
    challengeImage(section, src);
    answersBox(answers, 3);
    timerFunc(timer, 15);
}
function displayChallenge4(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #4 -Labyrinth";
    h3.textContent = "were will the arrow arrive to? \n choose the correct destination!"
    const src = "./images/labyrinth.jpg";
    challengeImage(section, src);
    answersBox(answers, 4);
    timerFunc(timer, 15);
}
function challengeImage(section, src) {
    let img1 = document.createElement("img");
    img1.src = src;
    img1.style.width = "35%";
    img1.alt = "colors";
    section.appendChild(img1);
}
function timerFunc(timer, seconds) {
    let timerInterval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            document.querySelector("#timer>p").textContent = `${seconds}`;
        } else if (seconds === 0) {
            document.querySelector("#timer>p").textContent = `${seconds}`;
            clearInterval(timerInterval);
            //alert -time's up!
            alert(`oops... \n time's up! \n try your chance with the next challenge...`)
            document.getElementById("next").style.display = 'block';//display the button-next challenge
        }
    }, 1000)

}
function answersBox(answersDiv, challengeNum) {
    let pChoose = document.createElement("p");
    pChoose.textContent = "click on the correct answer:";
    answersDiv.appendChild(pChoose);
    if (challengeNum === 1) {
        const colorsArray = ["white", "orange", "violet", "red", "blue", "pink", "yellow", "black", "green"];
        for (const color of colorsArray) {
            let span = document.createElement("span");
            span.textContent = color;
            answersDiv.appendChild(span);
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum)
            });
        }
    } else if (challengeNum === 2) {
        const ballsArray = [1, 14, 8, 11];
        for (let i = 0; i < ballsArray.length; i++) {
            // let spanContainer = document.createElement("span");
            // let spanBall = document.createElement("span");
            // spanBall.textContent = "sports_baseball";
            // spanBall.classList.add("material-symbols-outlined");
            let spanNum = document.createElement("span");
            spanNum.textContent = `${ballsArray[i]}`;
            // spanContainer.append(spanBall, spanNum);
            answersDiv.appendChild(spanNum);
            spanNum.addEventListener("click", function (event) {
                answerAlert(event, challengeNum)
            });
        }
    } else if (challengeNum === 3) {
        const optionsArr = ["A ", "B ", "C "];
        for (const option of optionsArr) {
            let span = document.createElement("span");
            span.textContent = `${option}`;
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum)
            });
            answersDiv.appendChild(span);
        }

    } else if (challengeNum === 4) {
        const optionsArr = ["A ", "B ", "C "];
        for (const option of optionsArr) {
            let span = document.createElement("span");
            span.textContent = `${option}`;
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum)
            });
            answersDiv.appendChild(span);
        }
    }
}
function answerAlert(event, num) {
    event.target.style.opacity = "50%";
    let isTrue = false;
    switch (num) {
        case 1:
            if (event.target.textContent === "yellow") {
                isTrue = true;
            }
            break;
        case 2:
            if (event.target.textContent === "8") {
                isTrue = true;
            }
            break;
        case 3:
            if (event.target.textContent === "B ") {
                isTrue = true;
            }
            break;
        case 4:
            if (event.target.textContent === "C ") {
                isTrue = true;
            }
            break;

        default:
            break;
    }
   
    if (isTrue) {
        alert(`BRAVO!! \n you get one more piece of brain!`);
    } else {
        alert(`oops... \n your answer was wrong... \n try your chance with the next challenge...`)
    }
    document.getElementById("next").style.display = 'block';
}

