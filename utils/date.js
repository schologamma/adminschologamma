
export const stringTonumDate = (stringDate) =>{

var datetime = new Date(stringDate);

var numericalValue = datetime.getTime();
return numericalValue
}

export const numToStringDate = (numdate) =>{
    var datetime = new Date(numdate);
var datetimeString = datetime.toISOString();

return datetimeString
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
  }


export const getDayFromDateTime = (numericalValue) =>{
    // Your numerical value representing milliseconds since the Unix epoch
// var numericalValue = 1633552380000; // Replace this with your numerical value

// Create a Date object using the numerical value
var datetime = new Date(numericalValue);
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
// Define an array of day names for the week
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Extract day, month, year, hours, minutes, and day of the week components
var day = datetime.getDate();
var monthName = months[datetime.getMonth()];
var month = datetime.getMonth() + 1; // Months are 0-based, so we add 1
var year = datetime.getFullYear();
var hours = datetime.getHours();
var minutes = datetime.getMinutes();
var dayOfWeek = dayNames[datetime.getDay()]; // Get the day of the week
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12; // Convert hours to 12-hour clock format
hours = hours ? hours : 12; // Handle 12 AM
// Format the components into a string
var datetimeString = dayOfWeek + ', ' + year + '-' + pad(month) + '-' + pad(day) + ' ' + pad(hours) + ':' + pad(minutes);
// "Thursday, 2023-10-06 23:53" output
  
const dateObj = {
    dayOfWeek:dayOfWeek ,
    year:year ,
    month:pad(month) ,
    day:pad(day),
    hours :pad(hours),
    minutes :pad(minutes) ,
    ampm:ampm,
    monthName :monthName


}
return dateObj


}

export const dataDifference =()=>{}

export function calculateTimeDifference(datetimeString1, datetimeString2) {
    const date1 = new Date(datetimeString1);
    const date2 = new Date(datetimeString2);
    // Example usage:

    const timeDifferenceMillis = Math.abs(date1 - date2);
  
    const days = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifferenceMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifferenceMillis % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  

  

  