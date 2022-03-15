/*
The receivesAFunction function should:
    -take a callback function as an argument
    -call the callback function
    -it doesn't matter what this function returns, so long as it calls the callback function
*/

function frogHouse () {
    console.log("it's frog time!");
}

function receivesAFunction(frogHouse) {
frogHouse(); 
}

// test 1 passed! 

/*
The returnsANamedFunction function should:
    -take no arguments
    -return a named function
*/


function returnsANamedFunction() {
return function frogDuty(){
    console.log("hey-ho!");
}
}

//  test 2 passed! 

/*
The returnsAnAnonymousFunction function should:
    -take no arguments
    -return an anonymous function
*/

function returnsAnAnonymousFunction(){
    return function (){
        console.log("what are you doing here?!");
    }
}