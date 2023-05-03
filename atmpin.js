var a = prompt("enter input")
var storedPin = "234567"


function atmPin(pin) {
    
    if (pin == storedPin) {
    console.log("your PIN is matched")
    }
    else {
        console.log("your PIN is Mismatched" )
    }
}

atmPin(a)
    

output:-

enter input123466
your PIN is Mismatched

enter input234567
your PIN is matched
