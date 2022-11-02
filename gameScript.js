let currentChallenge = 1;
let brain = 0;
(function displayFirstChallenge() {
    nextChallenge(1);
})()
function btnNext() {
    currentChallenge++;
    document.getElementById("next").style.display = "none"//rehide the button
    //cleaning the answers box
    let spans = document.querySelectorAll("#answersDiv span");
    spans.forEach((element) => element.remove());
    //reupdating 
    document.querySelector("#timer p").textContent = "15";
    document.getElementById("answersDiv").style.display = 'block';
    //calling the next challenge
    nextChallenge(currentChallenge);
}
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
            break;
    }
}
function displayChallenge1(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #1 -Colors"
    h3.textContent = "choose the color which is colored in the same color of its name!"
    const src = "./images/colors.jpg";
    challengeImage(section, src);
    const interval = timerFunc(timer, 15);
    answersBox(answers, 1, interval);
}

function displayChallenge2(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #2 -Frequency";
    h3.textContent = "choose the most frequent element!"
    const src = "./images/frequency.jpg";
    challengeImage(section, src);
    const interval = timerFunc(timer, 15);
    answersBox(answers, 2, interval);
}
function displayChallenge3(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #3 -Puzzle";
    h3.textContent = "choose the piece of puzzle which will complete the puzzle!"
    const src = "./images/puzzle.jpg";
    challengeImage(section, src);
    const interval = timerFunc(timer, 15);
    answersBox(answers, 3, interval);
}
function displayChallenge4(h1, h3, section, timer, answers) {
    h1.textContent = "Challenge #4 -Labyrinth";
    h3.textContent = "were will the arrow arrive to? \n choose the correct destination!"
    const src = "./images/labyrinth.jpg";
    challengeImage(section, src);
    const interval = timerFunc(timer, 15);
    answersBox(answers, 4, interval);

}
function challengeImage(section, src) {
    let img1 = document.querySelector("section img");
    img1.src = src;
    img1.style.width = "35vw";
    img1.alt = "colors";
    section.appendChild(img1);
}
function timerFunc(timer, seconds) {
    const timerInterval = setInterval(function () {
        seconds--;
        if (seconds >= 0) {
            document.querySelector("#timer>p").textContent = `${seconds}`;
        } else if (seconds < 0) {
            document.querySelector("#timer>p").textContent = "--";
            clearInterval(timerInterval);
            //alert -time's up!
            if (currentChallenge != 4) {
                alert(`oops... \n time's up! \n try your chance with the next challenge...`)
                document.getElementById("next").style.display = 'block';//display the button-next challenge
                document.getElementById("answersDiv").style.display = 'none';//hide the answers box
            } else {
                alert(`oops... \n time's up!`);
                const btnResults = document.getElementById("results");
                btnResults.style.display = "block";
                document.querySelector("a").href = "finalResults.html?brain=" + brain;
            }
        }

    }, 1000)
    return timerInterval;
}
function answersBox(answersDiv, challengeNum, interval) {

    if (challengeNum === 1) {
        const colorsArray = ["white", "orange", "violet", "red", "blue", "pink", "yellow", "black", "green"];
        for (const color of colorsArray) {
            let span = document.createElement("span");
            span.textContent = color;
            answersDiv.appendChild(span);
            span.classList.add("ansItems")
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum, interval)
            });
        }
    } else if (challengeNum === 2) {
        const ballsArray = [1, 14, 8, 11];
        for (let i = 0; i < ballsArray.length; i++) {
            let spanNum = document.createElement("span");
            spanNum.textContent = `${ballsArray[i]}`;
            spanNum.classList.add("ansItems");
            answersDiv.appendChild(spanNum);
            spanNum.addEventListener("click", function (event) {
                answerAlert(event, challengeNum, interval)
            });
        }
    } else if (challengeNum === 3) {
        const optionsArr = ["A ", "B ", "C "];
        for (const option of optionsArr) {
            let span = document.createElement("span");
            span.textContent = `${option}`;
            span.classList.add("ansItems");
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum, interval)
            });
            answersDiv.appendChild(span);
        }

    } else if (challengeNum === 4) {
        const optionsArr = ["A ", "B ", "C "];
        for (const option of optionsArr) {
            let span = document.createElement("span");
            span.textContent = `${option}`;
            span.classList.add("ansItems");
            span.addEventListener("click", function (event) {
                answerAlert(event, challengeNum, interval)
            });
            answersDiv.appendChild(span);
        }
    }
}
function answerAlert(event, num, interval) {
    clearInterval(interval);
    document.getElementById("answersDiv").style.display = 'none';//hide the answers box
    document.querySelector("#timer p").textContent = "--";
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
        brain++;
        const brainImg = document.getElementById("brainParts");
        switch (brain) {
            case 1: {
                brainImg.src = "./images/brain1.jpg";
                brainImg.style.display = "block";
            }
                break;
            case 2:
                brainImg.src = "./images/brain2.jpg";
                break;
            case 3:
                brainImg.src = "./images/brain3.jpg";
                break;
            case 4:
                brainImg.src = "./images/brain4.jpg";
                break;
            default:
                break;
        }
    } else {
        alert(`oops... \n your answer was wrong... \n try your chance with the next challenge...`)
    }
    if (num < 4) {
        document.getElementById("next").style.display = 'block';
    } else if (num === 4) {
        const btnResults = document.getElementById("results");
        btnResults.style.display = "block";
        document.querySelector("a").href = "finalResults.html?brain=" + brain;
    }
}

