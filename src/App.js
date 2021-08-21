import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { ContactUs } from './pages/contact-us/contact-us.page';
import { Homepage } from './pages/homepage/homepage.page';
import { Reviews } from './pages/reviews/reviews.page';
import {AboutPage} from './pages/about/about.page'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
      <Switch>
        <Route exact path ='/about' component = {AboutPage} />       
        <Route exact path ='/contactus' component = {ContactUs} />
        <Route exact path ='/reviews' component = {Reviews}/>
        <Route  path ='/' component = {Homepage} />
      </Switch>   
      </div>         
    </BrowserRouter>
  );
}

export default App;
