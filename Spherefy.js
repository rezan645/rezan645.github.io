// Spherefy.js

// Theme toggle (Light / Dark)
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('spherefy-theme');

function applyTheme(theme){
  if(theme === 'dark'){
    htmlEl.classList.add('dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('spherefy-theme','dark');
  } else {
    htmlEl.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    localStorage.setItem('spherefy-theme','light');
  }
}
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click',()=>{
  applyTheme(htmlEl.classList.contains('dark') ? 'light' : 'dark');
});

// Mobile nav toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');

if(mobileToggle && mobileNav){
  mobileToggle.addEventListener('click', ()=> {
    mobileNav.classList.remove('hidden');
  });
}
if(mobileClose){
  mobileClose.addEventListener('click', ()=> {
    mobileNav.classList.add('hidden');
  });
}

// Close mobile nav when clicking a link (optional)
document.querySelectorAll('.mobile-link').forEach(link=>{
  link.addEventListener('click', ()=> mobileNav.classList.add('hidden'));
});
