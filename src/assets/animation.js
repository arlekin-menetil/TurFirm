function menuToggle(){
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
};
function search(){
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    search.classList.toggle('active');
    icon.classList.toggle('active');
}; 




     export {menuToggle};
     export {search};