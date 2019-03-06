$(document).ready(function(){

    var move = 1;
    var play = true;

    $("#board tr td").click(function(){

        if($(this).text()==="" && play === true){
            if((move % 2 === 1)){
                $(this).append('X');
            }
            else
                $(this).append('O');
            move++;
        }

        if(checkWin() === "X"){
            $("#output").text("PLAYER 1 WINS!!  PRESS RESET TO TRY AGAIN.");

        }
        else if(checkWin() === "O"){
            $('#output').text("PLAYER 2 WINS!!  PRESS RESET TO TRY AGAIN.");

        }
        else if(checkWin() === -1 && move === 10){
            $('#output').text("CATS GAME  PRESS RESET TO TRY AGAIN.");
        }


    })

    $('#reset').click(function(){
        move = 1;
        reset();
    })
});

var checkWin = function(){

    var space = [];

    for(var i = 0; i < 9; i++){
      space[i] = $("#space" + i).text();
    }

    if((space[0] === space[1]) && space[1]===space[2]){return space[2];}

    else if((space[3] === space[4]) && space[4]===space[5]){return space[5];}

    else if((space[6] === space[7]) && space[7]===space[8]){return space[8];}

    else if((space[0] === space[3]) && space[3]===space[6]){return space[6];}

    else if((space[1] === space[4]) && space[4]===space[7]){return space[7];}

    else if((space[2] === space[5]) && space[5]===space[8]){return space[8];}

    else if((space[0] === space[4]) && space[4]===space[8]){return space[8];}

    else if((space[2] === space[4]) && space[4]===space[6]){return space[6];}

    return -1;


};

var reset = function(){

    for(var i = 0; i < 9; i++){
        $("#space" + i).text("");
    }

    $('#output').text("");

};