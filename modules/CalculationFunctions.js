function CalculateAgeFunction(
  bdate,
  bmonth,
  byear,
  tdate,
  tmonth,
  tyear,
  passedmessage,
  isNext
) {
  bdate = parseInt(bdate);
  bmonth = parseInt(bmonth);
  byear = parseInt(byear);
  tdate = parseInt(tdate);
  tmonth = parseInt(tmonth);
  tyear = parseInt(tyear);
  let days = 0;
  let months = 0;
  let years = 0;
  let tempMonth = 0;
  let tempYear = 0;
  let message = passedmessage || "";
  if (byear > tyear) {
    message = passedmessage
      ? passedmessage
      : "First date must be lower than second date";
  } else if (byear === tyear) {
    let monthtemp = 0;
    // console.log(tdate, bdate);

    if (bdate >= tdate) {
      // days = tdate - bdate;
      // console.log("here");

      days = tdate + 30 - bdate;
      monthtemp = 1;
    } else {
      days = tdate - bdate;
    }

    if (tmonth >= bmonth) {
      months = tmonth - (bmonth + monthtemp);
    } else {
      months = bmonth - tmonth + monthtemp;
    }
  } else {
    if (tdate >= bdate) {
      days = tdate - bdate;
    } else {
      tempMonth = 1;
      days = tdate + 30 - bdate + 1;
    }
    bmonth = bmonth + tempMonth;
    if (tmonth >= bmonth) {
      months = tmonth - bmonth;
    } else {
      tempYear = 1;
      months = tmonth + 12 - bmonth;
    }
  }
  byear = byear + tempYear;
  years = tyear - byear;
  // if number < 10 it will add 0 with the number
  days = `${days}`.padStart(2, 0);
  months = `${months}`.padStart(2, 0);
  years = `${years}`.padStart(2, 0);

  const dName = isNext
    ? GetWeekDay(new Date(`${tyear}-${tmonth}-${tdate}`).getDay())
    : GetWeekDay(new Date(`${byear}-${bmonth}-${bdate}`).getDay());
  const mName = isNext ? GetMonthname(tmonth, "L") : GetMonthname(bmonth, "L");
  const upcoming = !isNext ? upcomingBirthDay(bdate, bmonth, tyear) : [];

  return { years, months, days, dName, mName, message, upcoming };
}
function SumAgeFuntions(dataArr) {
  if (Array.isArray(dataArr)) {
    let totaldays = 0;
    let totalmonts = 0;
    let totalyears = 0;
    dataArr.forEach((element) => {
      const marry = element.replaceAll("/", "-").split("-");
      totaldays += parseInt(marry[0]);
      totalmonts += parseInt(marry[1]);
      totalyears += parseInt(marry[2]);
    });

    if (totaldays > 30) {
      totaldays = totaldays - 30;
      totalmonts = totalmonts + 1;
    }

    if (totalmonts > 12) {
      totalmonts = totalmonts - 12;
      totalyears = totalyears + 1;
    }
    return {
      days: totaldays,
      months: totalmonts,
      years: totalyears,
      formatted_date_only: `${totaldays}-${totalmonts}-${totalyears}`,
      formatted: `${totalyears} Years, ${totalmonts} Months, ${totaldays} Days`,
    };
  } else {
    return {
      message:
        "You must pass an array. Data formate is day-month-year like ['17-12-8', '29-01-00', '10-02-01']",
    };
  }
}
// const sumdata = SumAgeFuntions(["17-12-8", "29-01-00", "10-02-01"]);
// console.log(sumdata);
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function GetWeekDay(weekDay) {
  const dayName = dayNames[parseInt(weekDay)];
  return dayName || "Invalid week day";
}

const monthNameLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthNameShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function GetMonthname(month, formate) {
  const montName =
    formate === "L"
      ? monthNameLong[parseInt(month) - 1]
      : monthNameShort[parseInt(month) - 1];
  return montName || "Invalid Month Number";
}

function upcomingBirthDay(bdate, bmonth, currentYear) {
  let tempArr = [];
  let monthName = GetMonthname(bmonth);
  for (let index = 1; index <= 10; index++) {
    let day = GetWeekDay(
      new Date(`${parseInt(currentYear) + index}-${bmonth}-${bdate}`).getDay()
    );
    let dateFormate = `${bdate} ${monthName} ${parseInt(currentYear) + index}`;
    tempArr.push({ date: dateFormate, day: day });
  }
  return tempArr;
}
// const data = CalculateAgeFunction(28, 8, 2024, 24, 5, 2024);
// console.log(data);

module.exports = {
  CalculateAgeFunction,
  GetWeekDay,
  GetMonthname,
  SumAgeFuntions,
};
