// write your code below!
function happyHolidays(string) {
  return "Happy holidays!"
}


function happyHolidaysTo(string) {
  console.log ('Happy holidays, ${name}!')
  return "Happy holidays, you!"
}


function happyHolidayTo(string) {
  console.log('{$holiday},${name}!')
  return "Happy Independence Day, you!"
}


function holidayCountdown(string) {
  console.log(string.toLowerCase())
}




function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  return "Are you eating enough?"
}
