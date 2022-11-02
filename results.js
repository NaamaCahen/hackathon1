(function () {
    const url_string = `${window.location.href}`;
    const url = new URL(url_string);
    const brain = url.searchParams.get("brain");
    console.log(brain);
    if (brain == 4) {
        displayWin();
    } else {
        displayNotWInner(brain);
    }
})()
function displayWin() {
    document.querySelector("h1").textContent = "WINNER!!!";
    document.querySelector("h2").textContent = "Your brain is sharp and quick thinking ! \n WELL DONE! ";
}
function displayNotWInner(brain) {
    document.querySelector("h1").textContent = "WELL DONE,";
    document.querySelector("h2").textContent = `You got ${brain} parts of the brain! \n  Feel free to try your luck in a replay game...`;
    document.body.style.backgroundImage="radial-gradient(violet, blue)";
}

