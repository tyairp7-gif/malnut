/* Navigation */
const navBtns = document.querySelectorAll(".nav-btn");
const pages   = document.querySelectorAll(".page");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

/* Live clock */
const clockEl = document.getElementById("clock");
const dateEl  = document.getElementById("date");

function tick(){
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], { hour12:false });
  dateEl.textContent  = now.toLocaleDateString([], {
    weekday:"long", year:"numeric", month:"long", day:"numeric"
  });
}
tick();
setInterval(tick, 1000);

/* Notepad */
const notepad  = document.getElementById("notepad");
const saveBtn  = document.getElementById("saveBtn");
const savedMsg = document.getElementById("savedMsg");

notepad.value = localStorage.getItem("malnut-note") || "";

saveBtn.addEventListener("click", () => {
  localStorage.setItem("malnut-note", notepad.value);
  savedMsg.style.opacity = "1";
  setTimeout(() => savedMsg.style.opacity = "0", 1500);
});

setInterval(() => {
  localStorage.setItem("malnut-note", notepad.value);
}, 5000);