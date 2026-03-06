function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerText = time;
}

setInterval(showTime, 1000);