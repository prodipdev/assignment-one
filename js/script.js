document.getElementById("post-comment").addEventListener('click', function () {
    // Get input filed
    const inputFiled = document.getElementById('input-comment');
    const inputText = inputFiled.value;
    const inputAuthorName = document.getElementById('input-author');
    const authorText = inputAuthorName.value;

    // Check input filed
    const textOnlyPattern = /^[a-zA-Z]+$/;
    if (!inputText || !textOnlyPattern.test(authorText)) {
        if (!inputText && !textOnlyPattern.test(authorText)) {
            alert('Please write quote and input author name.');
        } else if(!inputText) {
            alert('Please write quote.')
        } else if (!textOnlyPattern.test(authorText)) {
            if (!authorText) {
                alert('Please input author name.')
            } else {
                alert('Author name can only contain letters.');
            }
        }
        return;
    }

    // Create Quote Filed
    const quoteBody = document.createElement('div');
    quoteBody.classList.add('quote-item');
    const newQuote = document.createElement('p');
    newQuote.innerText = inputText;

    // Create Author Filed
    const authorBody = document.createElement('p');
    authorBody.classList.add('author');
    authorBody.innerText = authorText;

    // Set new comment into Quote Container
    const quoteContainer = document.getElementById('quote-content');
    quoteBody.append(newQuote, authorBody);
    quoteContainer.appendChild(quoteBody);

    // Rest Input Filed
    inputFiled.value = '';
    inputAuthorName.value = '';
})