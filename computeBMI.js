function computeBMI()
  {
    var height_feet = Number(document.getElementById("height_feet").value);
    var height_inches = Number(document.getElementById("height_inches").value);
    var weight = Number(document.getElementById("weight").value);
    var weight = weight * 703;
    var height = height_feet * 12 + height_inches;
    var BMI = weight / (height * height);
    var BMI = BMI.toFixed(1);
  }

module.exports = computeBMI;
