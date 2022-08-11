const todo = document.querySelector('[data-todo]');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

let todos = [];
button.addEventListener('click', (e) => {
    if (text) {
        const newTodo = {
            id: todos.length + 1,
            text = text,
        };
    }
    
})

const dateNow = new Date();
console.log(dateNow);

export constStringDate = (
    year = new Date().getFullYear(),
    month = new Date().getMonth(),
    day = new Date().getDate()
) => {
    const date = new Date(year, month, day);
    return `${date.getDate(), } - ${date.getMonth()} - ${date.getFullYear()}`;
}