const iniciaSesionLink = document.querySelector('.iniciaSesion');
const popup = document.querySelector('.popup');

iniciaSesionLink.addEventListener('click', function() {
  popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
});
