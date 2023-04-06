import './App.css';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const user = {name: "Anna", age: 19} 
 
  return (
    <div className="App">
        <AboutPage user={user} active="false"/>
        <MainPage user={user} active="false"/>
    </div>
  );
}

export default App;
