// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


console.log("Welcome to Programiz!");


var inputName = "shivakumar"

alert(inputName)

var vowel = ["a","e","i","o","u"] 

vowelString =""



for (let i=0; i<inputName.length; i++) {
    
    let letter = inputName[i]
    if (vowel.includes(letter)) {
        vowelString += letter + " "
    }
    
}

alert(vowelString)



output:-
  
  Welcome to Programiz!
shivakumar
i a u a 
