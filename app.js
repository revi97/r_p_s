const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard =
{
    player: 0,
    computer: 0
};

// To play game
function play(e)
{
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);

    showWinner(winner,computerChoice);
}

// Getting the computers choice

function getComputerChoice()
{
    const rand = Math.random();
    if(rand<0.34)
    {
        return 'rock';
    }
    else if(rand <= 0.67)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

//Selecting the winner

function getWinner(p,c)
{
    if(p === c)
    {
        return 'draw';
    }
    else if(p === 'rock')
    {
        if(c == 'paper')
        return 'computer';
        else 
        return 'player';
    }
    else if(p === 'paper')
    {
        if(c === 'scissors')
        {
            return 'computer';
        }
        else
        return 'player';
    }
    else if(p === 'scissors')
    {
        if(p === 'rock')
        {
            return 'computer';
        }
        else
        return 'player';
    } 

}

function showWinner(winner,computerChoice)
{
    if(winner === 'player')
    {
        //Incrimenting player score 
        scoreboard.player++;

        //show result
        result.innerHTML = `
                            <h1 class="text-win">You Win</h1>
                            <i class ="far fa-hand-${computerChoice} fa-10x"></i>
                            <p>Computer chose <strong>${computerChoice}</strong></p>
                             `;   
    }
    else if(winner === 'computer')
    {
        //Incrimenting computer score 
        scoreboard.computer++;

        //show result
        result.innerHTML = `
                            <h1 class="text-lose">You Lose</h1>
                            <i class ="far fa-hand-${computerChoice} fa-10x"></i>
                            <p>Computer chose <strong>${computerChoice}</strong></p>
                             `; 
    }
    else
    {
        result.innerHTML = `
                            <h1 class="draw">DRAW</h1>
                            <i class ="far fa-hand-${computerChoice} fa-10x"></i>
                            <p>Computer chose <strong>${computerChoice}</strong></p>
                             `; 
    }

    //show score
    score.innerHTML = `
                        <p>Player : ${scoreboard.player}</p>
                        <p>Computer : ${scoreboard.computer}</p>
                      `;

     //Bringing the resul;t front            
      modal.style.display = 'block';
   
}

//clear screen to take next turn

function clearModal(e)
{
    if(e.target === modal)
    {
        modal.style.display = 'none';
    }
}

//to restart the  game

function restartGame()
{
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
                        <p>Player : 0</p>
                        <p>Computer : 0</p>
    
                        `;

}


// Event Listners
 
choices.forEach(choice => choice.addEventListener('click',play));

//clear the window on click

window.addEventListener('click',clearModal);

//to restart the game

restart.addEventListener('click',restartGame);


