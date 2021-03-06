
//get values from the interface
//start controller function

function getValues () {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

//parse into integers

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

//Check the numbers for integers

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    

//call fizzbuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        //call display values and write the values to the screen
        displayData(fbArray);
    } else {
    alert("You must enter an integer!");
    }
    
}

//Do fizz buzz

function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        //check to see if divisible by both 3 and 5
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz')
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }  
    } 

    return returnArray;   
}

//loop over the array and create a tablerow for each item.
function displayData(fbArray) {

    //get table body element from the page
    let tableBody = document.getElementById("results");

    //get the template
    let templateRow = document.getElementById("fbTemplate");
    
    //clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        //grab the td's to put into array
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+ 1];
        
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];
        
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];
        
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index +4];        

        //add all the rows to the table
        tableBody.appendChild(tableRow);
    }
    
    
    

}
