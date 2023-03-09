const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const valueLabel = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick () { 
    counterValue -= 1;
    valueLabel.textContent = counterValue;
};

incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick () { 
    counterValue += 1;
    valueLabel.textContent = counterValue;
};
