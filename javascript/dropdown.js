const dropdown = document.querySelector("#dropdown");
const dropdownBackButton = document.querySelector("#dropdown-back");
const burgerMenu = document.querySelector("#burger-menu");

function openDropdown(event){
    dropdown.classList.replace("close", "open");
}

function closeDropdown(event){
    dropdown.classList.replace("open", "close");
}

burgerMenu.addEventListener('click', openDropdown);
dropdownBackButton.addEventListener('click', closeDropdown);