export const bmiCalculation = (weight, height, weight_stone, weight_pounds, height_feet, height_inches, method) => {

  parseFloat(weight);
  parseFloat(height);
  parseFloat(weight_stone);
  parseFloat(weight_pounds);
  parseFloat(height_feet);
  parseFloat(height_inches);

  let bmi;

  weight = isNaN(weight) ? 0 : weight;
  height = isNaN(height) ? 0 : height;
  weight_stone = isNaN(weight_stone) ? 0 : weight_stone;
  weight_pounds = isNaN(weight_pounds) ? 0 : weight_pounds;
  height_feet = isNaN(height_feet) ? 0 : height_feet;
  height_inches = isNaN(height_inches) ? 0 : height_inches;

   // Transform Imperial input to height in inches and weight in pounds
  let a = Number(height_inches)
  let b = Number(weight_pounds)
  let full_height_inches = a + (height_feet * 12);
  let full_weight_pounds = b + (weight_stone * 14);


  // Checks if input is Metric and executes if so
  if (weight > 0 && height > 0) {
    bmi = weight / (height / 100 * height / 100);

    let finalBMI = parseFloat(bmi.toFixed(2));
    let BMIMessage = setBMIMessage(finalBMI)
    if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
      return '';
    } else {
      return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
    } 
  }

  // Checks if input is Imperial and executes if so
  else if (full_height_inches > 0 && full_weight_pounds > 0) {  
    bmi = (full_weight_pounds / (full_height_inches * full_height_inches)) * 703;

    let finalBMI = parseFloat(bmi.toFixed(2));
    let BMIMessage = setBMIMessage(finalBMI)
    if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
      return '';
    } else {
      return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
    } 
  }
  
      
}

  // Outputs Message

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }

  if (finalBMI > 30) {
    return "Obese";
  }
}