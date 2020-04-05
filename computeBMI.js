function computeBMI(weight, height_feet, height_inches)
  {
    var weight = weight * 703;
    var height = height_feet * 12 + height_inches;
    var BMI = weight / (height * height);
    var BMI = BMI.toFixed(1);
  }

module.exports = computeBMI;
