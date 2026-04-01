import './App.css';
import Counter from './Component/Counter/counter';
import UserList from './Component/UserList/userList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: 'white' }}>Practice Questions</h2>
        <Counter />
        <UserList />
      </header>
    </div>
  );
}

export default App;
