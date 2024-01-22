// show schedule section
const Schedule = document.querySelector('.schedule');
const ScheduleBtn = document.querySelector('#Schedule-button');

ScheduleBtn.addEventListener('click', function(){
    Schedule.classList.toggle('show-schdule');
});