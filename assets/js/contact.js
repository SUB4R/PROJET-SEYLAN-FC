document.addEventListener('leo', function () {
    function toggleMenu(event) {
        const submenu = event.currentTarget.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    }

    // Attach click event listeners to menu items with submenus
    const menuWithSubs = document.querySelectorAll('#boutique-menu, #club-menu, #contact-menu');
    menuWithSubs.forEach(menu => {
        menu.addEventListener('click', toggleMenu);
    });
});