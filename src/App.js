
import './App.css';
import  Header  from "./MyComponent/Header";
import { Qform } from "./MyComponent/Qform";
import { Footer } from "./MyComponent/Footer";
import { OurTechnicians } from "./MyComponent/OurTechnicians";
import { Contact } from "./MyComponent/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<>
<Router>
   <Header/>

   <Switch>
          
          <Route exact path="/qform">
          <Qform/>
          </Route>
          
          <Route  exact path="/contact">
          <Contact/>
          </Route>
        
          <Route  exact path="/ourtechnicians">
          <OurTechnicians/>
          </Route>
        </Switch>
<Footer/>
</Router>
 </>
  );
}

export default App;
