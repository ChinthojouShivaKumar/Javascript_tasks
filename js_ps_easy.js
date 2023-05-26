 1. //converting minutes in to seconds
        var minute = prompt("enter minutes to display seconds")

        function minutes(minute) {
        return minute*60
        }
        minutes(minute)

        console.log("the minutes"+minute+" as "+minutes(minute) + " in seconds")

2. // sum of numbers

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

  3.  // calculating age in days using input as years

     
        function ageInYears(){
            var ageInYear = prompt("enter person age in years to display output of your age in days")
            
           
            var days = ageInYear*365
            
            console.log("the age of "+ageInYear+" years person have in "+days+ " days.")

        }
        ageInYears()

    4. // voltage and current 

        var voltage = prompt("enter voltage volts")
        var current = prompt("enter current in amps")

        function power(voltage, current) {
            var power = voltage*current
            console.log("the units of power in"+voltage+"volts and "+ current+ " in amperes has"+ power +"volt-amp")
        }
        power(voltage,current)

5. //either one of condition is true

function checkBool(a,b) {
    if(a+b==10 || a==10|| b==10){
        console.log("true")
    }
    else{
        console.log("false")
    }
}   
checkBool(15)

6. // string something joined with space

var strName = "something"

function string(a){
    
    var a = a.toString()

    var b = a+" "+strName
    
    console.log(b)
}
string(42)

7. // either one condtion true print value true

function checkBool(a,b) {
    if(a+b==10 || a==10|| b==10){
        console.log("true")
    }
    else{
        console.log("false")
    }
}   
checkBool(15)

8. // finding true or false taking an argment as string

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

// 9. arrow function returns greeting
let shiva = () => {
    return "greeting"
}
alert(shiva())

// output:- greeting

10. //phone number format
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


11. // ascending order using sort

function ascendingOrder(ar1){
   let ab =  ar1.sort()
   return ab
}

let h = ascendingOrder(['a','ccc','bb','dddd'])
console.log(h);

//output

//'a','bb'.'ccc','dddd'

//12. printing largest value

let a = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
let arr = []
for(let i=0; i<a.length;i++){
let b = a[i]

let c = Math.max(...b)
arr.push(c)
}
console.log(arr)

//output
//[7,90,2]


13 // finding second largest number

function secondLargestNum(arr){
    let sLN = arr.sort()
    return sLN
}

let j = secondLargestNum([10,40,30,20,50])
let j1 = j.slice(3,4)
console.log(j1)

//output

//40

//14 remove dupvalues


let array = [1,0,1,0]

let array1 = ['the', 'big', 'cat']


let a = array.filter(function(item, index){
    return array.indexOf(item)===index
})

let b = array1.filter(function(item, index){
    return array1.indexOf(item)===index
})


alert(a)

alert(b)


// 15. printing a unique value
function uniqueValue(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.lastIndexOf(arr[i])==arr.indexOf(arr[i]))
        alert(arr[i])
    }
}

let a = uniqueValue([2,2,2,3,4,4,4])

//ouput: 3

17 // finding vowels and their count
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
18. // reversing string case uppertolower and lowertoupper

var a = "Hello Birthday"

var a1 = a[0].toLowerCase()+(a.slice(1,6).toUpperCase())
var a2 = a[6].toLowerCase()+(a.slice(7,15).toUpperCase())

console.log(a1+a2)

18 //reverseCase string



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

// 19. multiple of numbers

var c=prompt("enter a number: ");
var sum =" ";
function mul(a){
    return a*2;
}
for(var i=1;i<=c;i++){
    sum += mul(i)+" ";
}
console.log(sum);

/* ouput:

2, 4, 6, 8, 10*/

20 //checking Datatype with input and using function with argument
var a = 100;
var b = "shiva"

function check(a){
console.log(typeof(a))
console.log(typeof(b))
}
check(a)

21 //finding greatest number using terinary operator

var a = 4
var b = 8
var c = 2

let greatest = (a>b)&&(a>c)?a:(b>c)?b:c;
console.log(greatest)

22.//factorial of number

console.log("Welcome to Programiz!");

var n = 5

var y = n*(n-1)*(n-2)*(n-3)*(n-4)


console.log(y)

//23 array sort with loops

let a = [2,3,1,5,4]

for(let i=0;i<a.length-1;i++){
    for(let j =i+1;j<=a.length;j++){
        // const b = a[i]
        if(a[i]>a[j]){
            var temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
     
}
console.log(a)

//output

//[1,2,3,4,5]


24. // pattern of a number


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

25 // power of number

var num = 5;
var pow = 3;

var result = num**pow

console.log(result)

//26 checking prime number
function checkPrime(prime){
    let isPrime = true;
    
    for(let i=2; i<prime; i++){
        if(prime%i==0){
            isPrime =false;
            break
        }
    }
    if(isPrime){
    alert(prime+"is prime")
    }
    else{
    alert(prime+"is not a prime")
}
}
let a = checkPrime(6)


//output: 6 is not a prime

28 //AtoZ count

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

//29 finding a missing number

function missingNum(arr,b){
    for(let i=1;i<arr;i++){
        if(!(b.includes(i))){
            alert(i)
        }
    }
}

let missNum = missingNum(5,[5,1,3,4])

30 //consonants and vowles count in given string

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

// 31. adding specific index in array


let a = [1,2,3,4,5,7,8,9,10]

let b = a.splice(5,0,6)

let c = a.join().split()

console.log(c)

//[ '1,2,3,4,5,6,7,8,9,10' ]


32. //string reverse using while

let a = '123'
let b = a.length
let c =''
while(b>0){
    b--
    c+=a[b]
}
alert(c)


//33. occurance of number


var c = prompt('enter input')

var a = [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10]

let count = 0

for(let i=0; i<a.length;i++){
     const b = a[i]
     if(b==c){
         count++
     }
    
}
alert("the occurance is"+count)


//output:
//7 occurnace is 2
