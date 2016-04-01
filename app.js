console.log('Tic Tac Toe is Online')

//TO DO FINISH CSS > MAKE A NICE COUNTER.
//PLAY TO FIVE WINS?

//CHECK REMOVE EVENT LISTENER

var playerTurn = 0;
var board = document.getElementById("boardB");
var cells = {
  tl:'this is tl',
  tm:'this is tm',
  tr:'this is tr',
  ml:'this is ml',
  mm:'this is mm',
  mr:'this is mr',
  bl:'this is bl',
  bm:'this is bm',
  br:'this is br',
}
var rounds = 0;

var xWins = 0;
var oWins = 0;

var won = false;


// winCount(); //needed so that scores (0-0) display when pages loads.
//checks and increments the turns and changes the background
board.addEventListener('click', function(event) {
    if (won) {
      return;
    }
        var cell = event.target;
    if(cell.className === "box" && cell.innerHTML !== "X" && cell.innerHTML !== "O" && xWins < 5 && oWins < 5){
      console.log(xWins + " " + oWins)
       if (playerTurn === 0) {
          cell.innerHTML = 'X',
          cell.style.backgroundColor = 'blue';
          document.getElementById('playerChoice').innerHTML = 'O To Move!';
          playerTurn ++;
          // console.log('CHECK ' + playerTurn + ' <= should be one ')
        } else if  (playerTurn === 1) {
          cell.innerHTML = 'O'
          cell.style.backgroundColor = 'red';
          document.getElementById('playerChoice').innerHTML = 'X to Move!';
          playerTurn --;
          // console.log('CHECK ' +playerTurn + ' <= should be zero')
      }} else {return;}
     }
);


board.addEventListener('click', function(event) {
  if (won) {
    return;
  }
        var cell = event.target;


        // console.log(event);
        cells[cell.id] = cell.innerHTML;
        // console.log(event.target.id)
                      // console.log(cells)
    if ( xWins < 5 && oWins < 5) {
      console.log('wins are less than five')
      for(var prop in cells) {
          if(cells.hasOwnProperty(prop)) {
                if(cells.tm === "X" && cells.tl === "X" && cells.tr === "X") {
                  document.getElementById('winner').innerHTML= 'X Wins round ' + (rounds +1)
                  xWins++;
                  rounds++;
                  console.log('its here');
                  winCount();
                  return;
                }else if (cells.mm === "X" && cells.ml === "X" && cells.mr === "X") {
                  document.getElementById('winner').innerHTML='X Wins round ' + (rounds +1)
                  xWins++;
                  rounds++;
                  console.log('its here');
                  winCount();
                  return;
                } else if (cells.bm === "X" && cells.bl === "X" && cells.br === "X"){
                  document.getElementById('winner').innerHTML='X Wins round ' + (rounds +1)
                  xWins++;
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bl === "X" && cells.ml === "X" && cells.tl === "X"){
                  document.getElementById('winner').innerHTML='X Wins round ' + (rounds +1)
                  xWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bm === "X" && cells.mm === "X" && cells.tm === "X"){
                  document.getElementById('winner').innerHTML='X Wins  round ' + (rounds +1)
                  xWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.br === "X" && cells.mr === "X" && cells.tr === "X"){
                  document.getElementById('winner').innerHTML='X Wins round ' + (rounds +1)
                  xWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bl === "X" && cells.mm === "X" && cells.tr === "X"){
                  document.getElementById('winner').innerHTML='X Wins round ' +(rounds +1)
                  xWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.tl === "X" && cells.mm === "X" && cells.br === "X"){
                  document.getElementById('winner').innerHTML='X Wins round ' + (rounds +1)
                  xWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bm === "O" && cells.bl === "O" && cells.br === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bl === "O" && cells.ml === "O" && cells.tl === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bm === "O" && cells.mm === "O" && cells.tm === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.br === "O" && cells.mr === "O" && cells.tr === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.br === "O" && cells.mm === "O" && cells.tl === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.tl === "O" && cells.mm === "O" && cells.br === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.bl === "O" && cells.mm === "O" && cells.tr === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }else if (cells.mr === "O" && cells.mm === "O" && cells.ml === "O"){
                  document.getElementById('winner').innerHTML='O Wins round ' + (rounds +1)
                  oWins++
                  rounds++;
                  console.log('its here');
                  winCount();
                    return;
                }
              }
            }}
            else {console.log("should stop")}
  checkDraw();
  // winCount();
})

function checkDraw() {
  var drawDraw = 0;
  Object.getOwnPropertyNames(cells).forEach(function(val) {

        if(cells[val] === 'X'|| cells[val] === 'O')
          {drawDraw++
            // console.log(drawDraw)
          }

  if (drawDraw === 9) {
  document.getElementById('winner').innerHTML='DRAAAAAAAAW!!!'}
  });
}

function winCount(){
  console.log('someone won')
  won = true;
  if(xWins === 5) { document.getElementById('winner').innerHTML='X Is The CHAMP!'
    document.getElementById('xWinCounter').innerHTML = "X : " + xWins + " WINS.";
    document.getElementById('oWinCounter').innerHTML = "O : " + oWins + " WINS.";
  }else if ( oWins === 5 ) {document.getElementById('winner').innerHTML='O Is The CHAMP!'
    document.getElementById('xWinCounter').innerHTML = "X : " + xWins + " WINS.";
    document.getElementById('oWinCounter').innerHTML = "O : " + oWins + " WINS.";
  }else if(xWins <5 || oWins<5){
    document.getElementById('xWinCounter').innerHTML = "X : " + xWins + " WINS.";
    document.getElementById('oWinCounter').innerHTML = "O : " + oWins + " WINS.";
  }

}


///RESET BUTTON
reset.addEventListener('click', function(event) {
for(i=0;i<9;i++){
  document.getElementsByClassName('box')[i].style.backgroundColor = 'green';
  document.getElementsByClassName('box')[i].innerHTML = '';
  cells.tl ='this is tl';
  cells.tm ='this is tm';
  cells.tr ='this is tr';
  cells.ml ='this is ml';
  cells.mm ='this is mm';
  cells.mr ='this is mr';
  cells.bl ='this is bl';
  cells.bm ='this is bm';
  cells.br ='this is br';
  playerTurn = 0;
  won = false;
  document.getElementById('playerChoice').innerHTML = 'X To Move!';
}
})

resetAll.addEventListener('click', function(event) {
  location.reload();
} )
