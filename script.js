let champ1= document.getElementById('input1');
let champ2 = document.getElementById('input2');
let switchClick = document.getElementById('switch');

function invers() {
    let a = champ1.value;
    champ1.value = champ2.value;
    champ2.value = a;
}

switchClick.addEventListener("click", invers);