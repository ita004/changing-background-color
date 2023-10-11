const changeBckColor = function () {
    const hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hexValues[Math.floor(Math.random() * 16)]
    }
    return color;
}

let para;
const startChangingColor = function () {
    para = setInterval(changeBgColor, 1000)

    function changeBgColor() {
        document.body.style.backgroundColor = changeBckColor();
    }

}

const stopChangingColor = function () {
    clearInterval(para);
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);