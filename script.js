function toggleNav() {
  const navLinks = document.getElementById("ufsNavLinks");
  navLinks.classList.toggle("show");
}
function toggleNav() {
  document.getElementById("ufsNavLinks").classList.toggle("show");
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
};
