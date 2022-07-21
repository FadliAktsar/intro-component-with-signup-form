const input = document.getElementsByTagName("input");
const button = document.querySelector('.input-form-dua .button button');
const pesanError = document.querySelectorAll(".input-form-dua div.error");

const namaPertama = document.querySelectorAll(".input-form-dua div.nama-pertama");
const namaKedua = document.getElementsByClassName('nama-kedua');
const email = document.getElementsByClassName('email');
const password = document.getElementsByClassName('password');

button.addEventListener('click', function() {
    newData = []
    if (newData == 0) {
      for (let i = 0; i < input.length; i++) {
        input[i].style.border = "2px solid red";
        input[i].style.transition = "1s"
      }
      for(let i = 0; i < pesanError.length; i++){
        pesanError[i].innerHTML = 'error panjang banget tulisannya'
        pesanError[i].style.fontSize = '10px'
        pesanError[i].style.color = 'red'
        pesanError[i].style.width = '90%'
        pesanError[i].style.display = 'flex'
        pesanError[i].style.justifyContent = 'end'
      }
    }
})