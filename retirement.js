function retirement(age,salary,percentage,desired_savings)
  {
  var total_savings = ((percentage / 100)* salary);
  var employer_assist = (total_savings) * 0.35;
                
  var total_annaul_savings = total_savings + employer_assist;
  var savings_duration = desired_savings / total_annaul_savings;
  var age_obtained = savings_duration + age;
  var age_obtained = age_obtained.toFixed(1);
  return age_obtained;  
  }

module.exports = retirement;
