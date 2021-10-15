import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDescription from './pages/product_description/ProductDescription';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './dashboard/Dashboard';
import History from './dashboard/History';
import Balances from './dashboard/Balances';
import Cards from './dashboard/Cards';
import Receipts from './dashboard/Receipts';
import Inventory from './dashboard/Inventory';
import StoreInfo from './dashboard/StoreInfo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route path='/contact' component={Contact} />
        <Route path='/dashboard/history' component={History} />
        <Route path='/dashboard/balances' component={Balances} />
        <Route path='/dashboard/cards' component={Cards} />
        <Route path='/dashboard/receipts' component={Receipts} />
        <Route path='/dashboard/settings' component={StoreInfo} />
        <Route path='/dashboard/inventory' component={Inventory} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
