document.getElementById('verify-button').addEventListener('click', function() {
    var digit1 = document.getElementById('digit1').value;
    var digit2 = document.getElementById('digit2').value;
    var digit3 = document.getElementById('digit3').value;
    var password = digit1 + digit2 + digit3;
    var resultElement = document.getElementById('password-result');
    
    if (password === '911') {
        resultElement.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultElement.textContent = 'Password 2 es correcto';
    } else {
        resultElement.textContent = 'Password incorrecto';
    }
});
