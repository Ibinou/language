// Fonction pour charger les traductions
function loadTranslations(language) {
  fetch(`${language}.json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('home').innerText = data.home;
      document.getElementById('about').innerText = data.about;
      document.getElementById('contact').innerText = data.contact;
      document.getElementById('him').innerText = data.him;
    });
}

// Fonction pour changer la langue
function changeLanguage(language) {
  loadTranslations(language);
  localStorage.setItem('language', language);
}

// Vérifie si la langue est déjà enregistrée dans le local storage
var savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  changeLanguage(savedLanguage);
} else {
  // Chargement initial des traductions (langue par défaut)
  changeLanguage('en');
}

// Fonction pour changer la langue en anglais
document.getElementById('btn-en').addEventListener('click', function() {
  changeLanguage('en');
});

// Fonction pour changer la langue en français
document.getElementById('btn-fr').addEventListener('click', function() {
  changeLanguage('fr');
});
