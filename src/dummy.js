
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
const todosList = [
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Watch a movie" },
  ]


  const [todos, setTodos] = useState(todosList)

    setTodos(updatedItem)

function deleteTodo(id) {
  const newTodos = todos.filter((item) => {
    return item.id !== id
  })

  setTodos(newTodos)
}

function addTodo(newTodo) {
  setTodos([...todos, newTodo])
}

todo.id === id ? updatedTodo : todo
  })function editTodo(id, updatedTodo) {
  const updatedItem = todos.map((todo) => {
    return 