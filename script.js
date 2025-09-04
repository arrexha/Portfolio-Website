function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const isDark = body.classList.toggle("dark");
  toggleBtn.classList.add("rotate");
  setTimeout(() => toggleBtn.classList.remove("rotate"), 300);

  if (isDark) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    toggleBtn.setAttribute("aria-label", "Switch to light mode");
    toggleBtn.setAttribute("title", "Switch to light mode");
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    toggleBtn.setAttribute("title", "Switch to dark mode");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.getElementById("theme-toggle");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    toggleBtn.setAttribute("aria-label", "Switch to light mode");
    toggleBtn.setAttribute("title", "Switch to light mode");
  } else {
    document.body.classList.remove("dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    toggleBtn.setAttribute("title", "Switch to dark mode");
  }
  toggleBtn.addEventListener('click', toggleTheme);
};
// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    document.querySelectorAll('header nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
