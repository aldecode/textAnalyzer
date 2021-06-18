let find = document.getElementById('find');
let text = enteredText.textContent;
let dataList = document.getElementById('listData')

find.addEventListener("keyup", findWords)

function findWords() {
    let wordToFind = document.getElementById("find").value;
    if (wordToFind !== "") {
        enteredText.innerText = enteredText.innerText
        dataList.innerHTML = ' ';

        let uniqueWords = new Set(wordsArray.filter(word => word.startsWith(find.value)));

        let matchedWords = Array.from(uniqueWords);
        for (let i = 0; i < 5; i++) {
            let option = document.createElement('option')
            option.value = matchedWords[i];
            dataList.appendChild(option)
        }

        let tempRegExp = new RegExp(wordToFind, 'gi');
        enteredText.innerHTML = enteredText.innerHTML.replace(tempRegExp, replacer);
    }
}

function replacer(match) {
    return `<span class="bg-danger">${match}</span>`;
}
