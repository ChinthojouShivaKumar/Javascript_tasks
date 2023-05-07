var input = prompt("enter your input")

let vowels = ["a","e","i","o","u"]

let cons = ["b","s","h"]

let num = ["1","2","3","4","5","6","7","8","9","10"]

let vowelString = ""

let consString = ""

let numString = ""


for (let i=0; i<input.length; i++) {
    let letter = input[i]
    if (vowels.includes(letter)){
        vowelString += letter + " "
    }
    else if (cons.includes(letter)) {
        consString+= letter + " "
    }
    else if (num.includes(letter)) {
        numString+= letter+ ""
    }
}

alert("the vowels are "+vowelString+", and consonants are "+consString+" and numbers are "+numString)

output:-the vowels are i a , and consonants are s h  and numbers are 123
