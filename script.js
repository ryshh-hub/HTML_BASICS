// ================= DIGITAL CLOCK =================
// Updates the dashboard clock with the current system time.
function updateClock() {
// Finds the clock element in the HTML.
const clock = document.getElementById("clock");

// Displays the current time.
if (clock) clock.textContent = new Date().toLocaleTimeString();
}
// Calls the clock function immediately.
updateClock();
// Repeats the clock update every one second (1000 milliseconds).
setInterval(updateClock, 1000);