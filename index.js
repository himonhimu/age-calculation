const CalculateAge = require("./modules/CalculateAge");

console.log(CalculateAge.AgeCalculate('1990/02/02'));
// CalculateAge.AgeCalculate('1990/02/02')
// console.log(CalculateAge.DayName(2));
// console.log(CalculateAge.MonthName(9, 'L'));
module.exports = {
    AgeCalculate:CalculateAge.AgeCalculate,
    DayName:CalculateAge.DayName,
    MonthName:CalculateAge.MonthName,
}
