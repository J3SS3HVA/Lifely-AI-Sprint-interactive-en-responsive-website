// show schedule section
const Schedule = document.querySelector('.schedule');
const ScheduleBtn = document.querySelector('#Schedule-button');
// show nav menu
const menuBtn = document.querySelector('.menu')
const navMenu = document.querySelector('body > article')
const body = document.querySelector('body');

// click on button gives the schedule section a class 
ScheduleBtn.addEventListener('click', function(){
    Schedule.classList.toggle('show-schdule');
});

// click on button gives the nav menu a class 
menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('show-menu');
    body.classList.toggle('hide-scroll');
});