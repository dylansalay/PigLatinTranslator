let testString = "Whale Yes Squeal Sequel Apple Fry"


const firstVowel = (str) => {
  // This assumes that the user will not input a word > 25 characters
    let firstVowelLoc = 25
    for (let i = 0; i < str.length; i++){
      // Determines if index of a is < 25 AND is in the string
        if(str.indexOf("a") < firstVowelLoc && str.indexOf("a") !== -1){
          //If string includes a => firstVowelLoc is equal to index of a
            if (str.includes("a")){
                firstVowelLoc = str.indexOf("a")
            }
            // Determines if index of e is < 25 AND is in the string
        }else if (str.indexOf("e") < firstVowelLoc && str.indexOf("e") !== -1){
          //If string includes e => firstVowelLoc is equal to index of e
            if (str.includes("e")){
                firstVowelLoc = str.indexOf("e")
            }
            // Determines if index of i is < 25 AND is in the string
        }else if (str.indexOf("i") < firstVowelLoc && str.indexOf("i") !== -1){
          //If string includes i => firstVowelLoc is equal to index of i
            if (str.includes("i")){
                firstVowelLoc = str.indexOf("i")
            }
            // Determines if index of o is < 25 AND is in the string
        }else if (str.indexOf("o") < firstVowelLoc && str.indexOf("o") !== -1){
          //If string includes o => firstVowelLoc is equal to index of
            if (str.includes("o")){
                firstVowelLoc = str.indexOf("o")
            }
            // Determines if index of u is < 25 AND is in the string
        }else if (str.indexOf("u") < firstVowelLoc && str.indexOf("u") !== -1){
          //If string includes u => firstVowelLoc is equal to index of u
            if (str.includes("u")){
                firstVowelLoc = str.indexOf("u")
            }
        }
    }
    // return the index location of the first vowel
    return firstVowelLoc
}

// For words that begin with a vowel, this function returns that string plus "way"
const function2 = (str) => {
    return str + "way"
}

// For words that begin with a consonant, this function moves all of the consonants up until the first vowel to the end of the string and adds "ay"
const function3 = (str) => {
    return str.substr(firstVowel(str)) + str.substr(0, firstVowel(str)) + "ay"
}

// For strings that begin with "qu", this function moves the "qu" plus any other consonants preceding the first vowel (excluding the "u" in "qu") to the end of the string and adds "ay"
const function4 = (str) => {
    let searchTerm = "qu"
    return str.substr(str.indexOf(searchTerm) + 2) + str.substr(0, str.indexOf(searchTerm) + 2) + "ay"
}


// function takes in a string
const pigLatin = (str) => {
  // converts string to an array with all elements lowercase
    var translate = str.toLowerCase().split(" ")
    const vowels = ["a","e","i","o","u"]
    var finalArr = []
    for (let i = 0; i < translate.length; i++){
      //Assumes that if the string does not contain "a,e,i,o,u" it must contain a "y" vowel
        if(!translate[i].includes("a") && !translate[i].includes("e") && !translate[i].includes("i") && !translate[i].includes("o") && !translate[i].includes("u")){
            finalArr.push(translate[i].substr(translate[i].indexOf("y")) + translate[i].substr(0, translate[i].indexOf("y")) + "ay")
            //If the string begins with a vowel, run function2
        } else if(vowels.includes(translate[i].charAt(0))){
            finalArr.push(function2(translate[i]))
            //If the function does not include "qu", run function3
        } else if(!translate[i].includes("qu")){
            finalArr.push(function3(translate[i]))
            //If we've gotten to this condition, the string must contain "qu" and does not start with a vowel
            // If "qu" is before the first vowel, run function4
        } else if(translate[i].indexOf("qu") < firstVowel(translate[i])){
            finalArr.push(function4(translate[i]))
        } else {
          // Otherwise, run function3
            finalArr.push(function3(translate[i]))
        }
    }
    // Join the string together with spaces between each word
    return finalArr.join(" ")
}

// Submits the user input for translation and outputs the results
function buttonClick(){
  let userInput = document.getElementById("user-input").value
  document.getElementById("user-output").innerHTML = pigLatin(userInput)
  console.log(pigLatin(userInput))
}

function refreshClick(){
  document.getElementById("user-input").value = ""
  document.getElementById("user-output").innerHTML = ""
  console.log(refreshClick())
}

// A function that calls our pig noise
function playSound () {
    document.getElementById('play').play();
}
