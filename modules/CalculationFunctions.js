function CalculateAgeFunction(bdate, bmonth, byear, tdate, tmonth, tyear, passedmessage, isNext) {
  bdate = parseInt(bdate)
  bmonth = parseInt(bmonth)
  byear = parseInt(byear)
  tdate = parseInt(tdate)
  tmonth = parseInt(tmonth)
  tyear = parseInt(tyear)
  let days = 0
  let months = 0
  let years = 0
  let tempMonth = 0
  let tempYear = 0
  let message = passedmessage || ''
  if (byear > tyear) {
    message = passedmessage ? passedmessage : 'First date must be lower than second date'
  } else if (byear === tyear) {
    if (tdate >= bdate) {
      days = tdate - bdate
    } else {
      days = bdate - tdate
    }

    if (tmonth >= bmonth) {
      months = tmonth - bmonth
    } else {
      months = bmonth - tmonth
    }
  } else {
    if (tdate >= bdate) {
      days = tdate - bdate
    }
    else {
      tempMonth = 1
      days = tdate + 30 - bdate + 1
    }
    bmonth = bmonth + tempMonth
    if (tmonth >= bmonth) {
      months = tmonth - bmonth
    } else {
      tempYear = 1
      months = tmonth + 12 - bmonth
    }
  }
  byear = byear + tempYear
  years = tyear - byear
  // if number < 10 it will add 0 with the number
  days = days < 10 ? `0${days}` : days
  months = months < 10 ? `0${months}` : months
  years = years < 10 ? `0${years}` : years

  const dName = isNext ?  GetWeekDay(new Date(`${tyear}-${tmonth}-${tdate}`).getDay()):GetWeekDay(new Date(`${byear}-${bmonth}-${bdate}`).getDay())
  const mName = isNext ? GetMonthname(tmonth, 'L'): GetMonthname(bmonth, 'L')
  const upcoming = !isNext ? upcomingBirthDay(bdate, bmonth, tyear):[]
  
  return { years, months, days, dName, mName, message, upcoming}
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function GetWeekDay(weekDay) {
  const dayName = dayNames[parseInt(weekDay)];
  return dayName || "Invalid week day";
}

const monthNameLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNameShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function GetMonthname(month, formate) {
  const montName = formate === 'L' ? monthNameLong[parseInt(month)-1] : monthNameShort[parseInt(month)-1]
  return montName || 'Invalid Month Number'
}

function upcomingBirthDay(bdate, bmonth, currentYear) {
  let tempArr = []
  let monthName = GetMonthname(bmonth)
  for (let index = 1; index <= 10; index++) {
    let day = GetWeekDay(new Date(`${parseInt(currentYear) + index}-${bmonth}-${bdate}`).getDay())
    let dateFormate = `${bdate} ${monthName} ${parseInt(currentYear) + index}`
    tempArr.push({ date: dateFormate, day: day })
  }
  return tempArr
}

module.exports = { CalculateAgeFunction, GetWeekDay, GetMonthname }