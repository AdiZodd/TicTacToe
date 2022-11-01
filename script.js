let playersTurn = 0;
let fieldContent = [];

function loadTicTacToeGame(){
    document.body.innerHTML = `<table>
    <tr>
        <td onclick="fillFieldContent(0)" id="field0" ></td>
        <td onclick="fillFieldContent(1)" id="field1"></td>
        <td onclick="fillFieldContent(2)" id="field2"></td>
    </tr>
</table>
<table>
    <tr>
        <td onclick="fillFieldContent(3)" id="field3"></td>
        <td onclick="fillFieldContent(4)" id="field4"></td>
        <td onclick="fillFieldContent(5)" id="field5"></td>
    </tr>
</table>
<table class="lastChild">
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
    if (playersTurn == 0){
        fieldContent[id] = '✖';
    }else if (playersTurn == 1){
        fieldContent[id] = 'O';
    }
    changePlayersTurn();
    renderFieldContent();
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