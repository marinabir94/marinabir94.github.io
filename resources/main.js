let buttonSections = document.getElementById('dropdown-button');
let hiddenList = document.getElementById('hidden');

buttonSections.addEventListener('click', showMenu);

function showMenu(){
    if(hiddenList.classList.contains('hidden-menu')){
        hiddenList.className = 'active';
    } else{
        hiddenList.className = 'hidden-menu';
    }

}
