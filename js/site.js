
//1.get values from the interface
//start controller function

function getValues () {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

//3.validate input / parse into integers

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
//5.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    numbers = generateNumbers(fizzValue, buzzValue);

    } else {
    alert("You must enter a number!");
}
    let fbdata = FizzBuzz(fizzValue, buzzValue);
}

//logic functions
//generate numbers from the fizzValue to the buzzValue

function generateNumbers(fizzValue, buzzValue) {

    let numbers = [];
    

}
