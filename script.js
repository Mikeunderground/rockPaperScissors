
const playerSelection = "Rock";

for(let i = 0; i < 5; i++){
    game(); 
}

function game(){
    

        function computerPlay(){
            randomNum = Math.floor(Math.random() * 10 - 1);
                if(randomNum === -1){
                    return randomNum + 2;
                }
        
        
            console.log(randomNum)
        
            var computerSelection
        
            switch(randomNum){
                case 0:
                    console.log('Rock');
                    computerSelection = "Rock";
                    break;
                case 1:
                    console.log('Rock');
                    computerSelection = "Rock";
                    break;
                case 2:
                    console.log('Rock');
                    computerSelection = "Rock";
                    break;
                case 3:
                    console.log('Rock');
                    computerSelection = "Rock";
                    break;
                case 4:
                    console.log('Paper');
                    computerSelection = "Paper";
                    break;
                case 5:
                    console.log('Paper');
                    computerSelection = "Paper";
                    break;
                case 6:
                    console.log('Paper');
                    computerSelection = "Paper";
                    break;
                case 7:
                    console.log('Scissors');
                    computerSelection = "Scissors";
                    break;
                case 8:
                    console.log('Scissors');
                    computerSelection = "Scissors";
                    break;
                case 9:
                    console.log('Scissors');
                    computerSelection = "Scissors";
                    break;
            }
            return computerSelection;
            
        }
        
        function playRound(playerSelection, computerSelection){
            
            if(playerSelection === computerSelection){
                return "IT'S A TIE!!!"
            } else if (playerSelection == 'Rock' & computerSelection == 'Paper'){
                return "Paper beats rock! Computer wins!";
            } else if (playerSelection == 'Paper' & computerSelection == 'Scissors'){
                return "Scissors beats paper! Computer wins!"
            } else if (playerSelection == 'Scissors' & computerSelection == 'Rock'){
                return "Rock beats scissors! Computer wins!"
            } else if (playerSelection == 'Rock' & computerSelection == 'Scissors'){
                return "Rock beats scissors! Player wins!"
            } else if (playerSelection == 'Paper' & computerSelection == 'Rock'){
                return "Paper beats rock! Player wins!"
            } else if (playerSelection == 'Scissors' & computerSelection == 'Paper'){
                return "Scissors beats paper! player wins!"
            } else {
                console.log(computerSelection);
                return "Wtf just happened?"
                
            }
        }
    
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

};

