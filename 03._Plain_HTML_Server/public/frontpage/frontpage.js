console.log("Thank you for visiting");

//Not use setInterval because it calls the callback every interval
//setTimeout intstead sets the timout and when it is executed, it will stop
setTimeout(() => window.location.href = "/visitors", 3000);