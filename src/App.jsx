import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDescription from './pages/product_description/ProductDescription';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={Dashboard} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
