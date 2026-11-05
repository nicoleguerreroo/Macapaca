document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Móvil
  const botonMenu = document.querySelector('#boton-menu');
  const menu = document.querySelector('#menu');
  const enlacesMenu = document.querySelectorAll('#menu a');

  if (botonMenu && menu) {
    botonMenu.addEventListener('click', () => {
      const estaOculto = menu.classList.toggle('hidden');
      botonMenu.setAttribute('aria-expanded', !estaOculto);
      botonMenu.textContent = estaOculto ? 'Menú' : 'Cerrar';
    });

    enlacesMenu.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menu.classList.add('hidden');
        botonMenu.setAttribute('aria-expanded', 'false');
        botonMenu.textContent = 'Menú';
      });
    });
  }

  // 2. Control Modo Claro / Oscuro con LocalStorage
  const botonTema = document.querySelector('#boton-tema');
  const html = document.documentElement;

  const temaGuardado = localStorage.getItem('tema');
  if (temaGuardado === 'dark') {
    html.classList.add('dark');
    if (botonTema) {
      botonTema.setAttribute('aria-pressed', 'true');
      botonTema.textContent = 'Modo claro';
    }
  }

  if (botonTema) {
    botonTema.addEventListener('click', () => {
      const esOscuro = html.classList.toggle('dark');

      botonTema.setAttribute('aria-pressed', esOscuro);
      botonTema.textContent = esOscuro ? 'Modo claro' : 'Modo oscuro';

      localStorage.setItem('tema', esOscuro ? 'dark' : 'light');
    });
  }

  // 3. Inicialización de Librería JS Adicional (AOS - Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

});