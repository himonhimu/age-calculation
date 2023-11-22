const { CalculateAgeFunction, GetWeekDay, GetMonthname } = require("./CalculationFunctions");

class CalculateAge {

    /**
     * Generates a function comment for the given function body.
     *
     * @param {String} birthDate - 'year-month-day' or 'year/moth/day'
     * @param {String} endDate - 'year-month-day' or 'year/moth/day'
     * @return {Object} an object containing the birth date and end date
     */
    static AgeCalculate(birthDate, endDate) {
        if (birthDate) {
            const mendDate = endDate || new Date().toISOString().split('T')[0]
            const resultObject = separateData(birthDate, mendDate)
            return resultObject
        } else {
            return { message: 'You need to pass two data'}
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
            const result = GetWeekDay(day)
            return result
        } else {
            return 'You need to pass day number'
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
            const result = GetMonthname(month, formate)
            return result
        } else {
            return 'You need to pass month number'
        }
    }

}
function separateData(birthDate, endDate) {
    let bdateArr = birthDate.replaceAll('/', '-').split('-')
    let edateArr = endDate.replaceAll('/', '-').split('-')
    let result = CalculateAgeFunction(bdateArr[2], bdateArr[1], bdateArr[0], edateArr[2], edateArr[1], edateArr[0])
    let nextBirthDate = CalculateAgeFunction(edateArr[2], edateArr[1], edateArr[0], bdateArr[2], bdateArr[1], parseInt(edateArr[0])+1, '', 1)
    delete nextBirthDate.upcoming
    delete nextBirthDate.message
    return {...result, nextBirthDate}
}

module.exports = CalculateAge