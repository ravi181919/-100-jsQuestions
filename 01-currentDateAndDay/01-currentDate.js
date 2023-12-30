/* 
  * Write a JavaScript program to get the current date.
  
   Expected Output:
   (1) mm/dd/yyyy 
   (2) dd-mm-yyyy
 */

// Get the current date  
let today = new Date(); 

// Get the current day
let day = today.getDate();

// Get the month (adding 1 because months are zero-based)
let month = today.getMonth() + 1;

// get the current year 
let year = today.getFullYear(); 

// Add leading zero if the day is less than 10
if (day < 10) 
{
  day = '0' + day; 
}

// Add leading zero if the month is less than 10
if (month < 10) 
{
  month = '0' + month; 
}


// mm-dd-yyyy
today = month + '-' + day + '-' + year 
console.log(today);

// dd-mm-yyyy
today = day + '/' + month + '/' + year
console.log(today);
