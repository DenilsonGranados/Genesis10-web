/// See solution

let para1= document.getElementById("Guess");
let para2= document.getElementById("Flip");
let para3= document.getElementById("Results");
function guessTails(){
    let flip= Coin_toss();
    console.log(flip);
    para1.innerHTML="You guessed Tails";
    if (flip=="Tails"){
        para2.innerHTML="The coin flips and comes up Tails";
        para3.innerHTML="Good Guess!";
    }else if (flip=="Heads"){
        para2.innerHTML="The coin flips and comes up Heads";
        para3.innerHTML="Bad Guess!";   
    }
}

function guessHeads(){
    let flip= Coin_toss();
    console.log(flip);
    para1.innerHTML="You guessed Heads";
    if (flip=="Tails"){
        para2.innerHTML="The coin flips and comes up Tails";
        para3.innerHTML="Bad Guess!";
    }else if (flip=="Heads"){
        para2.innerHTML="The coin flips and comes up Heads";
        para3.innerHTML="Good Guess!";   
    }
}