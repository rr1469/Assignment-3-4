retirement = require ('./retirement');
test('Age:25, Salary:90000, 30% of Salary saved. Desired_Savings:800000, Meet your goal at: 46.9', () => {
    age_obtained = retirement(25, 90000, 30, 800000);
    years = age_obtained;
    expect(years).toBe("46.9");
 });
test('Age:30, Salary:120000, 50% of Salary saved. Desired_Savings:3000000, Meet your goal at: 67.0', () => {
    age_obtained = retirement(30, 120000, 50, 3000000);
    years = age_obtained;
    expect(years).toBe("67.0");
 });
