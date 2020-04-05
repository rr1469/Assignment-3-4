retirement = require ('./retirement');
test('Age:25, Salary:90000, 30% of Salary saved. Desired_Savings:800000, Meet your goal at: 46.9', () => {
    age_obtained = retirement(25, 90000, 30, 800000);
    years = age_obtained[0];
    expect(years).toBe(69);
 });