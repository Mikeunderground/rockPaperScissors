function computerPlay(){
    randomNum = Math.floor(Math.random() * 10 - 1);
    console.log(randomNum)

    switch(randomNum){
        case 0:
            computerPlay();
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
}

function (playerSelection, computerSelection)


computerPlay();