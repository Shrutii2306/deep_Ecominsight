
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      
      <div className="container flex px-20 py-10">
        <Sidebar/>
        <Feed/>
      </div>
     
      
    </div>
  );
}

export default App;
