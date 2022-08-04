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

$(function () {
  $('.cv-image').click(function () {
    // $(this).toggleClass('focus');
    if ($(this).hasClass('focus')) {
      $(this).removeClass('focus');
      $('#background-blur').remove();
    } else {
      $('.cv-image').removeClass('top');
      $(this).addClass('top');
      $(this).addClass('focus');
      var el = document.createElement('div');
      el.id = 'background-blur';
      $('body').prepend(el);
    }
  })
})

export { email, cvPath, currentLang, switchLang };