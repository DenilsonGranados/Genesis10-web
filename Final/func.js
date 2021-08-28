function get_number(prompt) {
    let valid_input = false;
    let maxium, input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
    
        maxium = Number(input);

    
        if(maxium != NaN && maxium > 0) {
            valid_input = true;
        }else if (Number.isNaN(maxium)){
            prompt="That was not a number";
        }else if (maxium<0){
            prompt="number cannot be negative";
        }else if (maxium==0){
            prompt="cannot be 0";
        }   
    }

    return maxium;
}

