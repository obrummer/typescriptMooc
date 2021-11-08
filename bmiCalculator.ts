type Height = number;
type Weight = number;

const calculateBmi = (height: Height, weight: Weight) => {
  const bmi = weight / ((height / 100) * (height / 100));
  console.log(bmi);
  let result;
  if (bmi < 18.5) {
    result = "Underweight";
  }
  if (bmi >= 18.5 && bmi < 25) {
    result = "Normal weight";
  }
  if (bmi >= 25) {
    result = "Overweight";
  }
  return result;
};

console.log(calculateBmi(185, 80));
