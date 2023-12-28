document.querySelector('#check').addEventListener('click', () => {
    let show = document.querySelector('#pass');
    if (show.type == 'password') {
        show.type = 'text';
    }
    else {
        show.type = 'password';
    }
})