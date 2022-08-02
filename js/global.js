const email = 'thibaut.baguette@mail.mcgill.ca';
const cvPath = '/cv/test.pdf';

var currentLang = $('html').attr('lang');
var switchToLang = 'NA';
if (currentLang === 'fr') {
    switchToLang = 'en';
} else if (currentLang === 'en') {
    switchToLang = 'fr';
}

function switchLang() {
  var url = window.location.href;
  url = url.replace(currentLang, switchToLang);
  window.location.assign(url);
}


export { email, cvPath, currentLang, switchLang };