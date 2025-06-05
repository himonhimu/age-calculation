const CalculateAge = require("./modules/CalculateAge");
// const Age = CalculateAge.AgeCalculate("2025-05-17");
// console.log(Age);
// 0-0-0 -6-04-00
// const diff = CalculateAge.GetAgeDifference("0-0-0", "6-04-00");
// console.log(diff);
// const diff = CalculateAge.SumDuration(["17-12-8", "29-01-00", "10-02-01"]);
// console.log(diff);

module.exports = {
  AgeCalculate: CalculateAge.AgeCalculate,
  DayName: CalculateAge.DayName,
  MonthName: CalculateAge.MonthName,
  GetAgeDifference: CalculateAge.GetAgeDifference,
  SumDuration: CalculateAge.SumDuration,
};
