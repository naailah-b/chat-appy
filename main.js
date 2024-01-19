let set = document.querySelector('#settings');
let classy = document.querySelector('idk');

set.addEventListener('click', () => {
    if (set.className != 'newClass') {
        classy.className = 'newClass';
    }
    else {
        classy.classList.remove('newClass');  
    }
})