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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/page/Mashriq" component={Mashriq} />
        <Route path="/page/JuniorCategory" component={JuniorCategory} />
        <Route path="/page/Signup" component={SignupPage} />

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
