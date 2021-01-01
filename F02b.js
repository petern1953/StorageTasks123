// Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

// viewed: 5
// uid: 354774631237
// ssid: Bx55OWbHJ0Vt_IGIFÍ

// Írj egy olyan objectet, amely az alábbi három metódust megvalósítja:
// - kiolvassa a sütik nevét és értékét,
// - átmenti őket sessionStorage-ba,
// - törli a sütiket.

'use strict';

const cookieHandler = {
    cookies2handle: [
        'viewed=5',
        'uid=354774631237',
        'ssid=Bx55OWbHJ0Vt_IGIFÍ'
    ],
    nullUTCDate: new Date(0).toUTCString(),
    storeCookies() {
        this.cookies2handle.forEach(cookie => document.cookie = cookie);
    },
    getCookies() {
        const cookies = document.cookie
            .split('; ')
            .map(kuki => ({ name: `${kuki.substr(0, kuki.indexOf('='))}`, value: `${kuki.substr(kuki.indexOf('=') + 1)}` }));
        return cookies;
    },
    storeInSessionStorage() {
        const cookies = this.getCookies();
        cookies.forEach(obj => sessionStorage.setItem(`${obj.name}`, `${obj.value}`));
    },
    deleteCookies() {
        // const cookies = cookieHandler.getCookies();
        // cookies.forEach(obj => document.cookie = `${obj.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/';`)
        // or
        // this.cookies2handle.forEach(obj => document.cookie = `${obj.name}=; max-age=0; path='/';`)
        // or
        this.cookies2handle.forEach(obj => document.cookie = `${obj.name}=; expires=${this.nullUTCDate}; path='/';`)
    },
}

// console.log(cookieHandler.getCookies());
// console.log(cookieHandler.storeInSessionStorage());
// console.log(cookieHandler.deleteCookies());

// cookieHandler.getCookies();
// cookieHandler.storeInSessionStorage();
// cookieHandler.deleteCookies();