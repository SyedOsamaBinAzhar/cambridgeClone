import './App.css';
import Home from "../src/Pages/Home/Home"
import Mashriq from "../src/Pages/Mashriq/Mashriq"
import JuniorCategory from "../src/Pages/JuniorCategory/JuniorCategory"
import SignupPage from './Pages/SignupPage/SignupPage';


import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestPage from './Pages/TestPage/TestPage';
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/page/Mashriq" component={Mashriq} />
        <Route path="/page/JuniorCategory" component={JuniorCategory} />
        <Route path="/page/Signup" component={SignupPage} />
        <Route path="/page/Test" component={TestPage} />
        <Route path="/page/Admin" component={Admin} />



       </Switch>
    </div>
  );
}

export default App;


//routing Code
{/* <BrowserRouter>
 <Switch>
  //your routes here
 </Switch>
</BrowserRouter> */}
