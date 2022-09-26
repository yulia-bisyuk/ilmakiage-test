//JQuery

const logo = $('#logo');

$('#target').click(function () {
  logo.attr(
    'src',
    logo[0].currentSrc ===
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      ? 'https://www.ilmakiage.com/skin/frontend/ilmakiage/default/images/logo_new.svg'
      : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  );
});

//JavaScript

// const logo = document.getElementById('logo');
// const button = document.getElementById('target');

// button.addEventListener('click', changeLogo);

// function changeLogo() {
//   logo.setAttribute(
//     'src',
//     logo.src ===
//       'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
//       ? 'https://www.ilmakiage.com/skin/frontend/ilmakiage/default/images/logo_new.svg'
//       : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//   );
// }
