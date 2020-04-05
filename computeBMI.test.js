computeBMI = require('./computeBMI');
test("BMI index of height 5 ft and 5 in and 125 pounds equal 20.8", () => {
    expect(computeBMI(125,5,5)).toBe(20.8);
});
test("BMI index of height 6 ft and 2 in, and 180 pounds equal 23.1", () => {
    expect (computeBMI(180,6,2)).toBe(23.1);
});
test("BMI index of height 3 ft and 8 in, and 120 pounds equal 43.6", () => {
    expect (computeBMI(120,3,8)).toBe(43.6);
});
test("BMI index of height 5 ft and 11 in, and 250 pounds equal 34.9", () => {
    expect (computeBMI(250,5,11)).toBe(34.9);
});
