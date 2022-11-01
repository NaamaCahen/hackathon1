(function(){
    if(brain===4){
        displayWin();
    }else{
        displayNotWInner();
    }
})()
function displayWin(){
    document.querySelector("h1").textContent="WINNER!!!";
    document.querySelector("h3").textContent="Your brain is sharp and quick thinking ! \n WELL DONE! ";
}
function displayNotWInner(brain){
    document.querySelector("h1").textContent="WELL DONE,";
    document.querySelector("h3").textContent=`You got ${brain} parts of the brain! \n  Feel free to try your luck in a replay game...`;
}