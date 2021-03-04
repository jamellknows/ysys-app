import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Houses from './pages/Houses'
import { Dragons , Drogon, Rhaegal, Viserion } from './pages/Dragons';
import  { World, Regions, Cities } from './pages/World';
import { Charcters, JohnSnow, DaenerysTargaryen, TyrionLannister, Characters} from './pages/Characters'
function App() {
  return (
    <Router>
    <Sidebar/>
    <Switch>
      <Route path ="/houses" exact component ={Houses} />
      <Route path ="/dragons" exact component ={Dragons} />
      <Route path ="/dragons/drogon" exact component ={Drogon} />
      <Route path ="/dragons/rhaegal" exact component ={Rhaegal} />
      <Route path ="/dragons/viserion" exact component ={Viserion} />
      <Route path ="/world" exact component ={World} />
      <Route path ="/world/regions" exact component ={Regions} />
      <Route path ="/world/cities" exact component ={Cities} />
      <Route path ="/characters" exact component ={Characters} />
      <Route path ="/characters/john-snow" exact component ={JohnSnow} />
      <Route path ="/characters/daenerys-targaryen" exact component ={DaenerysTargaryen} />
      <Route path ="/dragons/tyrion-lannister" exact component ={TyrionLannister} />
    </Switch>
    </Router>

  );
} 

export default App;
