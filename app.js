const DaysEL = document.getElementById('days')
const HoursEL = document.getElementById('hours')
const MinutesEL = document.getElementById('minutes')
const SecondsEL = document.getElementById('seconds')

const newYear = '18 mar 2024';

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  
  const totalsec =(newYearDate-currentDate) / 1000;

  const days = Math.floor(totalsec / 3600 / 24);
  const hours = Math.floor(totalsec / 3600 ) % 24;
  const minutes = Math.floor(totalsec / 60) % 60;
  const seconds = Math.floor(totalsec) % 60;
  
  DaysEL.innerHTML =  days;
  HoursEL.innerHTML =  format(hours);
  MinutesEL.innerHTML =  format(minutes);
  SecondsEL.innerHTML =  format(seconds);
}

function format(time){
  return time < 10 ? (`0${time}`) : time
}

countDown()

setInterval(countDown,1000)
