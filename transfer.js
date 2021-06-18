let enteredText = document.getElementById('enteredText');

(function () {
    enteredText.innerText = sessionStorage.getItem('Text');
    console.log(enteredText.innerText);
    return enteredText.innerText;
})();