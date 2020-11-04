window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(popUpRandomMole, 0);


});

function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__mole-head");
    let randomNum = Math.floor(Math.random() * moles.length);
    let randomMole = moles[randomNum];
    console.log(randomMole.classList)
    randomMole.classList.remove(".wgs__mole-head--hidden");
    console.log(randomMole.classList)
    //setTimeout(hideMole, 1000, randomMole);
}

function hideMole(param) {
    param.classList.add(".wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
}
