
//CONST

const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow= document.querySelector('.seconds');
const deg = 6;
var playSound2 = document.getElementById("MySound2");

//LET
setInterval(() =>{

    let day = new Date();
    let hh = day.getHours() * 30; //для получения угла поворота часовой стрелки
    let mm = day.getMinutes() * deg; //для получения угла поворота минутной стрелки
    let ss = day.getSeconds() * deg; //для получения угла поворота секундной стрелки


    hoursArrow.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${mm}deg)`;
    secondsArrow.style.transform = `rotateZ(${ss}deg)`;

    playSound2.play();
});
