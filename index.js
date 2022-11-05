let ArrayofObject = [];
let trs = document.querySelector("#book-list").getElementsByTagName('tr');


function GetFromLocalStorage() {
    if (localStorage.getItem('ArrayofObject') === null) {
        ArrayofObject = [];
    } else {
        ArrayofObject = JSON.parse(localStorage.getItem('ArrayofObject'));
        ArrayofObject.forEach(element => {
            addtoUI(element);
        });
    }
}

GetFromLocalStorage();

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    let newObject = {
        Author: author,
        Isbn: isbn
    }
    ArrayofObject.push(newObject);
    addtoUI(newObject);
    localStorage.setItem('ArrayofObject', JSON.stringify(ArrayofObject));
})

function addtoUI(object) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
<td>${object.Author}</td>
<td>${object.Isbn}</td>
<td><button class="btn btn-danger btn-sm delete">X</button></td>
<td><button class="view">View</button></td>
`;
    list.appendChild(row);
}


function removeFromUIAndViewToUI(el) {
    let Testarray = [...trs];
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
        ArrayofObject.splice(Testarray.indexOf(el.parentElement.parentElement), 1);
        document.querySelector('.hiddenDiv').style = "display:none";
        document.querySelector('.htmlAuthor').innerHTML = "";
        document.querySelector('.htmlIsbn').innerHTML = "";

        localStorage.setItem('ArrayofObject', JSON.stringify(ArrayofObject));
    }

    if (el.classList.contains('view')) {
        let temporary = ArrayofObject[Testarray.indexOf(el.parentElement.parentElement)];
        document.querySelector('.hiddenDiv').style = "display:block";
        document.querySelector('.htmlAuthor').innerHTML = temporary.Author;
        document.querySelector('.htmlIsbn').innerHTML = temporary.Isbn;
    }
}

document.querySelector('#book-list').addEventListener('click', (e) => {
    removeFromUIAndViewToUI(e.target);
});

