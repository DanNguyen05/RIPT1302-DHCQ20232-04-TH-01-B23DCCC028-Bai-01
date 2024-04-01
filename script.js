function updateClock() {
    let now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;

    updateColor(hours, 'hour');
    updateColor(minutes, 'minute');
    updateColor(seconds, 'second');
}

function updateColor(value, segment) {
    let element = document.getElementById(segment);
    let color = getColor(value);

    element.style.backgroundColor = color;
}

function getColor(value) {
    let percentage = (value / 60) * 255;
    let color = `rgb(${255 - percentage}, ${percentage}, 100)`;
    return color;
}
setInterval(updateClock, 1000);
updateClock();
