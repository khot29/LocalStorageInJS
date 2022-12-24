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


//-------------------------------- array filtering in js----------------------



  let results = [
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'usa',
      zipcode: 2132,
      oderId: 1,
      custIdOrder: 1,
      oQty: 2,
      invoice: 555500
    },
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'usa',
      zipcode: 2132,
      oderId: 8,
      custIdOrder: 1,
      oQty: 1,
      invoice: 1511
    },
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'usa',
      zipcode: 2132,
      oderId: 9,
      custIdOrder: 1,
      oQty: 23,
      invoice: 121515
    },
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'nes',
      zipcode: 69453,
      oderId: 1,
      custIdOrder: 1,
      oQty: 2,
      invoice: 555500
    },
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'nes',
      zipcode: 69453,
      oderId: 8,
      custIdOrder: 1,
      oQty: 1,
      invoice: 1511
    },
    {
      customerId: 1,
      cName: 'Tim',
      email: 'IND',
      phone: 545454545,
      place: 'nes',
      zipcode: 69453,
      oderId: 9,
      custIdOrder: 1,
      oQty: 23,
      invoice: 121515
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'ind',
      zipcode: 54434,
      oderId: 2,
      custIdOrder: 2,
      oQty: 8,
      invoice: 515151
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'ind',
      zipcode: 54434,
      oderId: 7,
      custIdOrder: 2,
      oQty: 2,
      invoice: 515151
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'ind',
      zipcode: 54434,
      oderId: 10,
      custIdOrder: 2,
      oQty: 331,
      invoice: 5634
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'aus',
      zipcode: 2366,
      oderId: 2,
      custIdOrder: 2,
      oQty: 8,
      invoice: 515151
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'aus',
      zipcode: 2366,
      oderId: 7,
      custIdOrder: 2,
      oQty: 2,
      invoice: 515151
    },
    {
      customerId: 2,
      cName: 'Jim',
      email: 'UAE',
      phone: 6565,
      place: 'aus',
      zipcode: 2366,
      oderId: 10,
      custIdOrder: 2,
      oQty: 331,
      invoice: 5634
    },
    {
      customerId: 3,
      cName: 'KIm',
      email: 'IN',
      phone: 11511561,
      place: 'jim',
      zipcode: 94894,
      oderId: 5,
      custIdOrder: 3,
      oQty: 2,
      invoice: 4242542
    },
    {
      customerId: 3,
      cName: 'KIm',
      email: 'IN',
      phone: 11511561,
      place: 'jim',
      zipcode: 94894,
      oderId: 6,
      custIdOrder: 3,
      oQty: 2,
      invoice: 351454
    },
    {
      customerId: 4,
      cName: 'Rim',
      email: 'UA',
      phone: 5451,
      place: null,
      zipcode: null,
      oderId: 3,
      custIdOrder: 4,
      oQty: 3,
      invoice: 52452
    },
    {
      customerId: 4,
      cName: 'Rim',
      email: 'UA',
      phone: 5451,
      place: null,
      zipcode: null,
      oderId: 4,
      custIdOrder: 4,
      oQty: 2,
      invoice: 252445
    },
    {
      customerId: 92,
      cName: 'se342',
      email: 'mailto:abs@gamil.com',
      phone: 54877654,
      place: null,
      zipcode: null,
      oderId: null,
      custIdOrder: null,
      oQty: null,
      invoice: null
    },
    {
      customerId: 93,
      cName: null,
      email: null,
      phone: null,
      place: null,
      zipcode: null,
      oderId: null,
      custIdOrder: null,
      oQty: null,
      invoice: null
    },
  ]
  let filteredaddressect = {}

  results.forEach((row) => {
    if (!(row.customerId in filteredaddressect)) {
      filteredaddressect[row.customerId] = {
        customerId: row.customerId,
        cName: row.cName,
        phone: row.phone,
        address: [],
        order: [],
      };
    }

    filteredaddressect[row.customerId].address.push({
      place: row.place,
      zipcode: row.zipcode,
    });

    filteredaddressect[row.customerId].order.push({
      oderId: row.oderId,
      custIdOrder: row.customerId,
      oQty: row.oQty,
      invoice: row.invoice
    });


  });

  console.log(filteredaddressect)


  for (let x in filteredaddressect) {
    filteredaddressect[x].address = filteredaddressect[x].address.filter((value, index, array) => {
      console.log(value,index,array);
      console.log(array.findIndex((element) => (element.place === value.place)))
      return index == array.findIndex((element) => (
        element.place == value.place
      ))
    })
  }

  for (let x in filteredaddressect) {
    filteredaddressect[x].order = filteredaddressect[x].order.filter((value, index, array) => {
      return index == array.findIndex((element) => (
        element.oderId == value.oderId
      ))
    })
  }







