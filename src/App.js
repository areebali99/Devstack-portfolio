import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import devstack from './assets/devstack.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  return (
    <>
    <div className='nav-bar'>
    <img src={devstack} alt="dev" id='devstack'/>
    <ul>
      <li>Technologies <KeyboardArrowDownIcon /></li>
      <li>Engineering <KeyboardArrowDownIcon /></li>
      <li>Services <KeyboardArrowDownIcon /></li>
      <li>Resources <KeyboardArrowDownIcon /></li>
      <li>IP Protection </li>
    </ul>
    <button className='contact-nav'>Contact Us</button>
    </div>
   
     <Header/>
    </>
  );
}

export default App;
