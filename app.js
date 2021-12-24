let button = document.getElementById("button").innerHTML = "Message";

function clickMe() {
    let fullName = prompt("Kindly, Tell me your name");
    if (fullName.length < 6) {
        document.getElementById("wish").innerHTML = fullName + "," + " Seasons greetings! Wishing you and your family all things bright and beautiful this Christmas!";
    } else if (fullName.length <= 6) {
        document.getElementById("wish").innerHTML = fullName + "," + " Wishing you the warmest of Christmas greetings, you will be in my thoughts during this special holiday.";
    } else if (fullName.length >= 6) {
        document.getElementById("wish").innerHTML = fullName + "," + " Seasons greetings! Wishing you and your family all things bright and beautiful this Christmas!";
    }

};


