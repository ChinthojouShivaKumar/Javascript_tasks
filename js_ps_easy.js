 //converting minutes in to seconds
        var minute = prompt("enter minutes to display seconds")

        function minutes(minute) {
        return minute*60
        }
        minutes(minute)

        console.log("the minutes"+minute+" as "+minutes(minute) + " in seconds")

// sum of numbers

        function sum(a,b) {
            return a+b
            
        }
        sum(2,3)
        console.log("the sum of given input is " +sum(2,3))

        // increment of numbers using input in functions

        var number1 = prompt("enter input")

        var number = parseInt(number1)
        function incrementNumber(number) {

            for (let i=number1; i<10; i++) {
            console.log(i)
            }
        }
        console.log(incrementNumber(number))

   // calculating age in days using input as years

     
        function ageInYears(){
            var ageInYear = prompt("enter person age in years to display output of your age in days")
            
           
            var days = ageInYear*365
            
            console.log("the age of "+ageInYear+" years person have in "+days+ " days.")

        }
        ageInYears()

    // voltage and current 

        var voltage = prompt("enter voltage volts")
        var current = prompt("enter current in amps")

        function power(voltage, current) {
            var power = voltage*current
            console.log("the units of power in"+voltage+"volts and "+ current+ " in amperes has"+ power +"volt-amp")
        }
        power(voltage,current)

//either one of condition is true

function checkBool(a,b) {
    if(a+b==10 || a==10|| b==10){
        console.log("true")
    }
    else{
        console.log("false")
    }
}   
checkBool(15)

// string something joined with space

var strName = "something"

function string(a){
    
    var a = a.toString()

    var b = a+" "+strName
    
    console.log(b)
}
string(42)

// finding true or false taking an argment as string

function strNames(a,b) {
    
    if(a=="shiva") {
        if(b="kumar"){
            console.log("true")
        }
        
    }
    else{
        console.log('false')
    }
}
strNames("shiva","kumar")

// reversing string case uppertolower and lowertoupper

var a = "Hello Birthday"

var a1 = a[0].toLowerCase()+(a.slice(1,6).toUpperCase())
var a2 = a[6].toLowerCase()+(a.slice(7,15).toUpperCase())

console.log(a1+a2)

//checking Datatype with input and using function with argument
var a = 100;
var b = "shiva"

function check(a){
console.log(typeof(a))
console.log(typeof(b))
}
check(a)

//finding greatest number using terinary operator

var a = 4
var b = 8
var c = 2

let greatest = (a>b)&&(a>c)?a:(b>c)?b:c;
console.log(greatest)

// finding vowels and their count
function vowels(){

var a ="celebration"

var count=0

var str =''

for(let i=0;i<a.length;i++){
       let b = a[i]
       
        if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u"){
             str+=b+' '
             count++
    }
}
alert(str+"are the vowels in "+a+" and the count of number of vowels are " +count)

}
vowels()


// pattern of a number


var str=''
for(let i=1;i<6;i++){
    str+=i+' '
    alert(str)
}

output:- 
 
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 


//factorial of number

console.log("Welcome to Programiz!");

var n = 5

var y = n*(n-1)*(n-2)*(n-3)*(n-4)


console.log(y)

//reverseCase string



var a = 'Happy Birthday'
var str = ''
for(i=0;i<a.length;i++){
    let b = a[i]
    if(b>='a'&&b<='z') {
        str+=b.toUpperCase()+' '
       
    }
    else if(b>='A'&&b<='Z'){
        str+=b.toLowerCase()+' '
        
    }
    else{
        str+=b+' '
    }
}
console.log(str)

// power of number

var num = 5;
var pow = 3;

var result = num**pow

console.log(result)

//consonants and vowles count in given string

function vowels(){

var a ="i am shivakumar"

var vowel=0

var consonants=0


var str =''
var str1=''

for(let i=0;i<a.length;i++){
       let b = a[i]
       
        if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u"){

             str+=b+' '
             
             vowel++
             
    }
    else{
        str1+=b+' '
        consonants++
        
    }
}
console.log(str+"are the vowels in "+a+" and the count of number of vowels are " +vowel)

console.log(str1+'are the consonants in '+a+ "and the count of number of consonants are "+consonants)

}
vowels()

// output:-

// i a i a u a are the vowels in i am shivakumar and the count of number of vowels are 6
// m   s h v k m r are the consonants in i am shivakumarand the count of number of consonants are 9

console.log("Welcome to Programiz!");


var letter = "abcdefghtijklmnopqrstuvwxyz"

var str = ''


for(let i=0;i<letter.length;i++){
    b = letter[i]
    b=b.toUpperCase()
    str+=b+i+' '
    
    
}
console.log(str)

// Welcome to Programiz!
// A0 B1 C2 D3 E4 F5 G6 H7 T8 I9 J10 K11 L12 M13 N14 O15 P16 Q17 R18 S19 T20 U21 V22 W23 X24 Y25 Z26 

console.log("Welcome to Programiz!");

var a = [5,5,5,5,5,5,5,5,5,5]

function phoneNum(a){
    
    var b = '('+a[0]+a[1]+a[2]+')'
    var c = ' '+a[3]+a[4]+a[5]
    var d = '-'+a[6]+a[7]+a[8]+a[9]
    
    console.log(b+c+d)
    
}
phoneNum(a)

// Welcome to Programiz!
// (555) 555-5555

function ascendingOrder(ar1){
   let ab =  ar1.sort()
   return ab
}

let h = ascendingOrder(['a','ccc','bb','dddd'])
console.log(h);

//output

//'a','bb'.'ccc','dddd'


function secondLargestNum(arr){
    let sLN = arr.sort()
    return sLN
}

let j = secondLargestNum([10,40,30,20,50])
let j1 = j.slice(3,4)
console.log(j1)

//output

//40
