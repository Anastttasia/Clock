
//CONST

const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow= document.querySelector('.seconds');
const deg = 6;

//LET

let day = new Date();
let hh = day.getHours() * 30; //для получения угла поворота часовой стрелки
let mm = day.getMinutes() * deg; //для получения угла поворота минутной стрелки
let ss = day.getSeconds() * deg; //для получения угла поворота секундной стрелки


hoursArrow.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
minutesArrow.style.transform = `rotateZ(${mm}deg)`;
secondsArrow.style.transform = `rotateZ(${ss}deg)`;
