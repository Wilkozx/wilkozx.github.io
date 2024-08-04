const burgermenu = document.querySelector('#burgermenu');
const navbar = document.querySelector('#navbar ul');

burgermenu.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else { 
        navbar.style.display = 'block';
    }
});