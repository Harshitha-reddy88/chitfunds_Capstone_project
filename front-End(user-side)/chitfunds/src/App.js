import './App.css';
import HomePage from './Components/homepage';
import Signup from './Components/signup';
//import Forgotpassword from './Components/forgotpage';
//import Bank from './Components/Bankdetails';
import {Routes,Route} from 'react-router';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/home" Component={HomePage}/>
        <Route path="/page" Component={Signup }/>
      </Routes>
      {/* <HomePage />  */}
      {/* <Forgotpassword />  */}
      {/* < BankDetails /> */}
      {/* <br/> */}
      {/* <Bank/> */}
      {/* <Signup/> */}
    </div>
  );
}
export default App;


