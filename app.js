let p1 =0;
let p2 = 0;
let score = document.querySelector(".score");
score.innerHTML = `${p1} vs ${p2}`;
let maxScore=3;
 let btn1 = document.querySelector('#btn1');
let selectb = document.querySelector('select');
selectb.addEventListener('click', function(){
    maxScore = parseInt(this.value);
})
btn1.addEventListener("click", function (){
    if(checkScore()){
        p1 +=1;
        updateScore();
        }
}) 
btn2.addEventListener("click", function (){
    if(checkScore()){
    p2 +=1;
    updateScore();
    }
}) 
btn3.addEventListener("click", function (){
    p1=0;
    p2=0;
    updateScore();
}) 
function updateScore(){
    score.innerText = `${p1} vs ${p2}`;
}
function checkScore(){
    if(p1>=maxScore||p2>=maxScore){
        if(p1==maxScore){
            score.innerHTML = `<font color="green">${p1}</font> vs <font color="red">${p2}</font>`;
        } else {
            score.innerHTML = `<font color="red">${p1}</font> vs <font color="green">${p2}</font>`;
        }
        disableButton();
        return false;
    } else {
        return true;
    }
}
function disableButton(){
}
function resetButton(){

}