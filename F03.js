// Adott egy json file, amely valójában egy tömb, lastName, firstName property-ket tartalmazó objektumokkal.
// Írj egy függvényt, amely indít egy ajax kérést, amely elkéri a json tartalmát, és a firstName, lastName párosokat
// egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzést a localStorage-ban, 
// ahol a json tartalmát letárolja.
// Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ban 
// van users bejegyzés, úgy onnan olvassa ki az adatokat,
// ha nincs, csak akkor küldjön ajax kérést.

'use strict';

let fetchInit = {
    method: "GET",
    headers: new Headers,
    mode: "cors",
    cache: "default"
};

const fromArrayToDiv = function (div, arr) {
    div.innerHTML = `<div>\n${arr.map((item, idx) => `<p>${item.firstName} ${item.lastName}</p>\n`).join('')}</div>`;
}

const fillInDiv = function (div) {
    fetch("http://localhost:3000/keyValuePairs", fetchInit).then(
        data => {
            // console.log(data.status);
            if (data.status >= 400) {
                // throw Error("bad url");
                console.error("bad url");
            }
            else {
                console.log(data.json());
                data.json();
            }
        },
        err => console.error(err)
    ).then(users => {
        const storageItem = JSON.stringify(users);
        localStorage.setItem('users', storageItem);
        fromArrayToDiv(div, users);
    }).catch(err => {
        console.error(err);

    });
};

// fillInDiv(document.querySelector('#container'));

const fillInDiv2 = function (div) {
    let html = localStorage.getItem('users');
    console.log('html: ', html)
    if (html) {
        fromArrayToDiv(div, JSON.parse(html));
    } else fillInDiv(div);
}

// fillInDiv2(document.querySelector('#container'));

// div.innerHTML = `<div>\n${users.map((user, idx) => `<p>${user.firstName} ${user.lastName}</p>\n`).join('')}</div>`;
// div.innerHTML = `<div>\n${(JSON.parse(html)).map((user, idx) => `<p>${user.firstName} ${user.lastName}</p>\n`).join('')}</div>`;

// const dbRequest = {
//     in() {
//         fetch("http://localhost:3000/keyValuePairs", fetchInit).then(
//             data => data.json(),
//             err => console.error(err)
//         ).then(users => {
//             console.log("users: ", users);
//             const arr = `<div>\n${users.map((user, idx) => `<p>${user.firstName} ${user.lastName}</p>\n`).join('')}</div>`;
//             // console.log("arr", arr);
//             localStorage.setItem('users', arr);
//         }).catch(err => { console.log(err) });
//     },
// }
