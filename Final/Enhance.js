let guessArray= [];
let max=get_number("Provide maximum number")
let target= Math.floor(Math.random()*max)+1;
console.log(target)

function do_guess(){
    let message= document.getElementById("message");
    let guess= Number(document.getElementById("guess").value);
    if (guess !=NaN && guess>0 && guess<=max){
        if (guessArray.indexOf(guess) != -1){
            message.innerHTML=" Number already guessed"
        }else if (guess==target){
            guessArray.push(guess)
            message.innerHTML= 'You got it! It took '+ (guessArray.length) +" tries and your guesses were "+guessArray;
        }else if (guess > target){
            guessArray.push(guess)
            message.innerHTML= "Guess was too high";
        }else if (guess < target){
            guessArray.push(guess)
            message.innerHTML="Guess was too low";
        }
    }else if (guess==NaN){
        message.innerHTML="Number has to be a number";
    }else if (guess<1 || guess>max){
        message.innerHTML="Number is out of range";
    }
}