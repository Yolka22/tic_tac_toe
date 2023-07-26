let current_player = "X";
const winConditions = [
    // Горизонтальные линии
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  
    // Вертикальные линии
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    // Диагонали
    [0, 4, 8],
    [2, 4, 6]
  ];

  let boardArray = ["", "", "", "", "", "", "", "", ""];


  const updateBoard = () => {
    for (let i = 0; i < $(".cell").length; i++) {
      const element = $($(".cell")[i]);
      boardArray[i]=element.text();
    }
  }

  function checkWin(current_player) {
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (boardArray[a] === current_player && boardArray[b] === current_player && boardArray[c] === current_player) {
        return true;
      }
    }
    return false;
  }

const switchPlayer = () => {
  current_player == "X" ? current_player = "O" : current_player = "X";
}

const reset = () =>{
    $(".cell").text("")
    boardArray = ["", "", "", "", "", "", "", "", ""];
    $(this).remove();
    $("#win").empty();
    current_player = "X";
    activateMap();
}

const activateMap = () =>{
    $(".cell").css("cursor","pointer")
  $(".cell").on("click", function(){

    

    $(this).text(current_player);
    updateBoard();
    if (checkWin(current_player)) {
        showWinner()
    }
    switchPlayer();
    $(this).off("click");
  });
}

const showWinner = () =>{
    $("#win").text(("Player " + current_player + " Win!"));
    $("#win").addClass("winner");
    $(".cell").css("cursor","auto")
    $(".cell").off("click");
    $("#win").append($("<div>Reset</div>").addClass("reset-button"))
    $(".reset-button").on("click",reset)
}

$(function(){
    activateMap();
});

