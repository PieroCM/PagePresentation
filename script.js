// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave accesible
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    // si el menú móvil está abierto, ciérralo
    if (window.innerWidth <= 768) closeMenu();
  });
});

// Burger / menú móvil
const burger = document.getElementById('burger');
const menu   = document.getElementById('menu');

function openMenu(){
  menu.classList.add('open');
  burger.setAttribute('aria-expanded','true');
  // bloquear scroll de fondo cuando el panel está abierto
  document.documentElement.style.overflow = 'hidden';
}
function closeMenu(){
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded','false');
  document.documentElement.style.overflow = '';
}

burger.addEventListener('click', ()=>{
  const open = menu.classList.contains('open');
  open ? closeMenu() : openMenu();
});

// cerrar al tocar fuera del panel
document.addEventListener('click', (e)=>{
  if (window.innerWidth > 768) return;
  if (!menu.classList.contains('open')) return;
  const clickInside = menu.contains(e.target) || burger.contains(e.target);
  if (!clickInside) closeMenu();
});

// cerrar al redimensionar hacia desktop
window.addEventListener('resize', ()=>{
  if (window.innerWidth > 768) closeMenu();
});
