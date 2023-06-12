// alert("hi");

// змінні

// const a = 7;
// a = 15;

// data types

// if, condition  це умова

// const a = 16;

// if (a > 17) {
//     alert("Ви успішно увійшли");
// } else {
//     alert("Вам не виповнилось 18. Ви не можете зайти");
// }

//  arrays  це массиви, використовуемо, коли декілька чи багато значень

let arr = ["nick", "john", "mary"];

// alert(arr.length);

// Loops, for - це цикли

for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];  
    if (i == 0) {
        alert(arr[i]);
    } else {
    }
    // alert(i + i);
}

//  DOM manipulating

// const title = document.
// getElementById("title");
// console.log(title);

// title.style.backgroundColor = "red";

// 1 - завдання перше - створіть html елемент p і з допомогою js поміняйте його колір
const parag = document.
getElementById("parag");
parag.style.color = "green";

// 2 - завдання друге - створіть 2 html елементи p,
// створіть з ними масив і в циклі поміняйте його колір

const oleg = document.getElementById("oleg");
const olga = document.getElementById("olga");

let arr1 = [oleg, olga];

for (let i = 0; i < arr1.length; i++) {
    arr1[i].style.color = "red";  
}

//  - завдання nhtn' - створіть 2 html елементи p,
// створіть з ними масив і в циклі поміняйте їх колір (кольори мають бути різними)


const kiev = document.getElementById("kiev");
const minsk = document.getElementById("minsk");

let arr2 = [kiev, minsk];

for (let i = 0; i < arr2.length; i++) {
    if (i == 0) {
        arr2[i].style.color = "purple";
    }   
        else {
            arr2[i].style.color = "yellow";
        }
}

// // користувач вводить свій вік,
// а ви в алерті показуєту, в якому році він народився
const btn4 = document.querySelector("#btn1");
const input2 = document.querySelector("#input1");

function yourAge() {
    let userAge = 2023 - input1.value;
    if (!input1.value) {
    alert("2023 not your birth year");
    } else {
    alert(userAge);
    }
    input1.value = "";
}
btn4.addEventListener("click", yourAge);




// завдання один
// створіть довільний масив
// створіть кнопку, після кліку на яку в алерті отримуємо розмір створеного масиву


// завдання два
// створіть абзац
// створіть кнопку, після кліку на яку колір абзацу змінюється
const changePar = document.querySelector("#parColor");
const btnColor = document.querySelector("#btnColor");
function parColor() {
  // Генеруємо випадковий RGB колір
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

    changePar.style.color = randomColor;
}

btnColor.addEventListener("click", parColor);