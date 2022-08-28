import './App.css';
import FormAuth from './components/FormAuth';
import User from './components/User';
import { useContext } from 'react';
import { UserContext } from './components/UserContext.jsx';

function App() {
  const { userData } = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header"></header>
      {userData ? <User /> : <FormAuth />}
    </div>
  );
}

export default App;
