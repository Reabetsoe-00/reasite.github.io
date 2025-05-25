const themeSelect = document.getElementById("themeSelect");
const saveBtn = document.getElementById("saveBtn");
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
  }
});

// Save theme to localStorage
saveBtn.addEventListener("click", () => {
  const selectedTheme = themeSelect.value;

  // Clear other theme classes
  document.body.className = "";
  document.body.classList.add(selectedTheme);

  localStorage.setItem("preferredTheme", selectedTheme);
  alert("Theme saved!");
});

// Trigger CSS animation
animateBtn.addEventListener("click", () => {
  box.classList.remove("animate-pop");
  void box.offsetWidth;
  box.classList.add("animate-pop");
});
