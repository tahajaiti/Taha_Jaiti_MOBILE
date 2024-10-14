const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const navMenu = document.querySelector(".navmenu");

toggleBtn.onclick = function(){
    navMenu.classList.toggle("open");
    const Open = navMenu.classList.contains("open");

    toggleBtnIcon.classList = Open
    ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}