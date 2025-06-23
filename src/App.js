
import ProductsList from './ProductsList';
import BuyEaseForm from './BuyEaseForm';
import OrderPage from './OrderPage';
import Recipt from './Recipt';
import Statistics from './Statistics';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navigation from './Navigation';


function App() {
  /**return (
    <div>{<OrderPage />}</div>
    
  );**/

  return (
    <div className="container">
           <Navigation />
  </div>

  );
}

export default App;
