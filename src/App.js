import './App.css';
import TodoList from './components/TodoList';

// hacer un footer con opciones (clear) y hacer que se pueda modificar el titulo.

function App() {
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
}

export default App;
