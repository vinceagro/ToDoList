const input = document.querySelector('.input');

const addButton = document.querySelector('.newToDo');

const container = document.querySelector('.current-container')

const removeSelected = document.querySelector('.removeSelected')

const allElements = [];

const createDiv = (className) => {
    const elementBox = document.createElement('div');
    elementBox.classList.add(className)

    return elementBox;
};

class Element {
    constructor(elementName) {
        this.createDiv(elementName)
    }

    createDiv(elementName) {
        let input = document.createElement('input');
        input.value = elementName;
        input.disabled = true;
        input.type = 'text';
        input.classList.add('input')

        let i = document.createElement('i');

        const divButtons = createDiv('divButtons');
        const elementBox = createDiv('item');
        const divInput = createDiv('divInput');

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox';
        checkbox.checked = false;

        const edit = document.createElement('button');
        edit.classList.add('buttons');
        edit.appendChild(i);
        edit.classList.add('fas', 'fa-edit')


        const remove = document.createElement('button');
        remove.classList.add('buttons')
        remove.appendChild(i);
        remove.classList.add('fas', 'fa-trash')

        container.appendChild(elementBox);
        divButtons.appendChild(checkbox)
        divButtons.appendChild(edit);
        divButtons.appendChild(remove);
        divInput.appendChild(input);
        elementBox.appendChild(divInput);
        elementBox.appendChild(divButtons);

        edit.addEventListener('click', () => this.editToDo(input))

        window.addEventListener('keydown', (e) => {
            e.which === 13 ? check() : e != 13
        });

        remove.addEventListener('click', () => this.remove(elementBox))
        checkbox.addEventListener('click', () => this.removeSelected(elementBox, allElements, checkbox))

        this.whatever = input;
    }


    editToDo(input) {
        input.disabled = !input.disabled
        input.parentNode.classList.toggle('selected');



    }
    remove(elementBox) {
        container.removeChild(elementBox);
    }

    removeSelected(elementBox, arr, check) {
        if (check.checked) {
            arr.push(elementBox);
            return arr;
        } else {
            this.removeUnticked(arr)
        };
    }

    removeUnticked(arr) {
        for (let e of arr) {
            arr.splice(e, 1);
            console.log(arr)
            return arr
        }
    }
}

let stringa = "hello";
let num = 3333;
// let num = 0x4444;
let obj = {};

window.beforee = obj;
window.beforee1 = num;

obj.name = "hello";
num = 4444;

window.afterr = obj;
window.afterr2 = num;
// console.log(obj);

// const funct = (varr) => {

// };

const check = () => {
    if (input.value === '') return;

    allElements.push(new Element(input.value));
    input.value = '';
    input.select()
}

const removeSelection = () => {
    const list = document.querySelectorAll('.divButtons');
    const todos = [...list];
    console.log('todos', todos)
    todos.map(el => {
        const input = el.querySelector('input');
        const checked = input.checked;
        if (input.checked) {
            const rootRowParent = el.closest('.item');
            rootRowParent.parentNode.removeChild(rootRowParent);

        }
    })
}

addButton.addEventListener('click', check);
removeSelected.addEventListener('click', removeSelection);

window.addEventListener('keydown', (e) => {
    e.which === 13 ? check() : e != 13
})