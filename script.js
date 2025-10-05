// Message qui s'affiche dès qu'on ouvre le site
alert("Bienvenue sur mon premier site 🚀");

// Fonction appelée quand on clique sur le bouton
function direBonjour() {
  alert("Bonjour ! Merci de visiter mon site 🙌");
}
// Fonction pour révéler les sections quand on scroll
function revealOnScroll() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Lancer la fonction au scroll
window.addEventListener("scroll", revealOnScroll);
// Gestion du formulaire de contact
document.getElementById("formulaire-contact").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche le rechargement de la page
  alert("Merci pour ton message ! Je te répondrai bientôt 🚀");
  this.reset(); // vide le formulaire
});
