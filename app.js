//selectors
const dateButton = document.querySelector(".date-button");
const dateList = document.querySelector(".date-list");

//Event Listeners
dateButton.addEventListener("click", addDate);
dateList.addEventListener("click", deleteDate);
document.addEventListener("DOMContentLoaded", getDates); //Checking if the page is loaded

//Functions
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