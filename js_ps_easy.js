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
