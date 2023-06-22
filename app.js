//selectors
const dateButton = document.querySelector(".date-button");
const dateList = document.querySelector(".date-list");
const navButton = document.querySelector(".icon");
const affirmationText = document.querySelector(".affirmation-text");
const affirmationButton = document.querySelector(".affirmation-button");
const randomButton = document.querySelector(".random-button");

//Event Listeners
dateButton.addEventListener("click", addDate);
dateList.addEventListener("click", deleteDate);
document.addEventListener("DOMContentLoaded", getDates); //Checking if the page is loaded
navButton.addEventListener("click", navBar);
affirmationButton.addEventListener("submit", dailyAffirmation);
randomButton.addEventListener("submit", randomAffirmation);


//Functions

function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

function addDate(event) {
    event.preventDefault();
    //Date DIV
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    //Create LI
    const newDate = document.createElement("li");
    newDate.innerText = String(new Date());
    newDate.classList.add("date-item");
    dateDiv.appendChild(newDate);
    saveLocalPlants(newDate.innerText);
    //appending to list
    dateList.appendChild(dateDiv);
}

function saveLocalPlants(date) {
    let dates;
    if(localStorage.getItem('dates') === null)
    {
        dates = [];
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }
    dates.push(date);
    localStorage.setItem('dates', JSON.stringify(dates));
}

function getDates() {
    let dates;
    if(localStorage.getItem('dates') === null)
    {
        dates = [];
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }
    dates.forEach(function(date){
        //Date DIV
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        //Create LI
        const newDate = document.createElement("li");
        // Loading the text from the storage array to the inner text
        newDate.innerText = date; 
        newDate.classList.add("date-item");
        dateDiv.appendChild(newDate);
        //appending to list
        dateList.appendChild(dateDiv);
    });
}

function deleteDate(e) {
    
    const item = e.target;
    if(item.classList[0] === "date-item")
    {
        const date = item.parentElement;
        removeLocalDates(date);
        date.remove();
    }
}

function removeLocalDates(date) {
    //check if there are things stored
    let dates;
    if(localStorage.getItem('dates') === null) {
        dates = [];
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }
    const dateIndex = date.children[0].innerText;
    dates.splice(dates.indexOf(dateIndex), 1); //First argument is the index of the removed element, second is how many
    localStorage.setItem("dates", JSON.stringify(dates));
}

function dailyAffirmation(event){
    event.preventDefault();
    const affirmations = [
        "You have the power to seize your dreams",
        "You dance like no one else",
        "Your strength is unparalleled",
        "You have the ability to foster kindess in others",
        "You are an amazing story teller",
        "Your crafting ability knows no bounds",
        "Your character shines like a super nova",
        "You show your compassion in everything you do",
        "Your hard work is showing",
        "You are so enjoyable to be around",
        "Your thoughtfulness is noted, and appreciated",
        "Your friends support you, and will help you through anything",
        "Your style is dope dude",
        "You make your friends laugh with your wit",
        "Your brain is so wrinkly bro",
        "You are loved",
        "You are a good and worthwhile person",
        "You have the ability to inspire others",
        "Your sense of humor is delightful",
        "You have grown so much, and you will continue to",
        "You are a word warrior",
        "You make those around you feel safe",
        "You will excel in that venture you're worried about",
        "You possess the qualities of a leader",
        "Proud of you for pushing yourself a healthy amount",
        "You're a productivity fiend. Don't forget to take breaks",
        "You are valued and appreciated",
        "You have so much heart that it's visible from space",
        "You are better at video games than you realize",
        "Improving at something takes time, but I know you will get there",
        "Don't forget to hydrate, you'll need the energy for being awesome",
    ]
    const date = new Date()
    document.getElementById('affirmation-text').innerHTML = affirmations[date.getDate()]
}

function randomAffirmation(event)
{
    event.preventDefault();
    const affirmations = [
        "You are one of my best friends, and you mean so much to me.",
        "You are enough",
        "Your gender is beautiful",
        "You are not alone",
        "Your existence is revolutionary",
        "You are worthy of what you desire",
        "You are in charge of your life",
        "You have the power to create change",
        "You have good things coming your way",
        "YOU ARE POWERFUL",
        "You are filled with focus",
        "You are not defined by your past, but driven by your future",
        "You are getting healthier every day",
        "You are freeing yourself from doubt and fear",
        "You are healing so well",
        "You are knowledgeable",
        "You can move mountains",
        "You are incredible",
        "Your progress is noticed, and amazing",
        "You are a truly caring person",
        "You have surrounded yourself with positive beings",
        "You are a light for those around you"
    ]
    const rng = Math.floor(Math.random() * 20)
    document.getElementById('affirmation-text').innerHTML = affirmations[rng];
}
