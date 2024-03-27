const menuMobile = document.querySelector('img');

function handleClick(event) {
     this.classList.toggle('ativo');
}
menuMobile.addEventListener('click', handleClick);
