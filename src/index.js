//JavaScript
const logo = document.getElementById('logo');
const button = document.getElementById('target');

button.addEventListener('click', changeLogo);

function changeLogo() {
  logo.setAttribute('src', 'images/logo-new.png');
  console.log(logo.src);
}
