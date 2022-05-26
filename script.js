/*--------------Creating Memory Leak--------------*/
const mainbox = document.querySelector('.mainbox');
const elementList = [];

const addElement = () => {
    for(let i=0;i<10000;i++){
        const newDiv = document.createElement('div');
        elementList.push(newDiv);
        newDiv.innerHTML = "rahul is op";
        mainbox.append(newDiv);
    }
}

const removeElement = () => {
    elementList.forEach((item) => item.remove());
}

const addButton = document.querySelector('.add');
const removeButton = document.querySelector('.remove');

addButton.addEventListener('click', () => {
    addElement();
});

removeButton.addEventListener('click', removeElement);


/*----------------Reder a list with 1000+ elements--------*/
// const list = document.querySelector(".list");
// for(let i=0;i<1000000;i++){
//     const listElement = document.createElement("li");
//     listElement.innerHTML =   `
//         <div>
//             <h1>Hello boy</h1>
//             <p>Get the toy number ${i} and run!</p>
//         </div>
//     `;
//     list.append(listElement);
// }


/*---------------For snapshots ---------------*/
// let a = [1, 2, 3];
// let flag = false;

// const mainbox = document.querySelector(".mainbox");
// mainbox.addEventListener('click', () => {
//     mainbox.style.color = flag ? "red" : "blue";
//     flag = !flag;
// });

// a.push(4);
// console.log(a);

// a.push(4);
// console.log(a);

