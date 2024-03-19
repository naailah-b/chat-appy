document.querySelector('#check').addEventListener('click', () => {
    let show = document.querySelector('#pass');
    if (show.type == 'password') {
        show.type = 'text';
    }
    else {
        show.type = 'password';
    }
})

let btn = document.querySelector('#submit');
let user = document.querySelector('#user');
let pass = document.querySelector('#pass');

btn.addEventListener('click', () => {
    if (user.value == "a" && pass.value == "b") {
        location.href = "main.html";
    }
    console.log(user.value);
})
