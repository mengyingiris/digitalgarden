//here is our array of aphorisms



//here is our array of aphorisms
let aphorisms = ["sunlight", "sunset", "sea wave", "chestnut praline", "maple leaf", "brook", "colors","forest"]

function random_aphorism() {
     //create a random number based on length of the array
     //let r = Math.floor(Math.random() * aphorisms.length)
      let r = getRandom(aphorisms.length)
     //pull a random item from the array
     let random_item = aphorisms[r]
     //log the value of the item
     console.log(random_item)
  //write the value to the document/window
    let output_space = document.getElementById("aphorism")
    output_space.innerText = random_item
    //after outputting the random value, run again 5 seconds later
  //these values in paratheses are called arguments
    setTimeout("random_aphorism()", 1500);

}

//call the function initially when the script loads
random_aphorism()

//a function can do seomthing or calculate something
function getRandom(len) {
   let r = Math.floor(Math.random() * len)
   return r
}

//instead of calling the function, we access its result
//let randNum = getRandom()
//console.log('random number returned', randNum)
//get the length (property) of the array
let array_length = aphorisms.length
let randNum = getRandom(array_length)
console.log('random number', randNum)


//javascriot / html / css DOM (document object model) code demonstration

//access a tag/element
let output_space = document.getElementById("aphorism")
//change its contents
output_space.innerText = aphorisms[4]
//change its style
output_space.style.letterSpacing = "normal"



let str = "work is pushing past resistance"

let substrs = str.substring(0,4)
console.log(substrs)
