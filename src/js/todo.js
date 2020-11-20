console.log('Lets make a better todo!')

const formTodo = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#list')
const template = document.querySelector('#list-item-template')
const LOCAL_PREFIX = 'TODO_LIST'
const LOCAL_KEY = `${LOCAL_PREFIX}-todos`

let todos = loadTodos()
todos.forEach(renderTodo)

todoList.addEventListener('change', e => {
  if (!e.target.matches('[data-list-item-checkbox]')) return

  const parent = e.target.closest('.list-item')
  const todoId = parent.dataset.todoId
  const todo = todos.find(t => t.id === todoId)

  todo.done = e.target.checked
  saveTodos()
})

todoList.addEventListener('click', e => {
  if (!e.target.matches('[data-button-delete]')) return

  const parent = e.target.closest('.list-item')
  const todoId = parent.dataset.todoId

  parent.remove()
  todos = todos.filter(todo => todo.id !== todoId)
  saveTodos()
})

formTodo.addEventListener('submit', e => {
  e.preventDefault()

  const todoName = todoInput.value
  if (todoName === '') return

  const newTodo = {
    name: todoName,
    done: false,
    id: new Date().valueOf().toString(),
  }
  todos = [newTodo, ...todos]

  renderTodo(newTodo)
  saveTodos()
  todoName.value = ''
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true)
  const listItem = templateClone.querySelector('.list-item')
  const textEle = templateClone.querySelector('[data-list-item-text]')
  const checkbox = templateClone.querySelector('[data-list-item-checkbox]')

  listItem.dataset.todoId = todo.id
  textEle.innerText = todo.name
  checkbox.checked = todo.done
  todoList.prepend(templateClone)
}

function saveTodos() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

function loadTodos() {
  const todosString = localStorage.getItem(LOCAL_KEY)
  return JSON.parse(todosString) || []
}
