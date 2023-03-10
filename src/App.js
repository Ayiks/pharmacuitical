import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import HomePage from './components/Home/HomePage';
import StaffView from './pages/staff';
import Navbar from './components/Navbar/Navbar';
import 'remixicon/fonts/remixicon.css';
import Customer from './pages/Customer';
import POS from './pages/Sales';
import SalesPOS from './components/SalesPOS'

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <StaffView /> */}
      {/* <Customer/> */}
      {/* <POS /> */}
      <SalesPOS/>
    </div>
  );
}

export default App;
