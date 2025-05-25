document.addEventListener("DOMContentLoaded", function () {
  // Charger dynamiquement la navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Une fois la navbar injectée, on peut ajouter les événements
      const menuBtn = document.getElementById('menu-btn');
      const closeBtn = document.getElementById('close-menu');
      const mobileMenu = document.getElementById('mobile-menu');

      if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.remove('translate-x-full');
          mobileMenu.classList.add('translate-x-0');
        });

        closeBtn.addEventListener('click', () => {
          mobileMenu.classList.add('translate-x-full');
          mobileMenu.classList.remove('translate-x-0');
        });
      } else {
        console.warn("Certains éléments du menu mobile sont introuvables.");
      }
    })
    .catch(error => console.error("Erreur lors du chargement de la navbar :", error));

  // Charger dynamiquement le footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("myfooter").innerHTML = data;
    })
    .catch(error => console.error("Erreur lors du chargement du footer :", error));
});
