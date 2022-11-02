let playersTurn = 0;
let fieldContent = [];

function loadTicTacToeGame(){
    document.body.innerHTML = `
    
    <div></div>
    
    <table>
    <tr>
        <td onclick="fillFieldContent(0)" id="field0" ></td>
        <td onclick="fillFieldContent(1)" id="field1"></td>
        <td onclick="fillFieldContent(2)" id="field2"></td>
    </tr>

    <tr>
        <td onclick="fillFieldContent(3)" id="field3"></td>
        <td onclick="fillFieldContent(4)" id="field4"></td>
        <td onclick="fillFieldContent(5)" id="field5"></td>
    </tr>

    <tr>
        <td onclick="fillFieldContent(6)" id="field6"></td>
        <td onclick="fillFieldContent(7)" id="field7"></td>
        <td onclick="fillFieldContent(8)" id="field8"></td>
    </tr>
</table>`;
}

function changePlayersTurn(){
    if (playersTurn == 0){
        playersTurn++;
    }else if(playersTurn !== 0){
        playersTurn--;
    }
}

function fillFieldContent(id){
    checksIfSelectInputFieldIsFilled(id);
    renderFieldContent();
    winnerWinnerChickenDinner();
}

function checksIfSelectInputFieldIsFilled(id){
    if(fieldContentIsNotEqualFilled(id)){
        checksWhichPlayerIsActiveAndFillsArrayWithTheSymbol(id);
    } else{
        return
    }
}

function checksWhichPlayerIsActiveAndFillsArrayWithTheSymbol(id){
    if (playersTurn == 0){
        fieldContent[id] = '✖';
        changePlayersTurn();
    }else if (playersTurn == 1){
        fieldContent[id] = 'O';
        changePlayersTurn();
    }
}


function renderFieldContent(){
    for (let i = 0; i < fieldContent.length; i++) {
        let selectedField = document.getElementById(`field${i}`);
        if (fieldContent[i] !== undefined){
            selectedField.innerHTML = fieldContent[i];
        }else{
            selectedField.innerHTML = '';
        }
        
    }
}

function fieldContentIsNotEqualFilled(id){
    return fieldContent[id] == undefined;
}

function winnerWinnerChickenDinner(){
    let winnerIs;

    //Horizontal winning conditions
        if (fieldContent[0] == fieldContent[1] && fieldContent[1] == fieldContent[2] && fieldContent[0] ){/*Last condition checks if fieldContent exsists/is filled, if yes then fill winnerIs*/
            winnerIs = fieldContent[0];
        }
        if (fieldContent[3] == fieldContent[4] && fieldContent[4] == fieldContent[5] && fieldContent[3]){
            winnerIs = fieldContent[3];
        }
        if (fieldContent[6] == fieldContent[7] && fieldContent[7] == fieldContent[8] && fieldContent[6]){
            winnerIs = fieldContent[6];
        }
    
    //Vertical winning conditions
        if (fieldContent[0] == fieldContent[3] && fieldContent[3] == fieldContent[6] && fieldContent[0]){
            winnerIs = fieldContent[0];
        }
        if (fieldContent[1] == fieldContent[4] && fieldContent[4] == fieldContent[7] && fieldContent[1]){
            winnerIs = fieldContent[1];
        }
        if (fieldContent[2] == fieldContent[5] && fieldContent[5] == fieldContent[8] && fieldContent[2]){
            winnerIs = fieldContent[2];
        }

    //Diagonal winning conditions
        if (fieldContent[0] == fieldContent[4] && fieldContent[4] == fieldContent[8] && fieldContent[0]){
            winnerIs = fieldContent[0];
        }
        if (fieldContent[2] == fieldContent[4] && fieldContent[4] == fieldContent[6] && fieldContent[2]){
            winnerIs = fieldContent[2];
        }

        if(winnerIs){
            console.log('Winner is:', winnerIs)
        }
} 