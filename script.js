let player = 'X';
let winner = '';
const displayWinner = document.getElementById('winner');
const displayPlayer = document.getElementById('player');
const cells = document.querySelectorAll('.cell');

displayPlayer.innerText = player;

const chooseCell = (cell) => {
  if (cell.innerText !== '-') return;
  if (winner !== '') return;

  cell.innerText = player;
  cell.style.color = 'black';
  
  checkGame();
  if (winner !== displayWinner.innerText) {
    displayWinner.innerText = winner
    return;
  };

  player = player === 'X' ? 'O' : 'X';
  displayPlayer.innerText = player;
};

const checkGame = () => {
  if (cells[0].innerText !== '-'
    && cells[0].innerText === cells[1].innerText
    && cells[0].innerText === cells[2].innerText
  ) {
    console.log('win');
    cells[0].style.backgroundColor = '#0f0';
    cells[0].style.color = 'white';
    cells[1].style.backgroundColor = '#0f0';
    cells[1].style.color = 'white';
    cells[2].style.backgroundColor = '#0f0';
    cells[2].style.color = 'white';

    winner = player;
  } else if (cells[3].innerText !== '-'
    && cells[3].innerText === cells[4].innerText
    && cells[3].innerText === cells[5].innerText
  ) {
    console.log('win');
    cells[3].style.backgroundColor = '#0f0';
    cells[3].style.color = 'white';
    cells[4].style.backgroundColor = '#0f0';
    cells[4].style.color = 'white';
    cells[5].style.backgroundColor = '#0f0';
    cells[5].style.color = 'white';

    winner = player;
  } else if (cells[6].innerText !== '-'
    && cells[6].innerText === cells[7].innerText
    && cells[6].innerText === cells[8].innerText
  ) {
    console.log('win');
    cells[6].style.backgroundColor = '#0f0';
    cells[6].style.color = 'white';
    cells[7].style.backgroundColor = '#0f0';
    cells[7].style.color = 'white';
    cells[8].style.backgroundColor = '#0f0';
    cells[8].style.color = 'white';

    winner = player;
  } else if (cells[0].innerText !== '-'
    && cells[0].innerText === cells[3].innerText
    && cells[0].innerText === cells[6].innerText
  ) {
    console.log('win');
    cells[0].style.backgroundColor = '#0f0';
    cells[0].style.color = 'white';
    cells[3].style.backgroundColor = '#0f0';
    cells[3].style.color = 'white';
    cells[6].style.backgroundColor = '#0f0';
    cells[6].style.color = 'white';

    winner = player;
  } else if (cells[1].innerText !== '-'
    && cells[1].innerText === cells[4].innerText
    && cells[1].innerText === cells[7].innerText
  ) {
    console.log('win');
    cells[1].style.backgroundColor = '#0f0';
    cells[1].style.color = 'white';
    cells[4].style.backgroundColor = '#0f0';
    cells[4].style.color = 'white';
    cells[7].style.backgroundColor = '#0f0';
    cells[7].style.color = 'white';

    winner = player;
  } else if (cells[2].innerText !== '-'
    && cells[2].innerText === cells[5].innerText
    && cells[2].innerText === cells[8].innerText
  ) {
    console.log('win');
    cells[2].style.backgroundColor = '#0f0';
    cells[2].style.color = 'white';
    cells[5].style.backgroundColor = '#0f0';
    cells[5].style.color = 'white';
    cells[8].style.backgroundColor = '#0f0';
    cells[8].style.color = 'white';

    winner = player;
  } else if (cells[0].innerText !== '-'
    && cells[0].innerText === cells[4].innerText
    && cells[0].innerText === cells[8].innerText
  ) {
    console.log('win');
    cells[0].style.backgroundColor = '#0f0';
    cells[0].style.color = 'white';
    cells[4].style.backgroundColor = '#0f0';
    cells[4].style.color = 'white';
    cells[8].style.backgroundColor = '#0f0';
    cells[8].style.color = 'white';

    winner = player;
  } else if (cells[2].innerText !== '-'
    && cells[2].innerText === cells[4].innerText
    && cells[2].innerText === cells[6].innerText
  ) {
    console.log('win');
    cells[2].style.backgroundColor = '#0f0';
    cells[2].style.color = 'white';
    cells[4].style.backgroundColor = '#0f0';
    cells[4].style.color = 'white';
    cells[6].style.backgroundColor = '#0f0';
    cells[6].style.color = 'white';

    winner = player;
  } 
};

const resetGame = () => {
  player = 'X';
  winner = '';
  displayWinner.innerText = winner;
  displayPlayer.innerText = player;
  cells.forEach((cell) => {
    cell.innerText = '-';
    cell.style.color = '#eee';
    cell.style.backgroundColor = '#eee';
  });
};
