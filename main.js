import data from './data.json' assert {type: 'json'}

const d = new Date();
let weekday = d.getDay()

let chart = document.getElementById("chart");

for (let i = 0; i < data.length; i++) {
    // Create div for each day
    let dayChart = document.createElement('div');

    // Create div to hold amount and bar
    let dayNumbers = document.createElement('div');

    let dayAmount = document.createElement('div');
    let dayBar = document.createElement('div');
    let dayDay = document.createElement('div');
    
    // Create classes for CSS styling
    dayChart.className = 'day-chart';
    dayNumbers.className = 'day-numbers';
    dayAmount.className = 'day-value';
    dayBar.className = 'day-bar';
    dayDay.className = 'day';

    dayAmount.innerHTML = `$${data[i].amount}`;
    dayBar.style.height = `${data[i].amount * 3}px`;
    dayDay.innerHTML = data[i].day;

    // set Sunday to be at the end of the week
    if (weekday === 0) {
        weekday = 7
    }

    // change color of current day bar based on Current Date object
    if (i + 1 === weekday) {
        dayBar.style.background = 'var(--cyan)';
        // dayAmount.style.background = 'var(--dark-brown)';
    }
    
    chart.appendChild(dayChart);
    dayChart.appendChild(dayNumbers);
    dayNumbers.appendChild(dayBar);
    dayNumbers.appendChild(dayAmount);
    dayChart.appendChild(dayDay);
}