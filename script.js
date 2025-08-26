// Dark Mode Toggle
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  body.classList.toggle("dark");
  if(body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme","dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme","light");
  }
}

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.getElementById("theme-toggle");
  if(savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }

  // Add event listener for theme toggle button
  toggleBtn.addEventListener('click', toggleTheme);
};

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
    // Optionally set active class for nav links
    document.querySelectorAll('header nav a').forEach(link=>link.classList.remove('active'));
    this.classList.add('active');
  });
});
