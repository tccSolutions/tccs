import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/homepage';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
      <Switch>
        <Route exact path ='/' component = {Homepage} />
      </Switch>   
      </div>         
    </BrowserRouter>
  );
}

export default App;
