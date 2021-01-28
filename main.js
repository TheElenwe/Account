const readlineSync = require("readline-sync");

const userName = readlineSync.question("Input the Username: ");
const password = readlineSync.question("Input the password: ");
const profilPicture = readlineSync.question("Input the profil picture: ");
const email = readlineSync.question("Input the email: ");
if (userName === "elenwe") {
} else if (password === "poker21") {
} else if (profilPicture === "yes") {
} else if (email === "elenwe97@hotmail.com") {
}
console.log("User name:",userName, ",", "Password:",password,",","Has Photo:", profilPicture, ",","Email:", email);
