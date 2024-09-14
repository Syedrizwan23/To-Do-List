const todoList = document.getElementById('todo-list');
const addTaskBtn = document.getElementById('add-task');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const darkModeToggle = document.getElementById('dark-mode-toggle');

let todos = [
    { id: 1, text: 'Study', completed: true },
    { id: 2, text: 'playing Game', completed: false },
    { id: 3, text: 'Workout', completed: false },
    { id: 4, text: 'Dinner', completed: false }
];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
        `;
        li.querySelector('input').addEventListener('change', () => toggleTodo(todo.id));
        todoList.appendChild(li);
    });
}

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    renderTodos();
}

addTaskBtn.addEventListener('click', () => {
    const text = prompt('Enter a new task:');
    if (text) addTodo(text);
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    todos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm));
    renderTodos();
});

filterSelect.addEventListener('change', () => {
    const filter = filterSelect.value;
    if (filter === 'active') {
        todos = todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
        todos = todos.filter(todo => todo.completed);
    }
    renderTodos();
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

renderTodos();

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    
    let currentMode = 'light';

    toggleButton.addEventListener('click', function() {
        currentMode = currentMode === 'light' ? 'dark' : 'light';
        
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        toggleButton.textContent = currentMode === 'light' ? 'Dark Mode' : 'Light Mode';
    });
});

