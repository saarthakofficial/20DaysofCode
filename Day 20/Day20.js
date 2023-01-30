const timeDisplay = document.getElementById("time");
const locationDisplay = document.getElementById("location");
const citySelect = document.getElementById("city-select");

const cities = [
    { name: "New York", offset: -5 },
    { name: "London", offset: 0 },
    { name: "Tokyo", offset: 9 },
    { name: "Sydney", offset: 11 },
    { name: "Delhi", offset: 5.5 }
];

function updateTime() {
    const date = new Date();
    const offset = parseFloat(citySelect.value) * 60 * 60 * 1000;
    date.setTime(date.getTime() + offset);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function populateCities() {
    for (let i = 0; i < cities.length; i++) {
        const option = document.createElement("option");
        option.value = cities[i].offset;
        option.innerHTML = cities[i].name;
        citySelect.appendChild(option);
    }
}

function updateLocation() {
    for (let i = 0; i < cities.length; i++) {
        if (citySelect.value === cities[i].offset) {
            locationDisplay.innerHTML = cities[i].name;
            break;
        }
    }
}

populateCities();
updateLocation();
setInterval(updateTime, 1000);
citySelect.addEventListener("change", updateLocation);