let myDate = new Date()
/*console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)
console.log(myDate.toDateString())*/
let myTimestamp= Date.now();
console.log(myTimestamp.toString())
console.log(myDate.getTime())


/* Method	        Description	                           Example
.getFullYear()	    Returns the year	                   date.getFullYear() → 2024
.getMonth()	        Returns month (0-11)	               date.getMonth() → 2 (March)
.getDate()	        Returns day of the month (1-31)        date.getDate() → 22
.getDay()	        Returns day of the week (0-6)	       date.getDay() → 5 (Friday)
.getHours()	        Returns the hour (0-23)	               date.getHours() → 10
.getMinutes()	    Returns the minutes (0-59)	           date.getMinutes() → 30
.getSeconds()	    Returns the seconds (0-59)	           date.getSeconds() → 45
.getMilliseconds()	Returns the milliseconds (0-999)	   date.getMilliseconds() → 123
.getTime()	        Returns the timestamp (ms since 1970)  date.getTime() → 1711109400000*/