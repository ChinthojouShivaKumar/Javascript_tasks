console.log("Welcome to Programiz!");

function shiva(string) {
var inputName = string.split('')

var array = []

for (let i=inputName.length;  i>-1; i--) {
    array.push(inputName[i])
}
return array.join('')
}
alert(shiva("shivakumar"))


output:- 
  Welcome to Programiz!
ramukavihs
