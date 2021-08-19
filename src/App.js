import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { ContactUs } from './pages/contact-us/contact-us.component';
import { Homepage } from './pages/homepage/homepage';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
      <Switch>
        <Route exact path ='/' component = {Homepage} />
        <Route exact path ='/contactus' component = {ContactUs} />
      </Switch>   
      </div>         
    </BrowserRouter>
  );
}

export default App;
