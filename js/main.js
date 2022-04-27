// let first_name = prompt("What's your name?");
// let surname = prompt("What's your surname?");
// let color = prompt("What's your favorite color?");
let first_name = "Gianni"
let surname = "Caringi"
let color = "Black"
const SecCode = 21;
let simplepsw = `${first_name + surname + color}21`

document.getElementById("first_name").innerHTML = first_name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("color").innerHTML = color;
document.getElementById("p-word").innerHTML = simplepsw;

cipher_psw = "";

for(let i = 0; i < simplepsw.length; i++){
    let tmp = simplepsw.charCodeAt(i);
    if (tmp >= 65 && tmp <= 90){
        tmp += SecCode;
        if (tmp > 90){
            tmp -= 26;
        }
    }
    if (tmp >= 97 && tmp <= 122){
        tmp += SecCode;
        if (tmp > 122){
            tmp -= 26;
        }
    }
    cipher_psw += String.fromCharCode(tmp);
}
document.getElementById("p-c-word").innerHTML = cipher_psw;

let strong_psw = "";

for (let i = 0; i < simplepsw.length; i++){
    strong_psw += simplepsw[parseInt(Math.random()*simplepsw.length)]
}
document.getElementById("p-s-word").innerHTML = strong_psw;


