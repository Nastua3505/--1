

let counter=0;
const localStorageValue = Number(localStorage.getItem("counter-book"))
    if (localStorageValue) {
        counter = localStorageValue;
    } else {
        counter = 0;
    }
    updateValue();
       
function updateValue(){
  const number = document.querySelector(".total");
  number.innerText = counter;
}

const button = document.querySelectorAll(".button");
const numberc = document.querySelector(".total"); 
numberc.textContent = counter;

function onClick() {
    const total = document.querySelector('.total');
    total.style.display="block";
    counter = ++counter;
    localStorage.setItem("counter-book", counter);
    updateValue();
}
