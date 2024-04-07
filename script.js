document.getElementById('imagen').addEventListener('click', function() {
    var imagen = document.getElementById('imagen');
    if (imagen.style.border === '4px solid red') {
        imagen.style.border = '4px solid transparent';
    } else {
        imagen.style.border = '4px solid red';
    }
});
