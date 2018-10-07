

function hideResults() {
    document.getElementById("results").style.display = "none";
} 

function rollDice(){
     var dice1 = Math.floor(Math.random() * 6) + 1;
     var dice2 = Math.floor(Math.random() * 6) + 1;
   // alert(dice1 + dice2);
     return dice1 + dice2;
}

function play() {

    var startingBet = parseInt(document.getElementById("betInput").value,10);
    var bet = startingBet;
    var betsArray = [];
    var diceRoll = 0;
  
    if(startingBet<=0){
        alert("Invalid input - Starting Bet should be greater than 0");
    }

    while (bet > 0) {
        //call rollDice to get the randomly generated sum of dice
        diceRoll = rollDice();
        if(diceRoll != 7) {
            bet = bet - 1;
        } else { 
            bet = bet + 4;
        }
        betsArray.push(bet);
        diceRoll = 0;
       
    }

    /****alert("Bets array" + betsArray.length);*****/
 /*   var highestWin=0;
    var highestPosition=0;
  for (var arrayPosition = 0; arrayPosition < betsArray.length; arrayPosition++) {
        if(betsArray[arrayPosition] > betsArray[arrayPosition + 1]){
            highestWin = betsArray[arrayPosition];
         } 
        else{
            highestWin = betsArray[arrayPosition+1];
         }  
         var maxsofar = highestWin;
         if (highestWin > maxsofar) {
            maxsofar = highestWin;
            highestPosition = arrayPosition + 1;}
       
        }  */

         //max
        var maxs = 0;
        var maxsoFar = 0;
         var maxPos = 0;
         var maxPosition = 0;
        for(var counter = 0; counter < betsArray.length; counter++)
        {
         if(betsArray[counter] > maxs)
         {
          maxs = betsArray[counter];
        
          maxPos = counter + 1;
         } 

         if(maxs > maxsoFar){
           maxsoFar = maxs;
           maxPosition = counter + 1}
          
         } 
       
   // alert ("highest win" + highestWin);
    var rollCounter = betsArray.length;

    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestWin").innerHTML = "$" + maxsoFar + ".00";
    document.getElementById("resultsRollHighest").innerHTML = maxPosition;
    };

    showResults();
} 