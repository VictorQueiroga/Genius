let order = []
let clickedOrder = []
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let shuffleOrder = () => {
    let colorOrder;
    do{
        colorOrder = Math.floor(Math.random() * 4);    
    }while(order.findIndex((x) => {return x == colorOrder}) != -1);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}


let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length && clickedOrder.length >= 1){
        score++;
        if(order.length == 4){
            order = []
            alert(`Score: ${score}\n Congratulations! You have achieved the maximum score\n Press start to play again!`)
        }
        else{
            alert(`Score: ${score}\n You win! Press ok to go to next level!`);
            nextLevel();
        }
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

let createColorElement = (color) => {
    switch(color){
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

let gameOver = () => {
    alert(`Score: ${score}\n Try again!`);
    order = [];
    clickedOrder = [];
    score = 0;
}

let nextLevel = () => {
    shuffleOrder();
}

let playGame = () => {
    alert('Welcome to Genius! Let`s play!');
    score = 0;
    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

