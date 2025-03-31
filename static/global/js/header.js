document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('#hamburgerButton');
    const mobileMenu = document = document.querySelector('#headerNav');


    hamburgerButton.addEventListener("click", (e) => {
        hamburgerButton.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburgerButton.classList.remove('active')
        }
    });
});