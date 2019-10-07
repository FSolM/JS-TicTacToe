/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

export const board = (() => {
  const render = (gameBoard) => {
    let result = '';
    gameBoard.forEach((value) => {
      result += `<div class="board-game-cell">
                   <span class="board-game-cell-value">${value}</span>
                 </div>`;
    });
    document.getElementById('board').innerHTML = result;
  };

  const welcome = (nameP1, nameP2) => {
    const playerForm = document.getElementById('player-input');
    playerForm.classList.add('set-hidden');
    playerForm.classList.remove('player-input');
    const versus = document.getElementById('versus-container');
    versus.classList.remove('set-hidden');
    versus.innerHTML = `<h1>${nameP1} (X) vs ${nameP2} (O)</h1>`;
  };

  return { render, welcome };
})();
