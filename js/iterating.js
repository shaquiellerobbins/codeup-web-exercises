(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Bob", "Sara", "Jon", "Ben"]
    console.log(names)
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log (names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names [0] );
    console.log(names [1] );
    console.log(names [2] );
    console.log(names [3] );
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log("Name " + i + " is: "+ names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(nombre) {
        console.log("The person that will be called is: " + nombre + "!");
    });




    //firstItem
    var citiesInTx = ["Fort Worth", "San Antonio", "Houston", "Dallas"]
    function firstItem(city){
        return ("I love " + city[0] + "!!!")
    }
    firstItem(citiesInTx)

//secondCity
    function secondCity(city){
        return (city[1] + " is okay. I guess the River Walk is kind of fun.")
    }
    secondCity(citiesInTx)

//thirdCity
    function thirdCity(city){
        return (city[2] + " is the worst!!!")
    }
    thirdCity(citiesInTx)
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//firstItem
    var citiesInTx = ["Fort Worth", "San Antonio", "Houston", "Dallas"]
    function firstItem(city){
        return ("I have never been to " + city[0] + ".")
    }
    console.log(firstItem(citiesInTx))

//secondCity
    function secondCity(city){
        return (city[1] + " is where I live.")
    }

    console.log(secondCity(citiesInTx));

//thirdCity
    function thirdCity(city){
        return (city[2] + " is my favorite")
    }

    console.log(thirdCity(citiesInTx));
})();