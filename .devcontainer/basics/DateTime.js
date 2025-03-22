let myDate = new Date()
/*console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)
console.log(myDate.toDateString())*/
let myTimestamp= Date.now();
console.log(myTimestamp.toString())
console.log(myDate.getTime())


/* Getting Date Components
  Method	        Description	                           Example
.getFullYear()	    Returns the year	                   date.getFullYear() → 2024
.getMonth()	        Returns month (0-11)	               date.getMonth() → 2 (March)
.getDate()	        Returns day of the month (1-31)        date.getDate() → 22
.getDay()	        Returns day of the week (0-6)	       date.getDay() → 5 (Friday)
.getHours()	        Returns the hour (0-23)	               date.getHours() → 10
.getMinutes()	    Returns the minutes (0-59)	           date.getMinutes() → 30
.getSeconds()	    Returns the seconds (0-59)	           date.getSeconds() → 45
.getMilliseconds()	Returns the milliseconds (0-999)	   date.getMilliseconds() → 123
.getTime()	        Returns the timestamp (ms since 1970)  date.getTime() → 1711109400000*/

/* 3️⃣ Setting Date Components
Method	                  Description	                     Example
.setFullYear(year)	    Sets the year	                     date.setFullYear(2025)
.setMonth(month)	    Sets the month (0-11)	             date.setMonth(4) (May)
.setDate(day)	        Sets the day of the month (1-31)	 date.setDate(15)
.setMinutes(minutes)	Sets the minutes (0-59)	             date.setMinutes(45)
.setHours(hours)	    Sets the hour (0-23)	             date.setHours(14)
.setSeconds(seconds)	Sets the seconds (0-59)	             date.setSeconds(30)
.setMilliseconds(ms)	Sets the milliseconds (0-999)	     date.setMilliseconds(500) */

/* Summary of Useful Date Methods
Method	                     Description
new Date()	             Creates a new Date object
getFullYear()	         Returns the year
getMonth()	             Returns the month (0-11)
getDate()	             Returns the day of the month
getDay()	             Returns the day of the week (0-6)
getHours()	             Returns the hours (0-23)
getMinutes()	         Returns the minutes (0-59)
getSeconds()	         Returns the seconds (0-59)
getMilliseconds()	     Returns the milliseconds (0-999)
getTime()	             Returns the timestamp
setFullYear(year)	     Sets the year
setMonth(month)	         Sets the month
setDate(day)	         Sets the day of the month
setHours(hours)	         Sets the hour
toDateString()	         Returns a readable date string
toISOString()	         Returns an ISO format date
toLocaleDateString()	 Returns a locale-specific date */


/* 4️⃣ Formatting Dates
Method	                         Description	                Example
.toDateString()	                 Returns a readable date	    "Fri Mar 22 2024"
.toTimeString()	                 Returns a readable time	    "10:30:45 GMT+..."
.toISOString()	                 Returns date in ISO format	    "2024-03-22T10:30:45.000Z"
.toUTCString()	                 Returns UTC time string	    "Fri, 22 Mar 2024 10:30:45 GMT"
.toLocaleDateString()	         Returns date in local format	"3/22/2024"
.toLocaleTimeString()	         Returns time in local format	"10:30:45 AM"
*/

