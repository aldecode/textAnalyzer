let totalWords = document.getElementById('totalWords');
let tbodyResult = document.getElementById('tbody');

let wordsArray = enteredText.textContent.replace(/[.,\/#!$%\^&\*;:{}=\-\"_`~()]/g, "").toLowerCase().split(' ')
let wordsDictionary = new Map();

wordsArray.forEach(word => wordsDictionary.has(word) ? wordsDictionary.set(word, wordsDictionary.get(word) + 1) : wordsDictionary.set(word, 1))

function createTable() {
    totalWords.textContent = wordsArray.length;

    for (let [key, value] of wordsDictionary) {
        let tr = document.createElement('tr');
        let wordTd = document.createElement('td');
        let countTd = document.createElement('td');
        wordTd.textContent = key;
        countTd.textContent = value;

        tr.append(wordTd, countTd);
        tbodyResult.appendChild(tr);
    }
}

createTable();
