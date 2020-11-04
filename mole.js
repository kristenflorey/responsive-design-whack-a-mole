window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(popUpRandomMole, 0);
    let molesOne = document.querySelectorAll(".wgs__mole-head")
    molesOne.forEach((mole) => {
        mole.addEventListener('click', e => {
            mole.classList.add('wgs__mole-head--hidden');
            mole.classList.add('wgs__mole-head--whacked');
        })
    })
});

function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    if (moles.length === 0) {
        let winMessage = document.getElementById('.win-message').hidden = false;
        winMessage.addEventListener('mousemove', e => {
            e.reload()
        })

        return;
    }
    let randomNum = Math.floor(Math.random() * moles.length);
    let randomMole = moles[randomNum];
    console.log(moles)
    randomMole.classList.remove("wgs__mole-head--hidden");
    // console.log(randomMole.classList)
    setTimeout(hideMole, 1000, randomMole);
}

function hideMole(param) {
    param.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
}

function gameOver(){}
