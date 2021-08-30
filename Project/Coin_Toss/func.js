function Coin_toss(){
    let result= Math.round(Math.random())
    if (result===0){
        return "Tails";
    }else {
        return "Heads";
    }
}
