const {
  CalculateAgeFunction,
  SumAgeFuntions,
  GetWeekDay,
  GetMonthname,
} = require("./CalculationFunctions");

class CalculateAge {
  /**
   * Generates a function comment for the given function body.
   *
   * @param {String} birthDate - 'year-month-day' or 'year/month/day'
   * @param {String} endDate - 'year-month-day' or 'year/month/day'
   * @return {Object} an object containing the birth date and end date
   */
  static AgeCalculate(birthDate, endDate) {
    if (birthDate) {
      const mendDate = endDate || new Date().toISOString().split("T")[0];
      const resultObject = separateData(birthDate, mendDate);
      // console.log(resultObject, "obj");

      return resultObject;
    } else {
      return { message: "You need to pass two data" };
    }
  }

  /**
   * Returns the name of the day based on the given day number.
   *
   * @param {number} day - The number of the day.
   * @return {string} - The name of the day.
   */
  static DayName(day) {
    if (day) {
      const result = GetWeekDay(day);
      return result;
    } else {
      return "You need to pass day number";
    }
  }
  /**
   * Generates the name of a month based on the given month number and format.
   *
   * @param {number} month - The month number.
   * @param {string} formate - The format of the month name, if 'L' it will return full name of the Month, Default is short name.
   * @return {string} The name of the month.
   */
  static MonthName(month, formate) {
    if (month) {
      const result = GetMonthname(month, formate);
      return result;
    } else {
      return "You need to pass month number";
    }
  }
  /**
   * Generates a function comment for the given function body.
   *
   * @param {String} smalldate - 'day-month-year' like '29-08-00'
   * @param {String} bigdate - 'day-month-year' or '12-01-09'
   * @return {Object} an object containing the birth date and end date
   */
  static GetAgeDifference(smalldate, bigdate) {
    if (smalldate && bigdate) {
      let smallArr = smalldate.replaceAll("/", "-").split("-");
      let bigArr = bigdate.replaceAll("/", "-").split("-");
      const resultObject = CalculateAgeFunction(
        smallArr[0],
        smallArr[1],
        smallArr[2],
        bigArr[0],
        bigArr[1],
        bigArr[2]
      );
      delete resultObject.upcoming;
      delete resultObject.message;
      delete resultObject.dName;
      delete resultObject.mName;
      return {
        ...resultObject,
        formatted: `${resultObject.years} Years, ${resultObject.months} Months, ${resultObject.days} Days`,
      };
    } else {
      return { message: "You need to pass two data" };
    }
  }

  /**
   * Generates a function comment for the given function body.
   *
   * @param {String} firstData - 'day-month-year' like '29-08-00'
   * @param {String} secondata - 'day-month-year' or '12-01-09'
   * @return {Object} an object containing the birth date and end date
   */
  static SumDuration(dataArr) {
    const result = SumAgeFuntions(dataArr);
    return result;
  }
}
function separateData(birthDate, endDate) {
  let bdateArr = birthDate.replaceAll("/", "-").split("-");
  let edateArr = endDate.replaceAll("/", "-").split("-");

  let result = CalculateAgeFunction(
    bdateArr[2],
    bdateArr[1],
    bdateArr[0],
    edateArr[2],
    edateArr[1],
    edateArr[0]
  );

  let nextBirthDate = CalculateAgeFunction(
    edateArr[2],
    edateArr[1],
    edateArr[0],
    bdateArr[2],
    bdateArr[1],
    parseInt(edateArr[0]) + 1,
    "",
    1
  );
  delete nextBirthDate.upcoming;
  delete nextBirthDate.message;
  return {
    ...result,
    nextBirthDate,
    formatted_date_only: `${result.days}-${result.months}-${result.years}`,
    formatted: `${result.years} Years, ${result.months} Months, ${result.days} Days`,
  };
}

module.exports = CalculateAge;
