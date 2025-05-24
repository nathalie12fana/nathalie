

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

document.addEventListener("DOMContentLoaded", function () {

  // on recupere le contenue de fichier navbar.html pour le placer dans l'élément avec l'id navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Erreur lors du chargement de la navbar :", error));
// on recupere le contenue de fichier footer.html pour le placer dans l'élément avec l'id footer
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("myfooter").innerHTML = data;
    })
    .catch(error => console.error("Erreur lors du chargement du footer :", error));

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
  
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
  mobileMenu.classList.remove('translate-x-0');
});
  }
);


