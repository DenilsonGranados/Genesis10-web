function Coin_toss(){
    let result= Math.round(Math.random())
    if (result===0){
        return "Tails";
    }else {
        return "Heads";
    }
}

function state_guess(guess){
    let body= document.querySelector(".container");
    let declaration= document.createElement("p");
    declaration.innerHTML="You guessed "+guess;
    body.appendChild(declaration);
}