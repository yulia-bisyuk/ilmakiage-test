//JavaScript
const logo = document.getElementById('logo');
const button = document.getElementById('target');

button.addEventListener('click', changeLogo);

function changeLogo() {
  logo.src = 'logo-new.95e3e92f.png';
}
