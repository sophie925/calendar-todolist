import './App.css';
import './styles/style.css';
import Calendar from './components/Calendar/Calendar';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Calendar />
      <Todo />
    </div>
  );
}

export default App;
