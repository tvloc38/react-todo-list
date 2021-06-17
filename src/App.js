import logo from './logo.svg';
import './App.css';

function App() {
  let todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}

export default App;
