var score=0;
function decrease(){
    score=score-10;
    document.getElementById("img").textContent=score;
}
function increase(){
    score=score+10;
    document.getElementById("img").textContent=score;
}