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