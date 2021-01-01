// Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, amely 15 perc után lejár:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

'use strict';

const now = new Date();
now.setTime(now.getTime() + 15 * 60 * 1000);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const expires = now.toUTCString();

document.cookie = `token=${token};expires=${expires};path='/';`;

// maxAge-dzsel egyszerűbben megoldható
document.cookie = `token1=${token};max-age=${15 * 60};path='/';`;

// a próbája
const now2 = new Date();
now2.setTime(now2.getTime() + 10000);
const expires2 = now2.toUTCString();
document.cookie = `token2=${token};expires=${expires2};path='/';`;
document.cookie = `token3=${token};max-age=10;path='/';`;
