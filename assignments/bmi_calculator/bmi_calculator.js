// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    var BMI;
    if (height!=0 && mass!=0){
        BMI=mass/(height*height)
        return (parseInt(BMI))
    }
    if(height==0 || mass==0){
        return "INVALID INPUT"
    }
}

module.exports = BMICalculator;
