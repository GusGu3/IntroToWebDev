//We do not get a name of a key from an event, instead we get
//a numerical representation, so we need to interpret that
//and choose the right function. 
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
        leftArrowPressed();
        break;
        case 39:
        rightArrowPressed();
        break;
        case 38:
        upArrowPressed();
        break;
        case 40:
        downArrowPressed();
        break;
    }
}

//These 4 functions dictate the style changes to move the player
//element in the right direction
function leftArrowPressed() {
    //get the player element
    var element = document.getElementById("player");
    //change the position, moving the player 10px to the left
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    var element = document.getElementById("player");
    element.style.left = parseInt(element.style.left) + 10 + 'px';
}

function upArrowPressed() {
    var element = document.getElementById("player");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}

function downArrowPressed() {
    var element = document.getElementById("player");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}

//Sets the shape of the player using the border-radius property
function changeShape() {
    //get the selected shape
    var shape = document.getElementById('shapeSelector').value;
    if (shape === "square") {
        //border radius of 0 gives us 90 degree corners
        document.getElementById('player').style.borderRadius = "0px";
    }
    else if (shape === "circle") {
        //border radius of 25px brings each corner in to create a perfect circle
        document.getElementById('player').style.borderRadius = "25px";
    }
}


//array to store clicked buttons
var clicked = [];

//function to randomly populate the task
function fillTask(){
    //make sure array is empty
    clicked = [];
    
    //populate a list of numbers from 1 to 10
    var arr = [];
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 10) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    
    //reset task by removing all inner html
    document.getElementById('row1').innerHTML = '';
    document.getElementById('row2').innerHTML = '';
    
    //go through first 5 numbers to populate first row of numbers
    //first index of list is 0, so indeces are 0-9 instead of 1-10
    for (var i = 0; i< 5; i++){//0,1,2,3,4
        //clicking 10 should close task
        if(arr[i] === 10){
            //This code creates a button and adds it to the table
            //which makes up the task. It also contains a function 
            //to change its own background color to light green.
            //Since we need both single and double quatations, 
            //we can use the ` as well to designate a string
            document.getElementById('row1').innerHTML = 
            document.getElementById('row1').innerHTML +
            `<td><button id="btn`+ arr[i] +`" class="innerTaskButton" ` +
            `onclick="markClicked('`+ arr[i] +`'); closeTask();">` + arr[i] + `</button></td>`;
        }
        else{
            document.getElementById('row1').innerHTML = 
            document.getElementById('row1').innerHTML +
            `<td><button id="btn`+ arr[i] +`" class="innerTaskButton" ` +
            `onclick="markClicked('`+ arr[i] +`')">` + arr[i] + `</button></td>`;
        }
    }
    
    //now do the same for the last 5
    for (var i = 5; i<10; i++){//5,6,7,8,9
        //clicking 10 should close task
        if(arr[i] === 10){
            document.getElementById('row2').innerHTML = 
            document.getElementById('row2').innerHTML +
            `<td><button id="btn`+ arr[i] +`" class="innerTaskButton" ` +
            `onclick="markClicked('`+ arr[i] +`'); closeTask();">` + arr[i] + `</button></td>`;
        }
        else{
            document.getElementById('row2').innerHTML = 
            document.getElementById('row2').innerHTML +
            `<td><button id="btn`+ arr[i] +`" class="innerTaskButton" ` +
            `onclick="markClicked('`+ arr[i] +`')">` + arr[i] + `</button></td>`;
        }
    }
}

//as you might guess, this displays the task
function showTask() {
    document.getElementById('task').style.display = 'initial'
}

//this hides the task
function closeTask(){
    document.getElementById('task').style.display = 'none'
}

//make the task buttons green when clicked 
function markClicked(id){
    //check if previous button is clicked using list of clicked numbers
    var prevClicked = inArray(id-1);
    console.log(prevClicked);
    if (id > 1 && prevClicked === false)
    {
        clicked = [];
        //remove the bacground color for each button if clicked out of order
        for (var i = 1; i<11; i++){//start at 1 and go to 11 since those are the button ids 
            document.getElementById('btn'+i).style.backgroundColor = '';
        }
    }
    else {
        clicked.push(id);
        document.getElementById('btn'+id).style.backgroundColor = 'lightgreen';
    }
}

function inArray(num) {
    //check if a number is in our array. Since return true will stop the funciton,
    //We don't need to put another check around return false. If it never returns
    //true, it will return false
    for (var i = 0; i<clicked.length; i++){
        console.log(num + ' is ' + clicked[i]);
        if (clicked[i] == num){
            return true;
        }
    }
    return false;
}

        
        
        
        
        
        
        
        
        
        
        