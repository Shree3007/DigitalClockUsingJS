setInterval(()=>{
    let clock = document.getElementById('clock');
    let day1 = document.getElementById('day');
    let date1 = document.getElementById('date');
    let month1 = document.getElementById('month');
    let year1 = document.getElementById('year');
    let AmPm = document.getElementById('amOrpm');

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes<=9){
        minutes = `0${minutes}`;
    }
    let seconds = date.getSeconds();
    if(seconds<=9){
        seconds = `0${seconds}`
    }

    let cMonth = date.getMonth() +1;
    let cYear = date.getFullYear();
    let day = date.getDay();
    let d = date.getDate();

    let dayNmae =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    if(hours <12){
        AmPm.innerHTML = "AM";
    }
    else{
        AmPm.innerHTML = "PM";
    }
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    day1.innerHTML = dayNmae[day];
    date1.innerHTML = `${d}`;
    month1.innerHTML = cMonth;
    year1.innerHTML = `${cYear}`;
},1000);