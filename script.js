const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");



function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}
window.addEventListener('scroll', () => {

    // Check if the screen width is above 768px (MD breakpoint in Tailwind)
    if (window.innerWidth > 768) {
        if (scrollY > 60) {
            navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-md', 'shadow-sm');
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
        } else {
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-md', 'shadow-sm');
            navLinks.classList.add('bg-purple-300', 'shadow-sm', 'bg-opacity-50');
        }
    } else {
        // Remove any added classes to ensure mobile view isn't affected
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-md', 'shadow-sm');
        navLinks.classList.add('bg-purple-300', 'shadow-sm', 'bg-opacity-50');
    }
});


// ----------------lightMode and dark mode-----------------

document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
);
  function toggleTheme() {
    document.documentElement.classList.toggle('dark'); 
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}