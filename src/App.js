
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Detail from './containers/Detail/Detail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>

    <Route path="/" exact component={Home}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/detail" exact component={Detail}/>

    </Switch>
    </BrowserRouter>
      
    </div>
  )
}

export default App;
